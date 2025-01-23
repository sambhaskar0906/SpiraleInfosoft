import React from 'react';
import {
    Box,
    Typography,
    useTheme,
    Grid,
} from '@mui/material';
import applybg from '../../assest/contact-bg.jpg';
import ApplyForm from './ApplyForm';



const Apply = () => {
    const theme = useTheme();

    const leftContent = {
        title: 'Why Join Us?',
        description:
            'Looking for challenging job opportunities to revolutionize your career, then you are at the right place. We at TCSPL give you the platform to freely express and explore your best version with us in the digitally advanced phenomenon. We work like a team, provide a great atmosphere to work, and strengthen your career.',
    };


    return (
        <>
            {/* Hero Section */}
            <Box
                sx={{
                    width: '100%',
                    height: '60vh',
                    position: 'relative',
                    background: `url(${applybg}) no-repeat center/cover`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
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
                <Typography
                    variant="h3"
                    textAlign="center"
                    color="white"
                    sx={{
                        zIndex: 2,
                        fontWeight: 'bold',
                        animation: 'fadeIn 2s ease-in-out',
                        '@keyframes fadeIn': { from: { opacity: 0 }, to: { opacity: 1 } },
                        letterSpacing: '0.05em',
                    }}
                >
                    Apply Online
                </Typography>
            </Box>

            {/* Main Content */}
            <Box sx={{ px: { xs: 2, md: 14 }, py: { xs: 2, md: 4 }, mt: 3 }}>
                <Typography variant="h4" textAlign="center" fontWeight="bold" mb={3}>
                    Join us & Revolutionize <span style={{ color: '#ff4155' }}>Your Career</span>
                </Typography>

                <Grid container spacing={4} sx={{ py: 3 }}>
                    {/* Left Column */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" fontWeight="bold" mb={2}>
                            {leftContent.title}
                        </Typography>
                        <Typography variant="h5" color="textSecondary">
                            {leftContent.description}
                        </Typography>
                    </Grid>

                    {/* Right Column */}
                    <Grid item xs={12} md={6}>
                        <ApplyForm />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Apply;
