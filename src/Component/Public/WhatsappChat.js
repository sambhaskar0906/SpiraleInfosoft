import React, { useState, useEffect } from 'react';
import { Box, Tooltip, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ScrollToTopButton = () => {
    const [showButton, setShowButton] = useState(false);
    const phoneNumber = "+91 9696974038"; // Replace with your WhatsApp number

    // Handle the visibility of the button when scrolling
    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 200);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {showButton && (
                <Tooltip title="Chat with WhatsApp" arrow placement="left">
                    <Box
                        component="a"
                        href={`https://wa.me/${phoneNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            position: 'fixed',
                            bottom: 100,
                            right: 10,
                            zIndex: 999,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            textDecoration: 'none',
                            background: '#fff',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            border: '2px solid #25D366',
                            borderRadius: '50px', // Fully rounded
                            padding: '10px 20px',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            '&:hover': {
                                transform: 'scale(1.1)', // Enlarges on hover
                                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', // Adds a hover glow
                            },
                        }}
                    >
                        <WhatsAppIcon sx={{ color: '#25D366', fontSize: 24 }} />
                        <Typography sx={{ color: '#25D366', fontWeight: 600, fontSize: 14 }}>
                            Chat
                        </Typography>
                    </Box>
                </Tooltip>
            )}
        </>
    );
};

export default ScrollToTopButton;
