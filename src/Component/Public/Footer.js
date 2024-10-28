import React from 'react';
import { useThemeContext } from '../../App';
import { Box, Button, Grid, Stack, TextField, Typography, useTheme } from '@mui/material';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Footer = () => {
    // const theme = useThemeContext();
    const theme = useTheme();
    return (
        <>
            <Box sx={{
                backgroundColor: theme.palette.primary.main, height: 'auto',
                px: { xs: 2, lg: 15, md: 10 },
                pt: { xs: 2, md: 5 },
                color: '#FFF'
            }}>
                <Grid container spacing={5} sx={{ borderBottom: '1px solid #ccc', pb: 5 }}>
                    <Grid item xs={12} lg={4} sm={12} md={6}>
                        <Typography variant='h6' py={1}>
                            About Company
                        </Typography>
                        <Typography variant='body1' py={2}>
                            Spirale Infosoft is one of the most trusted and reliable software development companies based in Delhi NCR. We provide our finest services in website designing and development. We have dedicated teams of experts and developers to help you in maintenance and digital marketing services as well.
                        </Typography>
                        <Stack direction={'row'} alignItems={'center'} py={2} justifyContent={'space-around'} sx={{
                            backgroundColor: theme.palette.info.deem,
                            borderRadius: '20px',
                        }}>
                            <Box>
                                <Typography variant='h5' color='#000'>
                                    Talk to Our Support
                                </Typography>
                                <Typography variant='h5' color='#000'>
                                    +9101204995054
                                </Typography>
                            </Box>
                            <Box sx={{ height: '70px', width: '70px', display: 'flex', alignItems: 'center', color: theme.palette.primary.dark, background: theme.palette.info.light, borderRadius: '50%' }}>
                                <HeadsetMicIcon sx={{ fontSize: 50, ml: 1 }} />
                            </Box>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} lg={2} sm={12} md={6}>
                        <Typography variant='h5' py={1}>
                            Services
                        </Typography>
                        {[
                            'App Development',
                            'API services',
                            'Web Development',
                            'Cross-Platform App Development',
                            'eCommerce services',
                            'CMS Development',
                            'Privacy Policy'
                        ].map((service, index) => (
                            <Typography
                                key={index}
                                variant='body1'
                                py={1}
                                sx={{
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        backgroundColor: 'rgba(0, 0, 0, 0.08)',
                                        transform: 'scale(1.05)',
                                    },
                                }}
                            >
                                {service}
                            </Typography>
                        ))}
                    </Grid>

                    <Grid item xs={12} lg={2} sm={12} md={6}>
                        <Typography variant='h5' py={1}>
                            Technologies
                        </Typography>
                        {['Android', 'iOS', 'Laravel', 'PHP', 'React.js', 'ReactNative', 'Java'].map((tech) => (
                            <Button
                                key={tech}
                                variant="text"
                                color="inherit"
                                startIcon={<KeyboardArrowRightIcon />}
                                sx={{
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        backgroundColor: 'rgba(0, 0, 0, 0.08)',
                                        transform: 'scale(1.05)',
                                    },
                                }}
                            >
                                {tech}
                            </Button>
                        ))}
                    </Grid>

                    <Grid item xs={12} lg={4} sm={12} md={6}>
                        <Typography variant='h5' py={1}>
                            Enquiry
                        </Typography>
                        <Box py={1} width="100%">
                            <TextField
                                id="name"
                                label="Name"
                                variant="outlined"
                                size="small"
                                fullWidth
                                sx={{ backgroundColor: '#fff' }}
                            />
                        </Box>
                        <Box py={1} width="100%">
                            <TextField
                                id="email"
                                label="Email"
                                variant="outlined"
                                size="small"
                                fullWidth
                                sx={{ backgroundColor: '#fff' }}
                            />
                        </Box>
                        <Box py={1} width="100%">
                            <TextField
                                id="message"
                                label="Your Message"
                                multiline
                                rows={4}
                                fullWidth
                                sx={{ backgroundColor: '#fff' }}
                            />
                        </Box>
                        <Box py={1}>
                            <Button variant="contained">Send Message</Button>
                        </Box>
                    </Grid>
                </Grid>
                <Box>
                    <Typography variant='body1' py={2} textAlign={'center'}>
                        Copyright 2023 SpiraleInfoSoft.All Rights Reserved by <span style={{ color: "#E99f2B", textDecoration: 'underline', cursor: 'pointer' }}>SpiraleInfoSoft</span>
                    </Typography>
                </Box>
            </Box>
        </>
    );
}

export default Footer;
