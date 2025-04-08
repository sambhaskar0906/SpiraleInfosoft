import { Box, Divider, Grid, Stack, Typography, useTheme } from '@mui/material';
import React from 'react';
import Slider from '../../Component/Public/Slider';
import Mission from '../../assest/webuild.jpg';
import Vision from '../../assest/Client/imgs/vision1.jpg';
import ourcompany from '../../assest/ourcompany.jpg';
import AboutImg from '../../assest/Banner/about.jpeg';
import MissionImg from '../../assest/Client/8.jpg'
import OurWorking from '../../Component/Public/OurWorking';
import AndroidIcon from '@mui/icons-material/Android';
import LaptopWindowsIcon from '@mui/icons-material/LaptopWindows';
import AppleIcon from '@mui/icons-material/Apple';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import TwentyFourMpIcon from '@mui/icons-material/TwentyFourMp';
import technologybgimg from '../../assest/technologyimg.webp'

const About = () => {
    const theme = useTheme();
    return (
        <>
            {/* about header */}
            <Box sx={{
                width: '100%',
                height: '60vh',
                position: 'relative',
                background: `url(${AboutImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',  // Stack text vertically
                textAlign: 'center',      // Ensure text is centered
            }}>
                {/* Overlay Box */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 1,
                    }}
                />
                <Typography variant="h3" color="white" sx={{
                    zIndex: 2,
                    fontWeight: 'bold',
                    fontSize: '2rem',
                    letterSpacing: '2px',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', // Shadow effect
                    marginBottom: 2, // Space between the texts
                    textTransform: 'uppercase', // Make the text uppercase for emphasis
                    animation: 'fadeIn 2s ease-in-out',
                    '@keyframes fadeIn': {
                        from: { opacity: 0 },
                        to: { opacity: 1 },
                    },
                    letterSpacing: '0.05em',
                }}>
                    About us
                </Typography>
                <Typography variant="h5" color="white" sx={{
                    zIndex: 2,
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    letterSpacing: '1px',
                    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.6)', // Shadow effect
                    marginTop: 2, // More space between "About Us" and the second text
                    maxWidth: '80%', // Limit width for readability
                    margin: '0 auto', // Center the text block
                    animation: 'fadeIn 2s ease-in-out',
                    '@keyframes fadeIn': {
                        from: { opacity: 0 },
                        to: { opacity: 1 },
                    },
                    letterSpacing: '0.05em',
                }}>
                    Coding the Future with Creativity, Precision, and Innovation
                </Typography>
            </Box>

            {/* what we do */}
            <Box sx={{ px: { xs: 2, md: 14, lg: 14 } }}>
                {/* what we do */}
                <Grid container spacing={4} sx={{ py: { xs: 2, md: 5 }, mt: 3 }}>
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
                            <Typography variant='h4' color='primary.main' fontWeight={'bold'} sx={{ marginTop: '20px !important' }}>
                                Who We Are
                            </Typography>
                            <Typography variant='body2'>
                                Our mission is to provide quality technology solutions by providing a standard-designed website & app that can be customized to meet the as per your needs of the user.
                            </Typography>
                            <Typography variant='body2'>
                                We create tailored solutions from the ground up based on user requirements.
                            </Typography>
                            <Typography variant='body2'>
                                We're dedicated to providing clients with the most cutting-edge technology so they can obtain the correct information from the right people at the right time.
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
                {/* what we do */}
                <Grid container spacing={4} sx={{ py: { xs: 2, md: 5 }, my: 1 }}>
                    <Grid item sm={6} xs={12}>
                        <Stack spacing={1}>
                            <Typography variant='h4' color='primary.main' fontWeight={'bold'}>Our Company</Typography>
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
                    <Grid item sm={6} xs={12}>
                        <Box sx={{
                            background: `url(${ourcompany})`,
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
                                        Our Company
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                {/* my teams */}
                <Grid container spacing={4} sx={{ py: { xs: 2, md: 3 } }}>
                    {/* Our team */}
                    <Grid item sm={6} xs={12}>
                        <Stack spacing={1}>
                            <Typography variant='h4' color='primary.main' fontWeight={'bold'}>
                                Our Team
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
                                Our team at TCSPL believes in getting better and better at the work in order to provide customer satisfaction and a delightful experience of working with us. We always keep searching for that mastery and perfection so that we can benefit our clients most with our services.
                            </Typography>
                            <Typography variant='body2'>
                                In recent times, as a software development company, we have expanded a lot and have catered a good number of international clients as well. We already have launched multiple complex projects successfully.
                            </Typography>
                            <Typography variant='body2'>
                                We strive on our principles of unity, innovation, passion, integrity and balance.
                            </Typography>
                        </Stack>
                    </Grid>

                    {/* what we do */}
                    <Grid item sm={6} xs={12} my={1}>
                        <Stack spacing={1}>
                            <Typography variant='h4' color='primary.main' fontWeight={'bold'}>
                                What We Do?
                            </Typography>
                            <Typography variant='body2'>
                                Being a software development company, we offer the best services in web app development and maintenance. From the initial phases of user interface designing to the final deployment and not just that, we also provide maintenance and support services to our clients to make their experience of working with us more worthwhile.
                            </Typography>
                            <Typography variant='body2'>
                                We work on several market standard and advanced technologies as per the demand of the client’s project. We offer them the solution that suits their project and business model.
                                Services provided by us are well-tailored and customized as per the requirements of the project.
                            </Typography>
                        </Stack>
                    </Grid>

                    {/* Why Choose Us */}
                    <Grid item sm={6} xs={12} my={1}>
                        <Stack spacing={1}>
                            <Typography variant='h4' color='primary.main' fontWeight={'bold'}>
                                Why Choose Us
                            </Typography>
                            <Typography variant='body2'>
                                TechCloak Solutions Pvt. Ltd. is a leading software development and service providing company since 2016, offering a wide range of software development and maintenance services across the globe.
                            </Typography>
                            <Typography variant='body2'>
                                The company is based in India, and we have catered a number of happy and satisfied customers worldwide.
                            </Typography>
                            <Typography variant='body2'>
                                We provide solutions to our clients in a most cost effective, sustainable and scalable approach.
                            </Typography>
                        </Stack>
                    </Grid>

                    {/*  Services provided by us */}
                    <Grid item xs={12} sx={{ py: { xs: 2, md: 3 } }}>
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
                <Grid container spacing={2} sx={{ py: { xs: 2, md: 5 } }}>
                    {/* Mission Section */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: '250px',
                                        fontWeight: 900,
                                        fontFamily: `'Roboto', sans-serif`, // Optional, add your font here
                                        height: '250px',
                                        display: 'flex', // Use flexbox
                                        justifyContent: 'center', // Horizontally center align
                                        alignItems: 'center',
                                        background: `url(${MissionImg})`,
                                        objectFit: 'cover',
                                        backgroundClip: 'text',
                                        color: 'transparent',
                                        WebkitBackgroundClip: 'text',
                                    }}
                                    data-aos="fade-right"
                                    data-aos-duration="2000"
                                >
                                    M
                                </Typography>
                                <Typography variant="h4" fontWeight="bold" textAlign={'center'} py={1}>OUR MISSION</Typography>
                                <Typography variant="body2">
                                    To connect more businesses and strategies to the internet and enhance their web presence, which will empower youth and strengthen the country.
                                </Typography>
                            </Box>
                            <Box>
                                <Divider orientation="vertical" sx={{ display: { md: 'block', xs: 'none' }, height: '400px', width: '1px', mx: 3, backgroundColor: '#999' }} flexItem />
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
                                        fontWeight: 900,
                                        fontFamily: `'Roboto', sans-serif`, // Optional, add your font here
                                        height: '250px',
                                        display: 'flex', // Use flexbox
                                        justifyContent: 'center', // Horizontally center align
                                        alignItems: 'center',
                                        background: `url(${Vision})`,
                                        objectFit: 'cover',
                                        backgroundClip: 'text',
                                        color: 'transparent',
                                        WebkitBackgroundClip: 'text',
                                    }}
                                    data-aos="fade-right"
                                    data-aos-duration="2000"
                                >
                                    V
                                </Typography>
                                <Typography variant="h4" fontWeight="bold" textAlign={'center'} py={1}>OUR VISION</Typography>
                                <Typography variant="body2">
                                    Our vision is to establish our brand image through excellent customer service and using secure technology.
                                </Typography>
                            </Box>
                            <Box>
                                <Divider orientation="vertical" sx={{ display: { md: 'block', xs: 'none' }, height: '400px', width: '1px', mx: 3, backgroundColor: '#999' }} flexItem />
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
                                        fontWeight: 900,
                                        fontFamily: `'Roboto', sans-serif`, // Optional, add your font here
                                        height: '250px',
                                        display: 'flex', // Use flexbox
                                        justifyContent: 'center', // Horizontally center align
                                        alignItems: 'center',
                                        background: `url(${AboutImg})`,
                                        objectFit: 'cover',
                                        backgroundClip: 'text',
                                        color: 'transparent',
                                        WebkitBackgroundClip: 'text',
                                    }}
                                    data-aos="fade-right"
                                    data-aos-duration="2000"
                                >
                                    G
                                </Typography>
                                <Typography variant="h4" fontWeight="bold" textAlign={'center'} py={1}>OUR GOALS</Typography>
                                <Typography variant="body2">
                                    We want to expand our business in areas least connected to technology, synchronizing them with a new digital India.
                                </Typography>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Box >

            {/* Our Working process */}
            <OurWorking />

            {/* Technology index */}
            <Box sx={{
                position: 'relative', // Make the box relative for the overlay
                backgroundImage: `url(${technologybgimg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed', // Fix the background image during scroll
                height: 'auto',
                px: { xs: 5, md: 10, lg: 15 },
                py: { xs: 2, md: 5 },
            }}>
                {/* Overlay Box */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(39, 76, 135, 0.9)',
                    }}
                />

                <Box textAlign={'center'} sx={{ position: 'relative', zIndex: 2 }}> {/* Bring text above the overlay */}
                    <Typography variant='h5' color="#E99f2B" py={1}>
                        Technology index
                    </Typography>
                    <Typography variant='h4' color='#FFF' py={1}>
                        Get the best IT solutions and<br /> services for any technology or<br /> systems
                    </Typography>
                </Box>
                <Grid container spacing={5} justifyContent="center" textAlign="center" py={3} sx={{ position: 'relative', zIndex: 2 }}>
                    {[
                        { icon: <AndroidIcon />, label: 'Android' },
                        { icon: <LaptopWindowsIcon />, label: 'Web' },
                        { icon: <AppleIcon />, label: 'Ios' },
                        { icon: <ViewCarouselIcon />, label: 'Design' },
                        { icon: <TwentyFourMpIcon />, label: 'API' },
                        { icon: <AndroidIcon />, label: 'Android' }
                    ].map((item, index) => (
                        <Grid
                            item
                            key={index}
                            xs={12} sm={6} md={3} lg={2}
                        >
                            <Box sx={{ border: '1px solid #fff', px: 4, py: 3, borderRadius: 1 }}>
                                {React.cloneElement(item.icon, { sx: { height: '60px', width: '60px', color: '#FFF' } })}
                                <Typography variant="h5" color="#FFF">
                                    {item.label}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>


            {/* Slider component */}
            <Box sx={{ mt: 4 }
            }>
                <Slider />
            </Box >
        </>
    );
};

export default About;
