import React from 'react';
import HomeImg from '../../assest/homeimg.png';
import Bubble1 from '../../assest/bubble3.png';
import Bubble2 from '../../assest/bubble1.png';
import Bubble3 from '../../assest/bubble2.png';
import { Box, Button, keyframes, Stack, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Keyframes for moving from bottom to top-right
const moveBottomToTopRight = keyframes`
  0% {
    transform: translate(20, 80px); /* Start from bottom */
  }
  50% {
    transform: translate(20vw, -20vh); /* Move to top-right */
  }
`;

// Keyframes for moving from bottom to top-left
const moveBottomToTopLeft = keyframes`
  0% {
    transform: translate(20, 80px); /* Start from bottom */
  }
  50% {
    transform: translate(-20vw, -20vh); /* Move to top-left */
  }
`;

const Keyframe = {
    Key1: Bubble1,
    Key2: Bubble2,
    Key3: Bubble3,
    Key4: Bubble2,
}

const HomeBackground = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const backgroundStyle = {
        backgroundImage: `url(${HomeImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative', // To allow absolutely positioned elements
        paddingTop: '50px'
    };

    const bubbleStyle = {
        position: 'absolute',
        width: '150px',
        height: '150px',
        animation: '5s ease-in-out infinite', // Apply animation timing and looping
    };

    const handleContact = () => {
        window.scrollTo(0, 0);
        navigate('/contact');
    }

    const handleLearnMore = () => {
        window.scrollTo(0, 0);
        navigate('/about');
    }

    return (
        <div style={backgroundStyle}>
            {/* Bubble1 - Move from bottom to top-right */}
            <Box
                component="img"
                src={Keyframe.Key1}
                style={{ height: '200px', width: '200px' }}
                alt="Bubble1"
                sx={{
                    ...bubbleStyle,
                    bottom: '20px',
                    left: '20px',
                    animation: `${moveBottomToTopRight} 20s ease-in-out infinite`, // Slower speed
                }}
            />

            {/* Bubble3 - Move from bottom to top-right */}
            <Box
                component="img"
                src={Keyframe.Key3}
                style={{ height: '250px', width: '250px' }}
                alt="Bubble3"
                sx={{
                    ...bubbleStyle,
                    bottom: '20px',
                    left: '20px',
                    animation: `${moveBottomToTopRight} 15s ease-in-out infinite`, // Slower speed
                }}
            />

            {/* Bubble2 - Move from bottom to top-left */}
            <Box
                component="img"
                src={Keyframe.Key2}
                style={{ height: '350px', width: '350px' }}
                alt="Bubble2"
                sx={{
                    ...bubbleStyle,
                    bottom: '20px',
                    right: '20px', // Position on the right side
                    animation: `${moveBottomToTopLeft} 15s ease-in-out infinite`, // Slower speed
                }}
            />

            <Box
                component="img"
                src={Keyframe.Key3}
                style={{ height: '250px', width: '250px' }}
                alt="Bubble2"
                sx={{
                    ...bubbleStyle,
                    bottom: '20px',
                    right: '20px', // Position on the right side
                    animation: `${moveBottomToTopLeft} 20s ease-in-out infinite`, // Slower speed
                }}
            />
            <Box sx={{ zIndex: 1, px: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
                <Box sx={{ my: { xs: 4, sm: 5, md: 6 } }}> {/* Responsive spacing */}
                    <Typography variant='h5' sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', sm: '1.2rem', md: '1.3rem' } }} data-aos="fade-down"
                        data-aos-duration="2000">
                        DESIGN SMARTER - NOT HARDER
                    </Typography>
                </Box>
                <Box sx={{ my: { xs: 4, sm: 5, md: 6 } }} data-aos="fade-right"
                    data-aos-duration="1000"> {/* Responsive spacing */}
                    <Typography variant='h4' sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' } }}>We don’t just develop</Typography>
                    <Typography variant='h3' sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' } }}>Softwares</Typography>
                    <Typography variant='h4' sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' } }}>we build imaginations</Typography>
                </Box>
                <Box sx={{ width: { xs: '90%', sm: '80%', md: '70%' }, mx: 'auto', textAlign: 'center', my: { xs: 4, sm: 5, md: 6 } }}> {/* Responsive width and spacing */}
                    <Typography variant='h5' data-aos="fade-left"
                        data-aos-duration="2000">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </Typography>
                </Box>
                <Stack direction='row' justifyContent='center' alignItems='center' spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ my: { xs: 4, sm: 5, md: 6 } }}>
                    <Box data-aos="fade-right"
                        data-aos-duration="2000">
                        <Button variant="contained" sx={{ backgroundColor: theme.palette.primary.deem }} onClick={handleLearnMore}>Learn More</Button>
                    </Box>
                    <Box data-aos="fade-left"
                        data-aos-duration="2000">
                        <Button variant="outlined" onClick={handleContact}>Contact Us</Button>
                    </Box>
                </Stack>
            </Box>
        </div>
    );
};

export default HomeBackground;
