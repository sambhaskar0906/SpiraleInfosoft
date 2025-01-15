import React, { useState } from 'react';
import { Box, Typography, useTheme, Grid, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Import images
import image1 from '../../assest/Culuture/image-1.jpg';
import image2 from '../../assest/Culuture/image-2.jpg';
import image3 from '../../assest/Culuture/image-3.jpg';
import image4 from '../../assest/Culuture/image-4.jpg';
import image6 from '../../assest/Culuture/image-6.jpg';
import image7 from '../../assest/Culuture/image-7.jpg';
import image8 from '../../assest/Culuture/image-8.jpg';
import image9 from '../../assest/Culuture/image-9.jpg';
import image10 from '../../assest/Culuture/image-10.jpg';

const OurCulture = () => {
    const theme = useTheme();

    const images = [
        { id: 1, src: image1, alt: 'Image 1' },
        { id: 2, src: image2, alt: 'Image 2' },
        { id: 3, src: image3, alt: 'Image 3' },
        { id: 4, src: image4, alt: 'Image 4' },
        { id: 5, src: image6, alt: 'Image 5' },
        { id: 6, src: image7, alt: 'Image 6' },
        { id: 7, src: image8, alt: 'Image 7' },
        { id: 8, src: image9, alt: 'Image 8' },
        { id: 9, src: image10, alt: 'Image 9' },
    ];

    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    const handleOpen = (index) => {
        if (index >= 0 && index < images.length) {
            setCurrentIndex(index);
            setOpen(true);
        }
    };

    const handleClose = () => setOpen(false);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleShowMore = () => setShowMore(true);

    return (
        <>
            {/* Hero Section */}
            <Box
                sx={{
                    position: 'relative',
                    height: '60vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#070B30',
                    color: 'white',
                }}
            >
                <Typography
                    variant="h3"
                    textAlign="center"
                    sx={{
                        fontWeight: 'bold',
                        animation: 'fadeIn 2s ease-in-out',
                        '@keyframes fadeIn': {
                            from: { opacity: 0 },
                            to: { opacity: 1 },
                        },
                        letterSpacing: '0.05em',
                    }}
                >
                    Our Culture
                </Typography>
            </Box>

            {/* Main Content */}
            <Box sx={{ px: { xs: 3, md: 10, lg: 15 }, py: 4, mt: 3 }}>
                <Grid container spacing={3}>
                    {(showMore ? images : images.slice(0, 8)).map((image, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={image.id}>
                            <Box
                                component="img"
                                src={image.src}
                                alt={image.alt}
                                sx={{
                                    width: '100%',
                                    height: '250px',
                                    objectFit: 'cover',
                                    borderRadius: 2,
                                    boxShadow: theme.shadows[3],
                                    cursor: 'pointer',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: theme.shadows[6],
                                    },
                                }}
                                onClick={() => handleOpen(index)}
                            />
                        </Grid>
                    ))}
                </Grid>
                {!showMore && (
                    <Box sx={{ textAlign: 'center', mt: 4 }}>
                        <Button
                            variant="contained"
                            onClick={handleShowMore}
                            sx={{
                                px: 4,
                                py: 1.5,
                                backgroundColor: theme.palette.primary.main,
                                color: '#fff',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                borderRadius: '20px',
                                '&:hover': {
                                    backgroundColor: theme.palette.primary.dark,
                                },
                            }}
                        >
                            View More
                        </Button>
                    </Box>
                )}
            </Box>

            {/* Custom Image Popup */}
            {open && (
                <Box
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        backdropFilter: 'blur(5px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1300,
                    }}
                >
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            top: 20,
                            right: 20,
                            color: theme.palette.common.white,
                        }}
                    >
                        <CloseIcon sx={{ fontSize: '2rem' }} />
                    </IconButton>

                    {/* Previous Button */}
                    <IconButton
                        onClick={handlePrev}
                        sx={{
                            position: 'absolute',
                            left: 20,
                            color: theme.palette.common.white,
                        }}
                    >
                        <ArrowBackIosIcon sx={{ fontSize: '2rem' }} />
                    </IconButton>

                    {/* Current Image */}
                    <Box
                        component="img"
                        src={images[currentIndex]?.src}
                        alt={images[currentIndex]?.alt}
                        sx={{
                            maxWidth: '90%',
                            maxHeight: '90%',
                            objectFit: 'contain',
                            borderRadius: 2,
                            boxShadow: theme.shadows[5],
                        }}
                    />

                    {/* Next Button */}
                    <IconButton
                        onClick={handleNext}
                        sx={{
                            position: 'absolute',
                            right: 20,
                            color: theme.palette.common.white,
                        }}
                    >
                        <ArrowForwardIosIcon sx={{ fontSize: '2rem' }} />
                    </IconButton>
                </Box>
            )}
        </>
    );
};

export default OurCulture;
