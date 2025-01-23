import React, { useState } from 'react';
import {
    Box,
    Typography,
    useTheme,
    IconButton,
    Button,
    Grid,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Masonry from '@mui/lab/Masonry';

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

    return (
        <Box
            sx={{
                background: 'linear-gradient(135deg, #1d3557, #457b9d)',
                minHeight: '100vh',
                pb: 5,
            }}
        >
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
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
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

            {/* Image Gallery */}
            <Box sx={{ px: { xs: 2, md: 8, lg: 12 }, py: 6 }}>
                <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
                    {images.map((image, index) => (
                        <Box
                            key={image.id}
                            onClick={() => handleOpen(index)}
                            sx={{
                                position: 'relative',
                                cursor: 'pointer',
                                overflow: 'hidden',
                                borderRadius: '16px',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.6)',
                                },
                                '&:hover .overlay': {
                                    opacity: 1,
                                },
                            }}
                        >
                            {/* Image */}
                            <Box
                                component="img"
                                src={image.src}
                                alt={image.alt}
                                loading="lazy"
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '16px',
                                    transition: 'transform 0.5s ease',
                                }}
                            />

                            {/* Hover Overlay */}
                            <Box
                                className="overlay"
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'rgba(0, 0, 0, 0.6)',
                                    color: '#fff',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease',
                                    borderRadius: '16px',
                                    fontSize: '1.2rem',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                }}
                            >
                                <Typography variant="h6">{image.alt}</Typography>
                                <Typography variant="body2">Click to View</Typography>
                            </Box>
                        </Box>
                    ))}
                </Masonry>
            </Box>

            {/* Lightbox Modal */}
            {open && (
                <Box
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1300,
                        animation: 'fadeIn 0.5s ease',
                        '@keyframes fadeIn': {
                            from: { opacity: 0 },
                            to: { opacity: 1 },
                        },
                    }}
                >
                    {/* Close Button */}
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            top: 20,
                            right: 20,
                            color: 'white',
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
                            color: 'white',
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
                            borderRadius: '16px',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.8)',
                        }}
                    />

                    {/* Next Button */}
                    <IconButton
                        onClick={handleNext}
                        sx={{
                            position: 'absolute',
                            right: 20,
                            color: 'white',
                        }}
                    >
                        <ArrowForwardIosIcon sx={{ fontSize: '2rem' }} />
                    </IconButton>
                </Box>
            )}
        </Box>
    );
};

export default OurCulture;
