import React from 'react';
import { Box, Button, Grid, Typography, useTheme } from '@mui/material';
import { useThemeContext } from '../../App';
import AndroidIcon from '@mui/icons-material/Android';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import ApiIcon from '@mui/icons-material/Api';
import AppleIcon from '@mui/icons-material/Apple';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import service from '../../assest/service.webp';

const data = [
    {
        id: 1,
        icon: ManageSearchIcon,
        content: 'CMS Development',
        subContent:
            'From asking the question whether you need a CMS or not to develop a most optimal solution, we have a trained team to take care of all that you need to run a CMS.',
        buttonText: 'Learn More',
        buttonIcon: ChevronRightIcon,
    },
    {
        id: 2,
        icon: AndroidIcon,
        content: 'APP Development',
        subContent:
            'We believe in taking our clients online business to the next level by developing interactive, beautiful Mobile Apps and publishing it to play store. ',
        buttonText: 'Learn More',
        buttonIcon: ChevronRightIcon,
    },
    {
        id: 3,
        icon: CastForEducationIcon,
        content: 'Web Development',
        subContent:
            'If you are looking affordable website designing services, you are at right place. We provide custom website designing services within your budget.',
        buttonText: 'Learn More',
        buttonIcon: ChevronRightIcon,
    },
    {
        id: 4,
        icon: AcUnitIcon,
        content: 'eCommerce Services',
        subContent:
            'If you are looking affordable website designing services, you are at right place. We provide custom website designing services within your budget.',
        buttonText: 'Learn More',
        buttonIcon: ChevronRightIcon,
    },
];

const data1 = [
    {
        id: 1,
        icon: ApiIcon,
        content: 'API Services',
        subContent:
            'We are expert in developing and integration APIs, we have earned a tag of reliable API developer with PHP, NodeJs, etc.',
        buttonText: 'Learn More',
        buttonIcon: ChevronRightIcon,
    },
    {
        id: 2,
        icon: AppleIcon,
        content: 'IOS app development',
        subContent:
            'With our expert iOS developers and experts, we have developed 100+ iOS apps and published on app store.',
        buttonText: 'Learn More',
        buttonIcon: ChevronRightIcon,
    },
    {
        id: 3,
        icon: AcUnitIcon,
        content: 'React Native',
        subContent:
            'React native is a hot technology which is used to create cross platform applications with beautiful, fast and responsive UIs.',
        buttonText: 'Learn More',
        buttonIcon: ChevronRightIcon,
    },
    {
        id: 4,
        icon: CastForEducationIcon,
        content: 'React.js',
        subContent:
            'React native is a hot technology which is used to create cross platform applications with beautiful, fast and responsive UIs.',
        buttonText: 'Learn More',
        buttonIcon: ChevronRightIcon,
    },
];

const OurServices = () => {
    // const theme = useThemeContext();
    const theme = useTheme();
    return (
        <>
            <Box
                sx={{
                    py: 5,
                    px: { xs: 2, md: 14, lg: 14 },
                    backgroundColor: theme.palette.primary.main,
                    height: 'auto',
                    position: 'relative',
                }}
            >
                <Box
                    sx={{
                        height: { xs: '200px', sm: '300px', md: '400px' },
                        backgroundImage: `url(${service})`,
                        backgroundPosition: 'right top',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        width: '100%',
                    }}
                />
                <Typography variant="h5" color="#E99f2B" textAlign="center" pb={2}>
                    Our Services
                </Typography>
                <Typography variant="h4" color="#fff" textAlign="center" pb={5}>
                    Our wide range of IT services<br />
                    enhances the working<br />
                    experience
                </Typography>

                <Grid
                    container
                    sx={{
                        mb: 2,
                        rowGap: '20px',
                        columnGap: '20px',
                        justifyContent: 'center',
                        position: 'relative',
                        zIndex: 1,
                    }}
                >
                    {data.map((item) => (
                        <Grid
                            item
                            xs={12}
                            lg={2.8}
                            md={4.5}
                            key={item.id}
                            sx={{
                                backgroundColor: '#fff',
                                borderRadius: '20px',
                                display: 'flex',
                                flexDirection: 'column',
                                boxSizing: 'border-box',
                                position: 'relative',
                                overflow: 'hidden',
                                '&:hover::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: 'linear-gradient(to top left, #FFCC33, #FF6633)',
                                    opacity: 0.8,
                                    zIndex: 0,
                                    transition: 'opacity 0.3s ease-in-out',
                                },
                                '&:hover': {
                                    color: '#fff',
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                    justifyContent: 'space-between',
                                    position: 'relative',
                                    zIndex: 1,
                                }}
                            >
                                <Box sx={{ display: 'flex', mb: 2 }}>
                                    <item.icon sx={{ fontSize: 60, color: theme.palette.primary.deem }} />
                                </Box>
                                <Typography variant="h4">{item.content}</Typography>
                                <Typography variant="body1" sx={{ marginTop: 1, whiteSpace: 'pre-line' }}>
                                    {item.subContent}
                                </Typography>
                                <Box sx={{ display: 'flex', mt: 2 }}>
                                    <Button
                                        variant="text"
                                        sx={{ fontWeight: 'bold', color: '#000', p: 0 }}
                                        endIcon={<item.buttonIcon />}
                                    >
                                        {item.buttonText}
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

                <Grid
                    container
                    sx={{
                        mt: 2,
                        rowGap: '20px',
                        columnGap: '20px',
                        justifyContent: 'center',
                        position: 'relative',
                        zIndex: 1,
                    }}
                >
                    {data1.map((item) => (
                        <Grid
                            item
                            xs={12}
                            lg={2.8}
                            md={4.5}
                            key={item.id}
                            sx={{
                                backgroundColor: '#fff',
                                borderRadius: '20px',
                                display: 'flex',
                                flexDirection: 'column',
                                boxSizing: 'border-box',
                                position: 'relative',
                                overflow: 'hidden',
                                '&:hover::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: 'linear-gradient(to top left, #FFCC33, #FF6633)',
                                    opacity: 0.8,
                                    zIndex: 0,
                                    transition: 'opacity 0.3s ease-in-out',
                                },
                                '&:hover': {
                                    color: '#fff',
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    padding: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                    justifyContent: 'space-between',
                                    position: 'relative',
                                    zIndex: 1,
                                }}
                            >
                                <Box sx={{ display: 'flex', mb: 2 }}>
                                    <item.icon sx={{ fontSize: 60, color: theme.palette.primary.deem }} />
                                </Box>
                                <Typography variant="h4">{item.content}</Typography>
                                <Typography variant="body1" sx={{ marginTop: 1, whiteSpace: 'pre-line' }}>
                                    {item.subContent}
                                </Typography>
                                <Box sx={{ display: 'flex', mt: 2 }}>
                                    <Button
                                        variant="text"
                                        sx={{ fontWeight: 'bold', color: '#000', p: 0 }}
                                        endIcon={<item.buttonIcon />}
                                    >
                                        {item.buttonText}
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
};

export default OurServices;
