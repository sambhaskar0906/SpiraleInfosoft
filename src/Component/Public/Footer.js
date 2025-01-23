import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from '@mui/material';
import { Box, Button, Grid, Stack, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';
import { MessageSlice, resetState } from "../../Slice/MessageSlice";
import { useFormik } from "formik";
import * as Yup from "yup";

const Footer = () => {
    const theme = useTheme();
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const dispatch = useDispatch();
    const { loading, success, error } = useSelector((state) => state.support);

    // Reset form data on success
    useEffect(() => {
        if (success) {
            setFormData({ name: "", email: "", message: "" }); // Clear the form
            setTimeout(() => {
                dispatch(resetState()); // Reset Redux state after a delay
            }, 3000);
        }
    }, [success, dispatch]);

    // Formik setup
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string().email("Invalid email address").required("Email is required"),
            message: Yup.string().required("Message is required"),
        }),
        onSubmit: (values, { resetForm }) => {
            dispatch(MessageSlice(values));
            resetForm(); // Clear the form fields after submission
        },
    });

    const handleHome = () => {
        window.location.href = '/';
    };

    const handleClick = () => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    };

    return (
        <>
            <Box
                sx={{
                    backgroundColor: '#070B3B',
                    height: 'auto',
                    px: { xs: 2, lg: 14, md: 10 },
                    pt: { xs: 2, md: 5 },
                    color: '#FFF',
                }}
            >
                <Grid container spacing={5} sx={{ borderBottom: '1px solid #ccc', pb: 5 }}>
                    {/* About Company */}
                    <Grid item xs={12} lg={4} sm={12} md={6}>
                        <Typography variant="h6" py={1}>
                            About Company
                        </Typography>
                        <Typography variant="body2" py={2}>
                            TCSPL(TechCloak Solutions Pvt. Ltd.) is one of the most trusted and reliable software development companies based in Delhi NCR. We provide our finest services in website designing and development. We have dedicated teams of experts and developers to help you in maintenance and digital marketing services as well.
                        </Typography>
                        <Stack
                            direction="row"
                            alignItems="center"
                            py={1}
                            justifyContent="space-around"
                            sx={{
                                backgroundColor: '#CCCCCC',
                                borderRadius: '20px',
                            }}
                        >
                            <Box>
                                <Typography variant="h5" color="#000">
                                    Talk to Our Support
                                </Typography>
                                <Typography variant="h5" color="#000">
                                    01205261995
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    height: '70px',
                                    width: '70px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: theme.palette.primary.dark,
                                    background: theme.palette.info.light,
                                    borderRadius: '50%',
                                }}
                            >
                                <HeadsetMicIcon sx={{ fontSize: 50, ml: 1 }} />
                            </Box>
                        </Stack>
                    </Grid>

                    {/* Services Section with Links */}
                    <Grid item xs={12} lg={2} sm={12} md={6}>
                        <Typography variant="h5" py={1}>
                            Services
                        </Typography>
                        {[
                            { name: 'App Development', link: '/services/app-development' },
                            { name: 'API Services', link: '/services/api-service' },
                            { name: 'Web Development', link: '/services/web-development' },
                            { name: 'Cross-Platform App Development', link: '/services/app-development/cross-plateform' },
                            { name: 'eCommerce Services', link: '/services/ecommers-service' },
                            { name: 'CMS Development', link: '/services/cms-development' },
                            { name: 'Privacy Policy', link: '/privacy-policy' },
                        ].map((service, index) => (
                            <Typography
                                key={index}
                                variant="body2"
                                py={1}
                                sx={{
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        backgroundColor: 'rgba(0, 0, 0, 0.08)',
                                        transform: 'scale(1.05)',
                                    },
                                }}
                            >
                                <Link
                                    to={service.link}
                                    style={{ textDecoration: 'none', color: '#FFF' }}
                                    onClick={handleClick}
                                >
                                    {service.name}
                                </Link>
                            </Typography>
                        ))}
                    </Grid>

                    {/* Technologies Section with Links */}
                    <Grid item xs={12} lg={2} sm={12} md={6}>
                        <Typography variant="h5" py={1}>
                            Technologies
                        </Typography>
                        <Grid container direction="column">
                            {[
                                { name: 'Android', link: '/services/app-development/native-android' },
                                { name: 'iOS', link: '/services/app-development/native-ios' },
                                { name: 'Laravel', link: '/services/web-development/laravel' },
                                { name: 'PHP', link: '/services/web-development/php' },
                                { name: 'React.js', link: '/services/web-development/reactjs' },
                                { name: 'React Native', link: '/services/app-development/react-native' },
                            ].map((tech) => (
                                <Grid item key={tech.name}>
                                    <Button
                                        component={Link}
                                        to={tech.link}
                                        variant="text"
                                        color="inherit"
                                        startIcon={<KeyboardArrowRightIcon />}
                                        sx={{
                                            flexDirection: 'row',
                                            justifyContent: 'flex-start',
                                            transition: 'transform 0.3s ease-in-out',
                                            '&:hover': {
                                                backgroundColor: 'rgba(0, 0, 0, 0.08)',
                                                transform: 'scale(1.05)',
                                            },
                                        }}
                                    >
                                        {tech.name}
                                    </Button>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    {/* Enquiry Section */}
                    <Grid item xs={12} lg={4} sm={12} md={6}>
                        <Typography variant="h5" py={1}>
                            Support/Services
                        </Typography>

                        <form onSubmit={formik.handleSubmit}>
                            <Box py={1} width="100%">
                                <TextField
                                    id="name"
                                    name="name"
                                    label="Name"
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    sx={{ backgroundColor: "#fff" }}
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                    helperText={formik.touched.name && formik.errors.name}
                                />
                            </Box>

                            <Box py={1} width="100%">
                                <TextField
                                    id="email"
                                    name="email"
                                    label="Email"
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    sx={{ backgroundColor: "#fff" }}
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                />
                            </Box>

                            <Box py={1} width="100%">
                                <TextField
                                    id="message"
                                    name="message"
                                    label="Your Message"
                                    multiline
                                    rows={4}
                                    fullWidth
                                    sx={{ backgroundColor: "#fff" }}
                                    value={formik.values.message}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.message && Boolean(formik.errors.message)}
                                    helperText={formik.touched.message && formik.errors.message}
                                />
                            </Box>

                            <Box textAlign="center" py={1}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ borderRadius: "50px", backgroundColor: "#0071dc", py: 1 }}
                                    disabled={loading}
                                >
                                    {loading ? <CircularProgress size={24} color="#ffffff" backgroundColor="#0071dc" /> : "Send Message"}
                                </Button>
                            </Box>

                            {success && (
                                <Alert severity="success" onClose={() => dispatch(resetState())}>
                                    Message sent successfully!
                                </Alert>
                            )}
                            {error && (
                                <Alert severity="error" onClose={() => dispatch(resetState())}>
                                    {error}
                                </Alert>
                            )}
                        </form>
                    </Grid>
                </Grid>

                {/* Footer */}
                <Box>
                    <Typography variant="body2" py={2} textAlign="center">
                        Copyright @ 2023 TCSPL(TechCloak Solutions Pvt. Ltd.) All Rights Reserved by{' '}
                        <span
                            style={{ color: '#E99f2B', textDecoration: 'underline', cursor: 'pointer' }}
                            onClick={handleHome}
                        >
                            TCSPL
                        </span>
                    </Typography>
                </Box>
            </Box>
        </>
    );
};

export default Footer;
