import React from 'react';
import HomeBackground from '../../Component/Public/HomeBackground';
import { Box, Button, Grid, Grid2, Stack, Typography, keyframes, useTheme } from '@mui/material';
import leftImg from '../../assest/radial.png';
import rightImg from '../../assest/radial1.png';
import Screen from '../../assest/Screen.png';
import Screen1 from '../../assest/Screen1.png';
import Group from '../../assest/Group.png';
import Group1 from '../../assest/Group1.png';
import Group2 from '../../assest/Vector.png';
import OurServices from '../../Component/Public/OurServices';
import computer from '../../assest/computer.png'
import object from '../../assest/OBJECTS.png'
import OurWorking from '../../Component/Public/OurWorking';
import AndroidIcon from '@mui/icons-material/Android';
import LaptopWindowsIcon from '@mui/icons-material/LaptopWindows';
import AppleIcon from '@mui/icons-material/Apple';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import TwentyFourMpIcon from '@mui/icons-material/TwentyFourMp';
import Slider from '../../Component/Public/Slider'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import technologybgimg from '../../assest/technologyimg.webp'
import Callus from '../../assest/callus.webp'
import callshape1 from '../../assest/callshap1.webp'
import callshape2 from '../../assest/callshap2.webp'
import callshape3 from '../../assest/callshap3.webp'
import { useNavigate } from 'react-router-dom';
import ClientSlider from '../../Component/Public/ClientSlider';


// Keyframes for the left image
const moveLeftImg = keyframes`
  0% {
    transform: translate(20px, 80px); /* Start from bottom */
  }
  70% {
    transform: translate(20vw, -20vh); /* Move to top-right */
  }
`;

// Keyframes for the right image
const moveRightImg = keyframes`
  0% {
    transform: translate(15vw, 0px); /* Start from top-right */
  }
  70% {
    transform: translate(0px, 50px); /* Move to bottom-left */
  }
`;

const backgroundStyle = {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    paddingTop: '50px',
    overflow: 'hidden'
};

const data = [
    {
        imgSrc: Group,
        title: 'Holistic Approach',
        content: 'We don’t just address immediate\n challenges, we envision long-term impact.\n Our comprehensive strategies consider\n every aspect, enabling seamless\n integration and future scalability'
    },
    {
        imgSrc: Group1,
        title: 'Client-Centricity',
        content: 'Our clients are not just customers, they\n are partners on a shared journey. We\n actively listen, adapt to their needs, and\n ensure their success through transparent\n communication and unwavering\n dedication.'
    },
    {
        imgSrc: Group2,
        title: 'End-To-End-Services',
        content: 'From conceptualization to deployment and\n ongoing support, we offer comprehensive\n end-to-end services. This streamline the\n process for our clients and ensures a\n seamless experience from start to finish.'
    }
];

const Home = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const handleGetaQuote = () => {
        window.scrollTo(0, 0);
        navigate('/contact');
    }

    const handleSoftware = () => {
        window.scrollTo(0, 0);
        navigate('/software-development');
    }

    const handleGrow = () => {
        window.scrollTo(0, 0);
        navigate('/grow-bussiness');
    }

    const handleBrand = () => {
        window.scrollTo(0, 0);
        navigate('/create-brands');
    }

    return (
        <>
            <HomeBackground />
            <Box sx={{ backgroundColor: theme.palette.primary.deem, py: 2, px: { xs: 2, md: 14, lg: 14 }, }}>
                <Stack direction={'row'} alignItems={'center'} sx={{ display: { xs: 'block', md: 'flex', sm: 'block' } }}>
                    <Typography variant='h5' fontWeight={'bold'} sx={{ color: theme.palette.info.light, mb: { xs: 1, md: 0, lg: 0 } }}>
                        Looking for a first-class career consultant?
                    </Typography>
                    <Button size='small' variant='none' sx={{ marginLeft: { xs: '0px', md: 'auto', lg: 'auto' }, color: theme.palette.info.light, background: theme.palette.primary.main, display: 'flex', alignItems: 'center', borderRadius: '50px', px: { xs: 2, md: 1 }, py: { xs: 1, md: 1 } }} endIcon={<KeyboardArrowRightIcon />} onClick={handleGetaQuote}>get a quote</Button>
                </Stack>
            </Box>

            {/* Most Trusted Software Development Company */}
            <Box sx={{ py: 5, mx: { xs: 2, md: 5, lg: 5 }, my: 5, backgroundColor: theme.palette.darkBackground, borderRadius: '50px' }}>
                <Typography variant='h4' fontWeight={'bold'} sx={{ textAlign: 'center', my: 1, color: '#FFF' }}>
                    Most Trusted Software Development Company
                </Typography>
                <Box sx={{ px: { xs: 2, md: 5 }, py: 2 }}>
                    <Typography variant='body2' fontWeight={'0'} fontSize={'1rem'} sx={{ color: '#FFF' }}>
                        TCSPL is the most trusted and reliable Software Development Company in Delhi NCR. Our years of experience and the best team of experts and developers, enables us to offer some of the finest and prime services to our clients. The team of experts and developers is highly experienced and well certified. Till date, we have catered to a good number of happy and satisfied clients, by meeting all their requirements and expectations.
                    </Typography>
                    <Typography variant='body2' fontWeight={'0'} fontSize={'1rem'} sx={{ color: '#FFF' }}>
                        We provide best suited and custom solutions to our clients as per their business models and requirements. The services we offer to our clients are custom made, so that we can get the best results possible. We provide the best software development services in Noida. Our team of experts and developers is evolving each day with new trends and technologies in the market, which allows us to stand out and lead the market.
                    </Typography>
                    <Typography variant='body2' fontWeight={'0'} fontSize={'1rem'} sx={{ color: '#FFF' }}>
                        With our company and our services in IT, you can take your business to the new heights and dominate the market by targeting the actual audience with the help of our Ecommerce services, getting them hooked and engaged through our attractive and user friendly UI UX designs. For more scalability and versatility of the web app you can also integrate different platforms and business systems with the help of our API development services.
                    </Typography>
                    <Typography variant='body2' fontWeight={'0'} fontSize={'1rem'} sx={{ color: '#FFF' }}>
                        From the initial phases of web app development services to the later on maintenance and support services, we offer them all. We are the one stop destination for IT solutions. Our team of experienced experts is always there to serve you. HIRE THE BEST.
                    </Typography>
                </Box>

            </Box>

            {/* We provide solutions that works */}
            <Box sx={backgroundStyle}>
                <Box
                    component="img"
                    src={leftImg}
                    alt="Bubble3"
                    sx={{
                        position: 'absolute',
                        bottom: '0px',
                        left: '0px',
                        animation: `${moveLeftImg} 20s ease-in-out infinite`,
                        zIndex: -1
                    }}
                />
                <Box
                    component="img"
                    src={rightImg}
                    alt="Bubble2"
                    sx={{
                        position: 'absolute',
                        top: '0px',
                        right: '0px',
                        animation: `${moveRightImg} 20s ease-in-out infinite`,
                        zIndex: -1
                    }}
                />
                <Typography variant='h4' sx={{ fontWeight: 'bold', position: 'relative', zIndex: 2, textAlign: 'center' }}>
                    We provide solutions that work
                </Typography>

                <Grid2 container spacing={1} sx={{ alignItems: 'center', justifyContent: 'space-around', padding: { xs: 2 } }} >
                    <Grid2
                        item
                        xs={12}
                        md={6}
                        sx={{ justifyContent: 'center', px: { xs: 2, md: 5 } }}
                    >
                        <Stack direction="row" spacing={5}>
                            <Box
                                component="img"
                                src={Screen}
                                alt="Screen 1"
                                sx={{
                                    height: {
                                        xs: '200px', // height for extra small screens
                                        md: '360px', // height for medium screens and up
                                    },
                                    width: {
                                        xs: '200px', // width for extra small screens
                                        md: '200px', // width for medium screens and up
                                    },
                                }}
                            />
                            <Box
                                component="img"
                                src={Screen1}
                                alt="Screen 1"
                                marginTop='50px'
                                sx={{
                                    marginTop: '80px !important',
                                    height: {
                                        xs: '200px', // height for extra small screens
                                        md: '360px', // height for medium screens and up
                                    },
                                    width: {
                                        xs: '200px', // width for extra small screens
                                        md: '200px', // width for medium screens and up
                                    },
                                }}
                            />
                        </Stack>
                    </Grid2>

                    <Grid2 item xs={12} md={6} sx={{ py: 5 }}>
                        <Stack spacing={3}>
                            {data.map((item, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        backgroundColor: theme.palette.primary.deem,
                                        padding: 2,
                                        color: 'white',
                                        borderRadius: 8
                                    }}
                                >
                                    <Stack direction="row" spacing={4}>
                                        <Box>
                                            <img
                                                src={item.imgSrc}
                                                alt={`box-${index}`}
                                                style={{ width: '60px', height: '60px' }}
                                            />
                                        </Box>
                                        <Box>
                                            <Typography variant="h6" sx={{ mb: 1 }}>
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ whiteSpace: 'pre-line', fontSize: '14px' }}>{item.content}</Typography>
                                        </Box>
                                    </Stack>
                                </Box>
                            ))}
                        </Stack>
                    </Grid2>

                </Grid2>

            </Box>

            {/* Our services */}
            <OurServices />

            {/* What Clients Value Most About Us */}
            <ClientSlider />

            {/* Add the computer image at the bottom */}
            <Box
                sx={{
                    height: 'auto',
                    px: { xs: 2, lg: 15, md: 10 },
                    my: { xs: 5, md: 5 },
                }}
            >
                <Box>
                    <Grid
                        container
                        sx={{
                            display: { xs: 'block', md: 'flex', '@media (max-width:950px)': { display: 'block' } }, alignItems: 'center' // Custom media query for 950px
                        }}
                    >
                        <Grid
                            item
                            xs={12}
                            lg={6}
                            md={12}
                            sx={{
                                textAlign: 'center'
                            }}
                        >
                            <Box
                                component="img"
                                src={computer}
                                alt="computer"
                                sx={{
                                    height: 'auto',
                                    width: { xs: '300px', md: 'auto' }
                                }}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={6}
                        >
                            <Typography
                                variant='h4'
                                sx={{
                                    color: theme.palette.HeadingColor,
                                    py: 1,
                                    fontWeight: 'bold'
                                }}
                            >
                                Custom Software Development
                            </Typography>
                            <Typography
                                variant='h5'
                                sx={{
                                    color: theme.palette.HeadingColor,
                                    py: 1
                                }}
                            >
                                Your Blueprint, our code. Get custom solutions and endless possibilities to unfold limitless innovation.
                            </Typography>
                            <Button
                                variant='outlined'
                                onClick={handleSoftware}
                                sx={{
                                    color: theme.palette.HeadingColor,
                                    my: 1,
                                    border: '2px solid #2196F3'
                                }}
                            >
                                Explore
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            {/* Grow Your Business With Us */}
            <Box
                sx={{
                    background: theme.palette.primary.light,
                    height: 'auto',
                    px: { xs: 2, lg: 15, md: 10 },
                    my: { xs: 5, md: 5 },
                }}
            >
                <Box sx={{ alignItems: 'center' }}>
                    <Grid
                        container
                        sx={{
                            display: { xs: 'block', md: 'flex', '@media (max-width:950px)': { display: 'block' } },
                            alignItems: 'center'
                        }}
                    >
                        <Grid
                            item
                            xs={12}
                            md={12}
                            lg={6}
                        >
                            <Typography
                                variant='h4'
                                sx={{
                                    color: theme.palette.HeadingColor,
                                    py: 1,
                                    fontWeight: 'bold'
                                }}
                            >
                                Grow Your Business With Us
                            </Typography>
                            <Typography
                                variant='h5'
                                sx={{
                                    color: theme.palette.HeadingColor,
                                    py: 1
                                }}
                            >
                                Your Blueprint, our code. Get custom solutions and endless possibilities to unfold limitless innovation.
                            </Typography>
                            <Button
                                variant='outlined'
                                onClick={handleGrow}
                                sx={{
                                    color: theme.palette.HeadingColor,
                                    my: 1,
                                    border: '2px solid #2196F3'
                                }}
                            >
                                Explore
                            </Button>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={6}
                            sx={{
                                textAlign: 'center', py: 3
                            }}
                        >
                            <Box
                                component="img"
                                src={Group}
                                alt="Group"
                                sx={{
                                    height: 'auto',
                                    width: { xs: '300px', md: 'auto' }
                                }}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            {/* We Create Brands */}
            <Box
                sx={{
                    height: 'auto',
                    px: { xs: 2, md: 10, lg: 15 },
                    my: { xs: 5, md: 5 },
                }}
            >
                <Box
                    sx={{ alignItems: 'center' }}
                >
                    <Grid
                        container
                        alignItems={'center'}
                        spacing={3}
                        sx={{
                            display: { xs: 'block', md: 'flex', '@media (max-width:950px)': { display: 'block' } } // Custom media query for 950px
                        }}
                    >
                        <Grid
                            item
                            xs={12}
                            md={12}
                            lg={6}
                            sx={{
                                textAlign: 'center'
                            }}
                        >
                            <Box
                                component="img"
                                src={object}
                                alt="object"
                                sx={{
                                    height: 'auto',
                                    width: { xs: '300px', md: 'auto' }
                                }}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={6}
                        >
                            <Typography
                                variant='h4'
                                sx={{
                                    color: theme.palette.HeadingColor,
                                    py: 1,
                                    fontWeight: 'bold'
                                }}
                            >
                                We Create Brands
                            </Typography>
                            <Typography
                                variant='h5'
                                sx={{
                                    color: theme.palette.HeadingColor,
                                    py: 1
                                }}
                            >
                                Stand out from the crowd with strategic Digital Marketing Approach. Improvise your brand identity and connect with target audience.
                            </Typography>
                            <Button
                                variant='outlined'
                                sx={{
                                    color: theme.palette.HeadingColor,
                                    my: 1,
                                    border: '2px solid #2196F3'
                                }}
                                onClick={handleBrand}
                            >
                                Explore
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            {/* call us 24/7 */}
            <Box
                sx={{
                    backgroundColor: theme.palette.primary.main,
                    height: 'auto',
                    px: { xs: 2, md: 20 },
                    py: { xs: 2, md: 5 },
                    position: 'relative',
                }}
            >
                {/* Background Image with Overlay */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 1,
                    }}
                >
                    <Box
                        sx={{
                            backgroundImage: `url(${callshape1})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '100%',
                            height: '100%',
                            zIndex: 1,
                            opacity: 0.2,
                        }}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.3)',
                            zIndex: 2,
                        }}
                    />
                </Box>

                {/* Content Grid */}
                <Grid
                    container
                    alignItems="center"
                    spacing={2}
                    sx={{ position: 'relative', zIndex: 3, justifyContent: 'space-between' }}
                >
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" color="#E99f2B" py={1}>
                            Call us 24/7
                        </Typography>
                        <Typography variant="h4" color="#FFF" py={1}>
                            01205261995
                        </Typography>
                        <Typography variant="h5" color="#FFF" py={1}>
                            Need Help? We will help you regarding your query.
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{ backgroundColor: '#0071dc', my: 1, borderRadius: '50px' }}
                            onClick={handleGetaQuote}
                        >
                            Contact us
                        </Button>
                    </Grid>

                    {/* Image Grid with Responsive Styling */}
                    <Grid item xs={12} md={6} sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box
                            component="img"
                            src={Callus}
                            alt="object"
                            sx={{
                                width: { xs: '100%', sm: '90%', md: '100%', lg: '100%' },
                                maxWidth: '500px',
                                height: 'auto',
                            }}
                        />

                        {/* callshape2 positioned at the top left */}
                        <Box
                            component="img"
                            src={callshape2}
                            alt="shape2"
                            sx={{
                                position: 'absolute',
                                top: { xs: 30, sm: 40, md: 20, lg: 30 },
                                left: { xs: 20, sm: 80, md: 0 },
                                width: { xs: '80px', sm: '100px', md: '120px' },
                            }}
                        />

                        {/* callshape3 positioned at the top right */}
                        <Box
                            component="img"
                            src={callshape3}
                            alt="shape3"
                            sx={{
                                position: 'absolute',
                                top: { xs: 20, sm: 30, md: 20, lg: 30 },
                                right: { xs: -10, sm: 80, md: -10, lg: -20 },
                                width: { xs: '90px', sm: '110px', md: '150px' },
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>

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

            {/* case Studt */}
            <Slider />

        </>
    );
};

export default Home;
