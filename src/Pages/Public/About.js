import { Box, Divider, Grid, Stack, Typography, useTheme } from '@mui/material';
import React from 'react';
import Slider from '../../Component/Public/Slider';
import Mission from '../../assest/Client/imgs/mission1.avif';
import Vision from '../../assest/Client/imgs/vision1.jpg';
import Goal from '../../assest/Client/imgs/mission.jpg';
import AboutImg from '../../assest/Client/imgs/male-female-office-workers_155003-12596.avif';

const About = () => {
    const theme = useTheme();
    return (
        <>

            {/* about header */}
            <Box sx={{
                width: '100%', // Correct viewport width unit
                height: '40vh',
                position: 'relative', // Make the parent Box relative to position overlay correctly
                background: `url(${AboutImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover', // Ensure the image covers the box while maintaining its aspect ratio
                backgroundPosition: 'center', // Center the background image
                backgroundAttachment: 'fixed',
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
                        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Semi-transparent black overlay
                        zIndex: 1, // Ensure the overlay is on top of the background
                    }}
                />
                {/* Content Box */}
                <Box>
                    <Typography variant="h2" fontWeight={'bold'} sx={{ color: theme.palette.info.light }}>
                        About
                    </Typography>
                </Box>
            </Box>
            {/* what we do */}
            <Box sx={{ px: { xs: 2, md: 14, lg: 14 }, py: 3 }}>
                {/* what we do */}
                <Grid container spacing={4}>
                    <Grid item sm={6} xs={12}>
                        <Box sx={{
                            background: `url(${Mission})`,
                            backgroundSize: 'cover', // Ensure the background image covers the entire box
                            backgroundPosition: 'center', // Center the background image
                            position: 'relative',
                            height: '300px',
                            borderRadius: '30px', // Apply border-radius to the main container
                            overflow: 'hidden' // Ensure the content respects the border-radius
                        }}>
                            {/* Text box positioned at the bottom */}
                            <Box
                                sx={{
                                    height: '230px',
                                    width: '350px',
                                    position: 'absolute',
                                    bottom: 0,
                                    borderTopRightRadius: '60%', // Top right corner rounded
                                    backgroundColor: 'rgba(0,0,0,0.2)', // Semi-transparent overlay
                                }}
                            >
                                <Box
                                    sx={{
                                        height: '200px',
                                        width: '320px',
                                        position: 'absolute',
                                        bottom: 0,
                                        borderRadius: '0 30px 0 0',
                                        borderTopRightRadius: '60%',
                                        backgroundColor: theme.palette.primary.deem, // Apply primary color here
                                    }}
                                >
                                    <Typography variant='h4' color='primary.main' fontWeight={'bold'} sx={{ color: 'white', p: 3, mt: 6 }}>
                                        We build your imaginations!
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Stack spacing={1}>
                            <Typography variant='h4' color='primary.main' fontWeight={'bold'}>A perfect fusion of technology <br /> and creativity</Typography>
                            <Typography variant='body2'>
                                Spirale Infosoft is a leading software development and service providing company since 2009, offering a wide range of software development and maintenance services across the globe.
                            </Typography>
                            <Typography variant='body2'>
                                The company is based in Delhi NCR (Noida), and we have catered a number of happy and satisfied customers worldwide.
                            </Typography>
                            <Typography variant='body2'>
                                We provide solutions to our clients in a most cost effective, sustainable and scalable approach.
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
                {/* what we do */}
                <Grid container spacing={4}>
                    <Grid item sm={6} xs={12}>
                        <Stack spacing={1}>
                            <Typography variant='h4' color='primary.main' fontWeight={'bold'}>What we do?</Typography>
                            <Typography variant='body2'>
                                Being a software development company, we offer the best services in web app development and maintenance. From the initial phases of user interface designing to the final deployment and not just that, we also provide maintenance and support services to our clients to make their experience of working with us more worthwhile.
                            </Typography>
                            <Typography variant='body2'>
                                We work on several market standard and advanced technologies as per the demand of the client’s project. We offer them the solution that suits their project and business model.
                            </Typography>
                            <Typography variant='body2'>
                                Services provided by us are well-tailored and customized as per the requirements of the project.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Box sx={{
                            background: `url(${Vision})`,
                            backgroundSize: 'cover', // Ensure the background image covers the entire box
                            backgroundPosition: 'center', // Center the background image
                            position: 'relative',
                            height: '300px',
                            borderRadius: '30px', // Apply border-radius to the main container
                            overflow: 'hidden' // Ensure the content respects the border-radius
                        }}>
                            {/* Text box positioned at the bottom */}
                            <Box
                                sx={{
                                    height: '230px',
                                    width: '350px',
                                    position: 'absolute',
                                    bottom: 0,
                                    borderTopRightRadius: '60%', // Top right corner rounded
                                    backgroundColor: 'rgba(0,0,0,0.2)', // Semi-transparent overlay
                                }}
                            >
                                <Box
                                    sx={{
                                        height: '200px',
                                        width: '320px',
                                        position: 'absolute',
                                        bottom: 0,
                                        borderRadius: '0 30px 0 0',
                                        borderTopRightRadius: '60%',
                                        backgroundColor: theme.palette.primary.deem, // Apply primary color here
                                    }}
                                >
                                    <Typography variant='h4' color='primary.main' fontWeight={'bold'} sx={{ color: 'white', p: 3, mt: 6 }}>
                                        What we do?
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                {/* my teams */}
                <Grid container spacing={4}>
                    <Grid item sm={6} xs={12}>
                        <Stack spacing={1}>
                            <Typography variant='h4' color='primary.main' fontWeight={'bold'}>
                                Team of experts?
                            </Typography>
                            <Typography variant='body2'>
                                Our team of developers is highly experienced and well certified in their respective fields. These developers and designers have exceptional knowledge and years of market exposure, which enables them to deliver some of the best software and IT solutions.
                            </Typography>
                            <Typography variant='body2'>
                                Our team keeps evolving and always tries to develop something unique and innovative, ensuring that they deliver the best to the clients, meeting all of their expectations and requirements.
                            </Typography>
                        </Stack>
                    </Grid>
                    {/*  our mission */}
                    <Grid item sm={6} xs={12}>
                        <Stack spacing={1}>
                            <Typography variant='h4' color='primary.main' fontWeight={'bold'}>
                                Our mission
                            </Typography>
                            <Typography variant='body2'>
                                Our team at Spirale Infosoft believes in getting better and better at the work in order to provide customer satisfaction and a delightful experience of working with us. We always keep searching for that mastery and perfection so that we can benefit our clients most with our services.
                            </Typography>
                            <Typography variant='body2'>
                                In recent times, as a software development company, we have expanded a lot and have catered a good number of international clients as well. We already have launched multiple complex projects successfully.
                            </Typography>
                            <Typography variant='body2'>
                                We strive on our principles of unity, innovation, passion, integrity and balance.
                            </Typography>
                        </Stack>
                    </Grid>
                    {/*  Services provided by us */}
                    <Grid item xs={12}>
                        <Stack spacing={1}>
                            <Typography variant='h4' color='primary.main' fontWeight={'bold'} >
                                Services provided by us
                            </Typography>
                            <Typography variant='body2'>
                                We offer a wide range of software development and maintenance services to our clients. From the initial phases of user interface designing to the final deployment and not just that, we also provide maintenance and support services to our clients to make their experience of working with us more worthwhile. We work on several market standard and advanced technologies as per the demand of the client’s project. We offer them the solution that suits their project and business model. Services provided by us are well-tailored and customized as per the requirements of the project.
                            </Typography>
                            <Typography variant='body2'>
                                If you are searching for a software development company with a great team of expert developers and designers that can offer the best services, customized as per your requirements and business models, to get the best of it, feel free to contact us.
                            </Typography>
                            <Typography variant='body2'>
                                Our team will be there 24/7 to help you with any kind of queries and projects in software development and services.
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
            {/* who we are */}
            <Box sx={{ px: { xs: 2, md: 14, lg: 14 } }}>
                <Typography variant="h4" fontWeight={'bold'} sx={{ color: 'primary.main', }}>
                    WHO WE ARE
                </Typography>
                <Typography variant='body2' sx={{ lineHeight: '20px' }}>
                    Our mission is to provide quality technology solutions by providing a standard-designed website &amp; app that can be customised to meet the as per your needs of the user. We create tailored solutions from the ground up based on user requirements. We're dedicated to providing clients with the most cutting-edge technology so they can obtain the correct information from the right people at the right time.
                </Typography>

                {/* Grid for Mission, Vision, Goal */}
                <Grid container spacing={2} >
                    {/* Mission Section */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: '250px',
                                        height: '300px',
                                        background: `url(${Mission})`,
                                        // backgroundSize: 'cover',
                                        objectFit: 'cover',
                                        backgroundClip: 'text',
                                        color: 'transparent',
                                        WebkitBackgroundClip: 'text',
                                        fontWeight: 'bold',
                                        overflow: 'hidden', // Prevents overflow if needed
                                        textOverflow: 'ellipsis', // Adds ellipsis if text overflows
                                    }}
                                >
                                    M
                                </Typography>
                                <Typography variant="h4" fontWeight="bold">Our Mission</Typography>
                                <Typography variant="body2">
                                    To connect more businesses and strategies to the internet and enhance their web presence, which will empower youth and strengthen the country.
                                </Typography>
                            </Box>
                            <Box>
                                <Divider orientation="vertical" sx={{ display: { md: 'block', xs: 'none' }, height: '320px', width: '1px', mx: 3, backgroundColor: '#999' }} flexItem />
                            </Box>
                        </Stack>
                    </Grid>

                    {/* Vision Section */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: '250px',
                                        height: '300px',
                                        background: `url(${Vision})`,
                                        // backgroundSize: 'cover',
                                        objectFit: 'cover',
                                        backgroundClip: 'text',
                                        color: 'transparent',
                                        WebkitBackgroundClip: 'text',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    V
                                </Typography>
                                <Typography variant="h4" fontWeight="bold">Our Vision</Typography>
                                <Typography variant="body2">
                                    Our vision is to establish our brand image through excellent customer service and using secure technology.
                                </Typography>
                            </Box>
                            <Box>
                                <Divider orientation="vertical" sx={{ display: { md: 'block', xs: 'none' }, height: '320px', width: '2px', mx: 3, backgroundColor: '#999' }} flexItem />
                            </Box>
                        </Stack>
                    </Grid>

                    {/* Goal Section */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: '250px',
                                        height: '300px',
                                        background: `url(${Goal})`,
                                        // backgroundSize: 'cover',
                                        objectFit: 'cover',
                                        backgroundClip: 'text',
                                        color: 'transparent',
                                        WebkitBackgroundClip: 'text',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    G
                                </Typography>
                                <Typography variant="h4" fontWeight="bold">Our Goals</Typography>
                                <Typography variant="body2">
                                    We want to expand our business in areas least connected to technology, synchronizing them with a new digital India.
                                </Typography>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Box >

            {/* Slider component */}
            <Box sx={{ px: { xs: 2, md: 14, lg: 14 }, mt: 4 }}>
                <Slider />
            </Box>
        </>
    );
};

export default About;
