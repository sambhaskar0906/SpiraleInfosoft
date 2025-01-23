import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, useTheme, Grid, TextField, Button, CircularProgress } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import UploadIcon from '@mui/icons-material/Upload';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector
import { submitApplication } from '../../Slice/applySlice'; // Import the submitApplication action

const names = [
    'Software Developer',
    'Data Scientist',
    'System Administrator',
    'Network Engineer',
    'UI/UX Designer',
    'DevOps Engineer',
    'Cybersecurity Analyst',
    'Database Administrator',
    'Cloud Architect',
    'IT Support Specialist',
];

const ApplyForm = () => {
    const theme = useTheme();
    const [cvName, setCvName] = useState('');
    const [isOpen, setIsOpen] = useState(false); // Tracks whether dropdown is open
    const [selectedName, setSelectedName] = useState(''); // Stores the selected name
    const dropdownRef = useRef(null);

    // Redux Dispatch and State
    const dispatch = useDispatch();
    const { loading, success, error } = useSelector((state) => state.apply); // Get state from Redux store

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            jobType: '',
            cv: null,
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email format').required('Email is required'),
            phone: Yup.string().required('Phone number is required'),
            jobType: Yup.string().required('Job type is required'),
            cv: Yup.mixed().required('CV is required'),
        }),
        onSubmit: (values, { resetForm }) => {
            const formData = new FormData();
            formData.append('name', values.name);
            formData.append('email', values.email);
            formData.append('phone', values.phone);
            formData.append('jobType', values.jobType);
            formData.append('cv', values.cv);

            dispatch(submitApplication(formData)); // Dispatch the submitApplication action

            // Reset the form after submission
            resetForm();
            setCvName(''); // Clear CV name state
            setSelectedName(''); // Clear selected job type state
        },
    });

    const textFieldStyles = {
        '& .MuiInputBase-root': { padding: '10px', borderRadius: '8px' },
        '& .MuiOutlinedInput-root': {
            '& fieldset': { border: '2px solid #000' },
            '&:hover fieldset': { borderColor: '#ff4155' },
            '&.Mui-focused fieldset': { borderColor: '#ff4155' },
        },
        '& .MuiFormLabel-root': { fontSize: '0.8rem' },
    };

    // Toggle dropdown visibility
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    // Handle selection of an option
    const handleSelect = (name) => {
        setSelectedName(name);
        setIsOpen(false); // Close the dropdown after selection
    };

    // Close dropdown if user clicks outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <Box component="form" onSubmit={formik.handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                    label="Name"
                    fullWidth
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    sx={textFieldStyles}
                />
                <TextField
                    label="Email"
                    fullWidth
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    sx={textFieldStyles}
                />
                <TextField
                    label="Phone Number"
                    fullWidth
                    type="number"
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                    sx={textFieldStyles}
                />

                {/* Job type Dropdown */}
                <div ref={dropdownRef} style={{ width: '100%', position: 'relative' }}>
                    {/* Dropdown Header */}
                    <div
                        onClick={handleToggle}
                        style={{
                            padding: '15px',
                            border: `2px solid ${formik.touched.jobType && formik.errors.jobType ? '#ff0000' : '#000'}`,
                            borderRadius: '8px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            backgroundColor: '#f9f9f9',
                        }}
                    >
                        <span>{formik.values.jobType || 'Job Type'}</span>
                        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                    </div>

                    {/* Dropdown Menu */}
                    {isOpen && (
                        <ul
                            style={{
                                listStyleType: 'none',
                                margin: 0,
                                padding: '5px 0',
                                position: 'absolute',
                                top: '40px',
                                left: 0,
                                width: '100%',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                backgroundColor: '#fff',
                                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
                                zIndex: 10,
                                maxHeight: '200px', // Limit the height to show 6 items (approx. 33px per item)
                                overflowY: 'auto', // Add vertical scrolling when items exceed the height
                            }}
                        >
                            {names.map((name) => (
                                <li
                                    key={name}
                                    onClick={() => {
                                        handleSelect(name);
                                        formik.setFieldValue('jobType', name); // Update Formik's jobType value
                                    }}
                                    style={{
                                        padding: '8px 10px',
                                        cursor: 'pointer',
                                        backgroundColor: '#fff',
                                        borderBottom: '1px solid #eee',
                                    }}
                                    onMouseEnter={(e) => (e.target.style.backgroundColor = '#f1f1f1')}
                                    onMouseLeave={(e) => (e.target.style.backgroundColor = '#fff')}
                                >
                                    {name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Error Message */}
                {formik.errors.jobType && formik.touched.jobType && (
                    <Typography variant="body2" color="error">
                        {formik.errors.jobType}
                    </Typography>
                )}

                <Button
                    variant="contained"
                    component="label"
                    fullWidth
                    sx={{
                        borderRadius: '12px',
                        textAlign: 'left',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.2s',
                        '&:hover': { transform: 'scale(1.05)' },
                    }}
                >
                    <UploadIcon sx={{ marginRight: 1 }} />
                    Upload CV
                    <input
                        type="file"
                        hidden
                        name="cv"
                        accept=".pdf"
                        onChange={(event) => {
                            const file = event.currentTarget.files[0];
                            formik.setFieldValue('cv', file);
                            setCvName(file?.name || '');
                        }}
                    />
                </Button>

                {cvName && (
                    <Typography variant="body2" color="textSecondary">
                        Selected File: {cvName}
                    </Typography>
                )}
                {formik.errors.cv && formik.touched.cv && (
                    <Typography variant="body2" color="error">
                        {formik.errors.cv}
                    </Typography>
                )}

                {/* Submit Button */}
                <Button type="submit" variant="contained" color="primary" size="large">
                    {loading ? <CircularProgress size={24} color="inherit" /> : 'Apply'}
                </Button>
            </Box>

            {/* Success or Error Message */}
            {success && (
                <Box sx={{ backgroundColor: 'green', padding: 2, borderRadius: 1, mt: 3 }}>
                    <Typography variant="h6" color="white" textAlign="center">
                        Application Submitted Successfully!
                    </Typography>
                </Box>
            )}

            {error && (
                <Box sx={{ backgroundColor: 'red', padding: 2, borderRadius: 1, mt: 3 }}>
                    <Typography variant="h6" color="white" textAlign="center">
                        {error}
                    </Typography>
                </Box>
            )}
        </>
    );
};

export default ApplyForm;
