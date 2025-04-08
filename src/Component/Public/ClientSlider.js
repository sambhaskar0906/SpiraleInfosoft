import React from 'react';
import { Box, Typography, Rating, useTheme } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Star from '../../assest/Star.png';
import Boxicon from '../../assest/Boxicon.png';

const values = [
    {
        id: 1,
        image: Star,
        description: 'The roots of BVG India Limited trace back to 1993 when Mr. Hanmantrao Ramdas Gaikwad, a visionary leader driven by an unshakeable.',
        BoxIcon: Boxicon,
        picname: 'BVG INDIA LIMITED',
        picusername: 'info@bvgindia.com',
        rating: 4.5,
    },
    {
        id: 2,
        image: Star,
        description: 'We focus on offering a wide range of consistent high quality and up-to-date medical services that allow us to improve the health.',
        BoxIcon: Boxicon,
        picname: 'SHRINIVAS HOSPITAL',
        picusername: 'info@shrinivashospital.com',
        rating: 4.2,
    },
    // {
    //     id: 3,
    //     image: Star,
    //     description: 'High levels of performance and innovative details, simple handling and maximum safety for the operator.',
    //     BoxIcon: Boxicon,
    //     picname: 'PUZZOLANA',
    //     picusername: 'enquiry@puzzolana.net',
    //     rating: 4.8,
    // },
    {
        id: 4,
        image: Star,
        description: 'Felix Hospital takes its name from the Latin word "Felix," which means lucky, happy, and successful.',
        BoxIcon: Boxicon,
        picname: 'FELIX HOSPITAL',
        picusername: 'info@felixhospital.com',
        rating: 4.1,
    },
    {
        id: 5,
        image: Star,
        description: 'We are one of the key manufacturers of our qualified product lines in the aerospace and defence, energy and oil and gas industries.',
        BoxIcon: Boxicon,
        picname: 'AZAD ENGINEERING',
        picusername: 'info@azad.in',
        rating: 3.6,
    },
    {
        id: 6,
        image: Star,
        description: 'Dr. J.S. Bahia, the founder and Managing Director of Amar Hospital, until the point of inflection happened in 1997.',
        BoxIcon: Boxicon,
        picname: 'AMAR HOSPITAL',
        picusername: 'customercare@amarhospital.com',
        rating: 4.0,
    },
];

const ClientSlider = () => {
    const theme = useTheme();

    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Box sx={{ p: 2, px: { xs: 2, md: 14, lg: 14 }, my: { xs: 2, md: 6 } }}>
            <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' }, mb: 2, textAlign: 'center' }}
            >
                Why Clients Speak Highly of Us
            </Typography>
            <Typography variant="h5" fontWeight="bold" textAlign="center" mb={4}>
                Driven success through trust, expertise, and custom web solutions
            </Typography>
            <Slider
                {...settings}
                style={{
                    overflow: 'hidden',
                }}
            >
                {values.map(({ id, description, BoxIcon, picname, picusername, rating }) => (
                    <Box
                        key={id}
                        sx={{
                            padding: '0 10px', // Add padding to create spacing
                        }}
                    >
                        <Box
                            sx={{
                                backgroundColor: theme.palette.primary.main,
                                borderRadius: 2,
                                p: 3,
                                boxShadow: 3,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'stretch', // Ensure it stretches to same height
                                minHeight: '300px', // Ensure a minimum height, even for shorter content
                            }}
                        >
                            <Rating
                                name={`image-rating-${id}`}
                                value={rating}
                                readOnly
                                precision={0.1}
                                sx={{ mb: 2 }}
                            />
                            <Typography variant="body2" color="#fff" mb={2}>
                                {description}
                            </Typography>
                            <img
                                src={BoxIcon}
                                alt="Box Icon"
                                style={{
                                    width: '100%',
                                    borderRadius: 4,
                                    marginBottom: 8,
                                }}
                            />
                            <Box>
                                <Typography variant="h6" color="#fff">
                                    {picname}
                                </Typography>
                                <Typography variant="body2" color="#fff">
                                    {picusername}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default ClientSlider;
