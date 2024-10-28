import { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useThemeContext } from '../../App';

import amar from '../../assest/Client/1.jpg';
import azad from '../../assest/Client/2.jpg';
import ae from '../../assest/Client/3.jpg';
import bvg from '../../assest/Client/4.jpg';
import gad from '../../assest/Client/5.jpg';
import amar1 from '../../assest/Client/6.jpg';
import amar2 from '../../assest/Client/7.jpg';
import amar3 from '../../assest/Client/8.jpg';

// Image sources and their corresponding texts array
const clientImages = [
    { src: amar, text: "Client 1 - Software Development" },
    { src: azad, text: "Client 2 - Web Development" },
    { src: ae, text: "Client 3 - Mobile Applications" },
    { src: bvg, text: "Client 4 - UI/UX Design" },
    { src: gad, text: "Client 5 - Database Management" },
    { src: amar1, text: "Client 6 - IT Consulting" },
    { src: amar2, text: "Client 7 - System Integration" },
    { src: amar3, text: "Client 8 - Cloud Solutions" }
];

// Custom Arrow components
const Arrow = ({ onClick, direction }) => (
    <IconButton
        onClick={onClick}
        sx={{
            position: 'absolute',
            top: '50%',
            [direction]: 0,
            transform: 'translate(0, -50%)',
            zIndex: 1,
            color: 'black',
            backgroundColor: 'white',
            '&:hover': { backgroundColor: 'grey' },
        }}
    >
        {direction === 'right' ? <ArrowForwardIosIcon /> : <ArrowBackIosIcon />}
    </IconButton>
);

export default function CaseStudy() {
    const [activeSlide, setActiveSlide] = useState(0);
    const theme = useThemeContext();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <Arrow direction="right" />,
        prevArrow: <Arrow direction="left" />,
        beforeChange: (current, next) => setActiveSlide(next),
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 4 } },
            { breakpoint: 950, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 580, settings: { slidesToShow: 1 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
    };

    const isCenterSlide = (index, visibleSlides) => {
        const centerSlide = Math.floor(visibleSlides / 2);
        return index === (activeSlide + centerSlide) % clientImages.length;
    };

    return (
        <Box sx={{ overflow: 'hidden', width: '100%' }}>
            <Box textAlign="center">
                <Typography variant="h5" sx={{ color: theme.palette.ButtonColor, py: 1 }}>
                    Case Study
                </Typography>
                <Typography variant="h4" py={1} fontWeight="bold">
                    Software and development <br />
                    services we provide to our <br />
                    clients
                </Typography>
            </Box>
            <Box py={5} sx={{ width: '100%', position: 'relative' }}>
                <Slider {...settings}>
                    {clientImages.map((client, index) => {
                        const isCenter = isCenterSlide(index, 5);
                        return (
                            <Box
                                key={index}
                                sx={{
                                    position: 'relative',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    // px: { xs: 2, sm: 2, md: 1 },
                                    transform: isCenter ? 'scale(1) rotateY(0deg)' : 'scale(0.8) rotateY(20deg)',
                                    transition: 'transform 0.5s',
                                    '&:hover': { transform: 'scale(0.7)' },
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'relative',
                                        width: '100%',
                                        maxWidth: { xs: '90%', sm: '80%', md: '100%' },
                                        transform: isCenter ? 'rotateY(0deg)' : 'rotateY(-20deg)',
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={client.src}
                                        alt={`Client ${index + 1}`}
                                        sx={{
                                            width: '100%',
                                            borderRadius: isCenter ? '8px' : '8px',
                                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                            borderRadius: '8px',
                                            display: 'flex',
                                            alignItems: 'flex-end',
                                            justifyContent: 'center',
                                            p: 2,
                                            '&:hover': {
                                                backgroundColor: 'rgba(0, 0, 0, 0.6)', // Darker overlay on hover
                                            },
                                        }}
                                    >
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                color: 'white',
                                                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                                padding: '8px 12px',
                                                borderRadius: '4px',
                                                transition: 'color 0.3s', // Transition for text color
                                                '&:hover': {
                                                    color: 'yellow', // Change text color on hover
                                                },
                                            }}
                                        >
                                            {client.text}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        );
                    })}
                </Slider>
            </Box>
        </Box >
    );
}