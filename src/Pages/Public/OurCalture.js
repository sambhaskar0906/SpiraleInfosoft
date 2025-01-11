import React, { useState } from 'react';
import { Box, Typography, useTheme, Grid, Dialog, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Import images
import image1 from '../../assest/Culuture/image-1.jpg';
import image2 from '../../assest/Culuture/image-2.jpg';
import image3 from '../../assest/Culuture/image-3.jpg';
import image4 from '../../assest/Culuture/image-4.jpg';
import image5 from '../../assest/Culuture/image-5.webp';
import image6 from '../../assest/Culuture/image-6.jpg';

const OurCalture = () => {
    const theme = useTheme();

    // Array of image objects
    const images = [
        { id: 1, src: image1, alt: 'Image 1' },
        { id: 2, src: image2, alt: 'Image 2' },
        { id: 3, src: image3, alt: 'Image 3' },
        { id: 4, src: image4, alt: 'Image 4' },
        { id: 5, src: image5, alt: 'Image 5' },
        { id: 6, src: image6, alt: 'Image 6' },
    ];

    const [open, setOpen] = useState(false); // For opening the popup
    const [currentIndex, setCurrentIndex] = useState(0); // Track current image index

    const handleOpen = (index) => {
        setCurrentIndex(index);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

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
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: '#070B30',
                        zIndex: -1,
                    },
                }}
            >
                <Typography variant="h3" textAlign="center" color="white" sx={{
                    zIndex: 2, fontWeight: 'bold', animation: 'fadeIn 2s ease-in-out',
                    '@keyframes fadeIn': {
                        from: { opacity: 0 },
                        to: { opacity: 1 },
                    },
                    letterSpacing: '0.05em',
                }}>
                    Our culture
                </Typography>
            </Box>

            {/* Main Content */}
            <Box sx={{ px: { xs: 5, md: 10, lg: 15 }, py: { xs: 2, md: 2 }, mt: 3 }}>
                <Grid container spacing={3}>
                    {images.map((image, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={image.id}>
                            <Box
                                component="img"
                                src={image.src}
                                alt={image.alt}
                                sx={{
                                    width: '100%',
                                    height: '250px', // Fixed height for all images
                                    objectFit: 'cover',
                                    borderRadius: 2,
                                    boxShadow: theme.shadows[2],
                                    cursor: 'pointer',
                                }}
                                onClick={() => handleOpen(index)}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Image Popup */}
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="md"
                fullWidth
                sx={{ '& .MuiPaper-root': { position: 'relative' } }}
            >
                <IconButton
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        color: theme.palette.common.white,
                        zIndex: 2,
                    }}
                >
                    <CloseIcon />
                </IconButton>

                <Box
                    sx={{
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: '#000',
                    }}
                >
                    {/* Previous Button */}
                    <IconButton
                        onClick={handlePrev}
                        sx={{
                            position: 'absolute',
                            left: 10,
                            color: theme.palette.common.white,
                            zIndex: 2,
                        }}
                    >
                        <ArrowBackIosIcon />
                    </IconButton>

                    {/* Current Image */}
                    <Box
                        component="img"
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt}
                        sx={{
                            maxWidth: '100%',
                            maxHeight: '80vh',
                            objectFit: 'contain',
                        }}
                    />

                    {/* Next Button */}
                    <IconButton
                        onClick={handleNext}
                        sx={{
                            position: 'absolute',
                            right: 10,
                            color: theme.palette.common.white,
                            zIndex: 2,
                        }}
                    >
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Box>
            </Dialog>
        </>
    );
};

export default OurCalture;
