import React, { useState } from 'react';
import { Box, Typography, useTheme, Grid, TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import applybg from '../../assest/contact-bg.jpg';

const Apply = () => {
    const theme = useTheme();
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Left column content
    const leftContent = {
        title: "Why Join Us?",
        description: "Looking for challenging job opportunities to revolutionize your career, then you are at right place. We at TCSPL gives you the platform to freely express and explore your best version with us in the digitally advanced phenomenon. We work like a team, provide a great atmosphere to work and strengthen your career."
    };

    // Formik setup
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email format').required('Email is required'),
            phone: Yup.string().required('Phone number is required'),
            message: Yup.string().required('Message is required'),
        }),
        onSubmit: (values) => {
            // Simulate a successful form submission
            console.log(values);
            setIsSubmitted(true);
            // Optionally, you could reset the form here:
            // formik.resetForm();
        },
    });

    return (
        <>
            {/* Hero Section */}
            <Box sx={{
                width: '100%',
                height: '60vh',
                position: 'relative',
                background: `url(${applybg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                {/* Overlay Box */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        zIndex: 1,
                    }}
                />
                <Typography variant="h3" textAlign="center" color="white" sx={{
                    zIndex: 2, fontWeight: 'bold', animation: 'fadeIn 2s ease-in-out',
                    '@keyframes fadeIn': {
                        from: { opacity: 0 },
                        to: { opacity: 1 },
                    },
                    letterSpacing: '0.05em',
                }}>
                    Apply Online
                </Typography>
            </Box>

            {/* Main Content */}
            <Box sx={{ px: { xs: 2, md: 10, lg: 15 }, py: { xs: 2, md: 2 }, mt: 3 }}>
                <Box>
                    <Typography variant='h4' textAlign={'center'} fontWeight={'bold'} mb={3}>
                        Join us & Revolutionize <span style={{ color: '#ff4155' }}>Your career</span>
                    </Typography>
                </Box>

                {/* Two Column Layout */}
                <Grid container spacing={4} sx={{ py: { xs: 3, md: 5 } }}>
                    {/* Left Column */}
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Typography variant="h4" fontWeight="bold" mb={2}>
                                {leftContent.title}
                            </Typography>
                            <Typography variant="h5" color="textSecondary">
                                {leftContent.description}
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Right Column */}
                    <Grid item xs={12} md={6}>
                        <Box component="form" onSubmit={formik.handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <TextField
                                label="Name"
                                variant="outlined"
                                fullWidth
                                placeholder="Enter your name"
                                name="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                                InputProps={{
                                    sx: {
                                        fontSize: '1.2rem',
                                        '&::placeholder': { fontSize: '1.2rem' },
                                    },
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        fontSize: '1.2rem',
                                        border: `2px solid ${theme.palette.primary.main}`,
                                    },
                                }}
                            />
                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                placeholder="Enter your email"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                                InputProps={{
                                    sx: {
                                        fontSize: '1.2rem',
                                        '&::placeholder': { fontSize: '1.2rem' },
                                    },
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        fontSize: '1.2rem',
                                        border: `2px solid ${theme.palette.primary.main}`,
                                    },
                                }}
                            />
                            <TextField
                                label="Phone Number"
                                variant="outlined"
                                fullWidth
                                placeholder="Enter your phone number"
                                name="phone"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.phone && Boolean(formik.errors.phone)}
                                helperText={formik.touched.phone && formik.errors.phone}
                                InputProps={{
                                    sx: {
                                        fontSize: '1.2rem',
                                        '&::placeholder': { fontSize: '1.2rem' },
                                    },
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        fontSize: '1.2rem',
                                        border: `2px solid ${theme.palette.primary.main}`,
                                    },
                                }}
                            />
                            <TextField
                                label="Message"
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={4}
                                placeholder="Enter your message"
                                name="message"
                                value={formik.values.message}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.message && Boolean(formik.errors.message)}
                                helperText={formik.touched.message && formik.errors.message}
                                InputProps={{
                                    sx: {
                                        fontSize: '1.2rem',
                                        '&::placeholder': { fontSize: '1.2rem' },
                                    },
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        fontSize: '1.2rem',
                                        border: `2px solid ${theme.palette.primary.main}`,
                                    },
                                }}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                size="large"
                                sx={{ alignSelf: 'flex-start' }}
                            >
                                Apply
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
                {/* Success Message */}
                {isSubmitted && (
                    <Box sx={{ backgroundColor: 'green', padding: 2, borderRadius: 1, mb: 3 }}>
                        <Typography variant="h6" color="white" textAlign="center">
                            Application Submitted Successfully!
                        </Typography>
                    </Box>
                )}
            </Box >
        </>
    );
};

export default Apply;
