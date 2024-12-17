import React, { useState, useEffect } from 'react';
import { Fab } from '@mui/material';
import { ArrowUpward } from '@mui/icons-material';

const ScrollToTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    // Scroll to top functionality
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Handle the visibility of the up-arrow button when scrolling
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* Scroll to Top Button */}
            {showButton && (
                <Fab
                    color="primary"
                    sx={{
                        position: 'fixed',
                        bottom: 30,
                        right: 30,
                        zIndex: 999,
                        backgroundColor: '#007BFF', // Custom background color
                        transition: 'transform 0.3s ease, background-color 0.3s ease', // Smooth transitions
                        '&:hover': {
                            backgroundColor: '#0056b3', // Darker shade on hover
                            transform: 'scale(1.1)', // Button grows on hover
                        },
                    }}
                    onClick={scrollToTop}
                >
                    <ArrowUpward />
                </Fab>
            )}
        </>
    );
};

export default ScrollToTopButton;
