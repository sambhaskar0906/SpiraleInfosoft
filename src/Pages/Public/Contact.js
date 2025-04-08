import React from 'react';
import { Box, Button, Grid, Stack, TextField, Typography, useTheme } from '@mui/material';
import contact from '../../assest/Banner/contactus.png';
import callshape1 from '../../assest/callshap1.webp';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const Contact = () => {
    const theme = useTheme();

    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    height: '60vh',
                    position: 'relative',
                    backgroundImage: `url(${contact})`, // Ensure the image path is correct
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
                    Contact
                </Typography>
            </Box>

            <Box sx={{ p: theme.spacing(5), px: { xs: 2, lg: 15, md: 10 }, }}>
                <Typography variant='h4' mb={5} textAlign={'center'}>
                    Get in Touch
                </Typography>
                <Typography variant='h5' textAlign={'center'}>
                    At TCSPL, we are always here to elevate your business. Our team of highly experienced developers and experts is available 24/7 to answer your web app development and related queries. Discuss your projects with us and begin your online journey.
                </Typography>
            </Box>
            <Box sx={{ p: theme.spacing(5) }}   >
                <Typography variant='h4' textAlign={'center'} fontWeight={'bold'}>
                    Let's Send Us a Message Below
                </Typography>
            </Box>

            <Grid container justifyContent="space-between" spacing={4} sx={{ px: { xs: 2, lg: 15, md: 10 }, py: { xs: 2, md: 5 }, }}>
                <Grid item xs={12} md={4}>
                    <Box
                        sx={{
                            backgroundColor: theme => theme.palette.primary.dark,
                            px: { xs: 2, md: 5 },
                            py: { xs: 2, md: 5 },
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: '20px',
                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                zIndex: 1,
                                backgroundImage: `url(${callshape1})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                opacity: 0.1,
                                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                            }}
                        />

                        <Box sx={{ position: 'relative', zIndex: 2 }}>
                            <Typography variant="h6" color="#E99f2B">
                                Contact info
                            </Typography>
                            <Typography variant="h6" py={1} color="#FFF" fontWeight="bold">
                                Let's Connect With Us
                            </Typography>
                            <Typography variant="body2" py={1} color="#FFF">
                                We will help you regarding your query 24/7
                            </Typography>

                            {[
                                {
                                    icon: CallIcon,
                                    title: 'Phone number',
                                    content: '+91 1204099066',
                                    contect2: '+91 9696974038', // Second mobile number
                                },
                                {
                                    icon: LocationOnIcon,
                                    title: 'Corporate office',
                                    subtittles: ['office no. 47 & 48'],
                                    contents: ['2nd floor girnar palace, aditiya circle, gidc-vapi, Gujarat pincode 396191'],
                                    title1: 'Development center noida',
                                    contents1: ['B-25 sector-64 Noida(201307), uttar pradesh'],
                                },
                                {
                                    icon: ChatBubbleOutlineIcon,
                                    title: 'Contact Info',
                                    content: 'info@tcspl.in',
                                },
                            ].map(
                                (
                                    {
                                        icon: Icon,
                                        title,
                                        subtittles = [],
                                        contents = [],
                                        title1,
                                        contents1 = [],
                                        content,
                                        contect2, // Add contect2 here
                                    },
                                    index
                                ) => (
                                    <Stack key={index} py={1} direction="row" spacing={2}>
                                        <Icon
                                            sx={{
                                                color: (theme) => theme.palette.ButtonColor,
                                                backgroundColor: '#FFF',
                                                borderRadius: '50%',
                                                p: 1,
                                                fontSize: 40,
                                            }}
                                        />
                                        <Box>
                                            {/* First Title, Subtitles, and Contents */}
                                            <Typography variant="h5" color="#FFF" fontWeight="bold">
                                                {title}
                                            </Typography>
                                            {subtittles.map((sub, idx) => (
                                                <Typography key={idx} py={0.5} variant="body2" fontSize={16} color="#FFF">
                                                    {sub}
                                                </Typography>
                                            ))}
                                            {contents.map((cont, idx) => (
                                                <Typography key={idx} py={0.5} variant="body2" fontSize={16} color="#FFF">
                                                    {cont}
                                                </Typography>
                                            ))}

                                            {/* Display mobile numbers */}
                                            {content && (
                                                <Typography py={0.3} variant="body2" fontSize={16} color="#FFF">
                                                    {content}
                                                </Typography>
                                            )}
                                            {contect2 && (
                                                <Typography py={0.3} variant="body2" fontSize={16} color="#FFF">
                                                    {contect2}
                                                </Typography>
                                            )}

                                            {/* Second Title, Subtitles, and Contents */}
                                            {title1 && (
                                                <Typography variant="h5" color="#FFF" fontWeight="bold" mt={2}>
                                                    {title1}
                                                </Typography>
                                            )}
                                            {contents1.map((cont, idx) => (
                                                <Typography key={idx} py={0.5} variant="body2" fontSize={16} color="#FFF">
                                                    {cont}
                                                </Typography>
                                            ))}
                                        </Box>
                                    </Stack>
                                )
                            )}
                        </Box>

                    </Box>
                </Grid>

                <Grid item xs={12} md={8}>
                    <Box sx={{ display: { xs: 'block', sm: 'block', md: 'flex', lg: 'flex' } }} mb={2}>
                        <Box width={'100%'} sx={{ pb: { xs: 2 } }}>
                            <Typography variant='h5' pb={1}>Your Name*</Typography>
                            <TextField
                                placeholder="Your Name"
                                variant="outlined"
                                fullWidth
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        border: '1px solid #2699f3',
                                        '& fieldset': {
                                            borderColor: '#2699f3', // default border color
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#2699f3', // hover state color
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#2699f3', // focus state color
                                        },
                                    }
                                }}
                            />
                        </Box>
                        <Box width={'100%'} sx={{ ml: { xs: 0, md: 2, lg: 2 } }}>
                            <Typography variant='h5' pb={1}>Your Email*</Typography>
                            <TextField
                                placeholder="Your Email"
                                variant="outlined"
                                fullWidth
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        border: '1px solid #2699f3',
                                        '& fieldset': {
                                            borderColor: '#2699f3',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#2699f3',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#2699f3',
                                        },
                                    }
                                }}
                            />
                        </Box>
                    </Box>
                    <Box>
                        <Typography variant='h5' pb={1}>Your Message*</Typography>
                        <TextField
                            placeholder="Your Message"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={10}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    border: '1px solid #2699f3',
                                    '& fieldset': {
                                        borderColor: '#2699f3',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#2699f3',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#2699f3',
                                    },
                                }
                            }}
                        />
                    </Box>
                    <Box textAlign={'center'} >
                        <Button size='lg' variant='contained' sx={{ p: 2, px: 3, mt: 3, borderRadius: '50px' }}>Send Message</Button>
                    </Box>
                </Grid>

            </Grid >

            {/* Map Section */}
            <Box>
                <Box
                    sx={{
                        height: { xs: '300px', md: '400px' },
                        width: '100%',
                        overflow: 'hidden',
                    }}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28164.58633201035!2d77.31964772796199!3d28.570158245745755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce48e2ed2bfc9%3A0x8d4c8eeb2d18938c!2sSector%2018%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1614670846780!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </Box>
            </Box >
        </>
    );
};

export default Contact;