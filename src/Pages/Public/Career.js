import { Box, Button, Container, Grid, Paper, Typography, useTheme } from '@mui/material';
import React from 'react';
import career from '../../assest/Banner/Carrer.png';
import team from '../../assest/team-work-img.jpg'
import careerimg1 from '../../assest/BlogImg/blogimg2.jpg'
import careerimg2 from '../../assest/BlogImg/blogimg4.jpg'
import { useNavigate } from 'react-router-dom';

const perks = [
    { title: "Flexible working\n hours", color: "red" },
    { title: "Remote work\n opportunities", color: "#B68D40" },
    { title: "Professional\n development\n allowance", color: "purple" },
    { title: "Team-building\n events and outings", color: "orange" },
    { title: "Learning &\n Development", color: "green" },
    { title: "Competitive salary\n packages", color: "teal" },
];

const Career = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const handleAbout = () => {
        window.scrollTo(0, 0);
        navigate('/about')
    }

    const handleCuluture = () => {
        window.scrollTo(0, 0);
        navigate('/ourCuluture')
    }

    const handleApply = () => {
        window.scrollTo(0, 0);
        navigate('/apply')
    }

    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    height: '60vh',
                    position: 'relative',
                    backgroundImage: `url(${career})`, // Ensure the image path is correct
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover', // Ensures the image covers the area
                    backgroundPosition: 'center', // Centers the image both horizontally and vertically
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {/* Overlay for better text readability */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity as needed
                        zIndex: 1,
                    }}
                />
                <Typography
                    variant="h3"
                    textAlign="center"
                    color="white"
                    sx={{
                        zIndex: 2, fontWeight: 'bold', animation: 'fadeIn 2s ease-in-out',
                        '@keyframes fadeIn': {
                            from: { opacity: 0 },
                            to: { opacity: 1 },
                        },
                        letterSpacing: '0.05em',
                    }}
                >
                    Carrer
                </Typography>
            </Box>

            {/* Black box positioned at the bottom right */}
            <Grid container spacing={5} sx={{ py: { xs: 2, md: 3, lg: 5 }, px: { xs: 2, lg: 15, md: 10 }, }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" fontWeight="bold" py={2}>
                        JOIN OUR TEAM & <br /> LET'S WORK TOGETHER
                    </Typography>
                    <Typography variant="h6" lineHeight={1.5}>
                        At TCSPL, we believe that great things are built by great teams. If you are passionate about
                        web development, design, and innovation, and looking for a place where your talents can thrive, you have
                        come to the right place. Join us on our journey to create exceptional online experiences that make a
                        difference.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: { xs: 10, sm: 10, md: 10, lg: -40 },
                            right: { xs: -15, sm: -16, md: -25, lg: -40 },
                            backgroundColor: '#1e2024',
                            height: { xs: '200px', sm: '250px', md: '250px', lg: '350px' },
                            width: { xs: '250px', sm: '400px', md: '400px', lg: '500px' },
                            zIndex: -1,
                        }}
                    />
                    <img
                        src={team}
                        alt="Team"
                        style={{
                            height: '100%',
                            width: '100%',
                            maxHeight: '350px',
                            maxWidth: '550px',
                            objectFit: 'cover',
                            position: 'relative',
                            zIndex: 0,
                        }}
                    />
                </Grid>
            </Grid>

            {/* Journey at Paramount */}
            <Grid
                container
                spacing={4}
                sx={{
                    py: { xs: 2, md: 3, lg: 5 },
                    px: { xs: 2, md: 10, lg: 15 },
                    alignItems: 'center',
                    flexDirection: { xs: 'column', md: 'row' },
                }}
            >
                {/* Image 1 - About Us */}
                <Grid item xs={12} md={6} lg={3} textAlign="center">
                    <Box
                        position="relative"
                        sx={{
                            width: '100%',
                            maxWidth: 280,
                            height: 220,
                            mx: 'auto',
                            borderRadius: '20px',
                        }}
                    >
                        <img
                            src={careerimg1}
                            alt="career1"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '20px',
                            }}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: 10,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                zIndex: 1,
                            }}
                        >
                            <Button
                                variant="contained"
                                onClick={handleAbout}
                                sx={{
                                    position: 'absolute',
                                    bottom: -30,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    borderRadius: '10px',
                                    px: 5,
                                    py: 2,
                                    fontSize: '13px',
                                    whiteSpace: 'nowrap',
                                    backgroundColor: theme.palette.ButtonColor
                                }}
                            >
                                About us
                            </Button>
                        </Box>
                    </Box>
                </Grid>

                {/* Image 2 - Our Culture */}
                <Grid item xs={12} md={6} lg={3} textAlign="center">
                    <Box
                        position="relative"
                        sx={{
                            width: '100%',
                            maxWidth: 280,
                            height: 220,
                            mx: 'auto',
                            borderRadius: '20px',
                        }}
                    >
                        <img
                            src={careerimg2}
                            alt="career2"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '20px',
                            }}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: 10,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                zIndex: 1,
                            }}
                        >
                            <Button
                                variant="contained"
                                onClick={handleCuluture}
                                sx={{
                                    position: 'absolute',
                                    bottom: -30,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    borderRadius: '10px',
                                    px: 5,
                                    py: 2,
                                    fontSize: '13px',
                                    whiteSpace: 'nowrap',
                                    backgroundColor: theme.palette.ButtonColor
                                }}
                            >
                                Our culture
                            </Button>
                        </Box>
                    </Box>
                </Grid>

                {/* Content Section */}
                <Grid item xs={12} lg={6}>
                    <Typography variant="h4" fontWeight="bold" mb={2}>
                        Journey at TCSPL
                    </Typography>
                    <Typography variant="h5">
                        We understand the importance of work-life balance. Our flexible work arrangements ensure that you can excel at both your professional and personal pursuits. Take advantage of our continuous learning initiatives, workshops, and mentorship programs to enhance your skillset. Experience the energy of a team that is driven by innovation and creativity. Our culture encourages open communication, idea sharing, and a strong sense of camaraderie.
                    </Typography>
                </Grid>
            </Grid>

            {/* VACANCIES we're CURRENTLY hiring */}
            <Box sx={{ backgroundColor: '#1e2024', py: { xs: 2, md: 3, lg: 5 }, px: { xs: 2, lg: 15, md: 10 } }}>
                <Grid container spacing={3} justifyContent="space-between" alignItems="center">
                    <Grid item xs={12} md={3}>
                        <Typography variant="h4" color={'#FFF'} fontWeight={'bold'} lineHeight={1.5}>
                            <span style={{ fontSize: '16px' }}>VACANCIES</span><br />
                            WE’RE CURRENTLY<br />
                            HIRI
                            <span style={{ backgroundColor: '#ff4155', padding: '0px 50px 0px 0px', display: 'inline-block' }}>NG</span>
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={6} textAlign={'center'}>

                        <Typography variant='body2' color={theme.palette.info.light}>Unleash Your Potential, Empower Your Journey with career excellence</Typography>
                    </Grid>

                    <Grid item xs={12} md={2}>
                        <Button onClick={handleApply} variant='outlined' sx={{ color: '#fff', border: '1px solid #fff' }}>
                            Apply Now
                        </Button>
                    </Grid>
                </Grid>
            </Box>

            {/* Perks & Benefits */}
            <Box sx={{ py: { xs: 2, md: 3, lg: 5 }, px: { xs: 2, lg: 15, md: 10 } }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h4' mb={3} fontWeight='bold'>
                            Perks & Benefits
                        </Typography>
                        <Typography variant='h5' lineHeight={1.5}>
                            At TCSPL, we believe in nurturing both your professional journey and personal well-being. Our comprehensive package of perks and benefits is designed to enhance your work-life balance, foster growth, and make your time with us truly fulfilling.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={6} container>
                        {perks.map((perk, index) => (
                            <Grid item xs={6} sm={4} key={index}>
                                <Box
                                    sx={{
                                        height: { xs: 150, sm: 150, md: 200 },
                                        width: { xs: 180, sm: 180, md: 210 },
                                        borderRadius: '50%',
                                        border: `3px solid ${perk.color}`, // Use perk.color dynamically
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                        mx: 'auto',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            backgroundColor: perk.color,
                                            borderColor: '#fefefe',
                                            color: '#fff',
                                        },
                                        padding: { xs: 1, sm: 2, md: 3 },
                                    }}
                                >
                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            whiteSpace: 'pre-line',
                                            color: 'textPrimary',
                                            transition: 'color 0.2s ease',
                                        }}
                                    >
                                        {perk.title}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>

                </Grid>
            </Box >

        </>
    );
}

export default Career;