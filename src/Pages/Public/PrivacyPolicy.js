import React from 'react';
import { Box, Typography, useTheme, Divider } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import GroupIcon from '@mui/icons-material/Group';
import GavelIcon from '@mui/icons-material/Gavel';
import LockIcon from '@mui/icons-material/Lock';

const PrivacyPolicy = () => {
    const theme = useTheme();

    const content = [
        {
            icon: <SecurityIcon fontSize="large" color="primary" />,
            heading: 'Privacy Policy',
            paragraphs: [
                'TCSPL is one of the most trusted and reliable software development companies when it comes to protecting user’s personal information.',
                'As we expand and engage with more clients, we ensure that all shared details and projects are end-to-end encrypted. Clients can trust us for full authenticity and zero data breaches.',
                'We strictly follow government regulations and expert guidance to maintain our clients’ privacy with no compromises.',
            ],
        },
        {
            icon: <GroupIcon fontSize="large" color="success" />,
            heading: 'No Provision for Third Parties',
            paragraphs: [
                'We ensure that there is no unauthorized sharing of client information or business details. In every situation, client privacy remains our top priority.',
            ],
        },
        {
            icon: <GavelIcon fontSize="large" color="error" />,
            heading: 'Lawful Practices',
            paragraphs: [
                'Our company complies with all relevant laws and government guidelines to protect client data and maintain ethical practices.',
            ],
        },
        {
            icon: <LockIcon fontSize="large" color="secondary" />,
            heading: 'Security Measures',
            paragraphs: [
                'To uphold privacy policies, we educate our employees and enhance our information management system. This ensures that all data is handled securely and responsibly.',
                'We use cookies to gather insights about website visitors, such as traffic rate, location, and device type. This helps us improve our services and tailor user experiences.',
                'Rest assured, all visitor information is securely stored. However, clients should also take responsibility when sharing personal details.',
                'We never disclose or sell client data to third parties for unethical practices. Maintaining trust and data security is our priority.',
            ],
        },
    ];

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
                    background: 'linear-gradient(to bottom, rgba(7,11,48,0.8), rgba(7,11,48,0.6)), url("/path-to-background-image.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white',
                    textShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 'bold',
                        textAlign: 'center',
                        animation: 'fadeIn 2s ease-in-out',
                        '@keyframes fadeIn': {
                            from: { opacity: 0 },
                            to: { opacity: 1 },
                        },
                        letterSpacing: '0.05em',
                    }}
                >
                    Privacy Policy
                </Typography>
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: '10%',
                        display: 'flex',
                        justifyContent: 'center',
                        width: '100%',
                        animation: 'bounce 2s infinite',
                        '@keyframes bounce': {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-10px)' },
                        },
                    }}
                >
                    <Typography variant="body2" sx={{ color: 'white', opacity: 0.7 }}>
                        Scroll down to learn more
                    </Typography>
                </Box>
            </Box>

            {/* Main Content */}
            <Box sx={{ py: 6, px: { xs: 3, sm: 5, md: 10, lg: 15 } }}>
                {content.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            mb: 6,
                            py: 4,
                            px: { xs: 3, md: 6 },
                            backgroundColor: index % 2 === 0 ? theme.palette.background.paper : theme.palette.grey[100],
                            borderRadius: 2,
                            boxShadow: 3,
                            position: 'relative',
                            '&:hover': {
                                boxShadow: 6,
                                transform: 'scale(1.02)',
                                transition: 'all 0.3s ease-in-out',
                            },
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: '50%',
                                left: '-20px',
                                transform: 'translateY(-50%)',
                                width: '4px',
                                height: '50%',
                                backgroundColor: theme.palette.primary.main,
                            },
                        }}
                    >
                        {/* Icon and Heading */}
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            {item.icon}
                            <Typography variant="h4" sx={{ fontWeight: 'bold', ml: 2 }}>
                                {item.heading}
                            </Typography>
                        </Box>

                        {/* Paragraphs */}
                        {item.paragraphs.map((paragraph, pIndex) => (
                            <Typography
                                key={pIndex}
                                variant="h5"
                                sx={{ color: theme.palette.text.secondary, lineHeight: 1.8, mb: 2 }}
                            >
                                {paragraph}
                            </Typography>
                        ))}

                        {/* Divider */}
                        {index < content.length - 1 && <Divider sx={{ mt: 4 }} />}
                    </Box>
                ))}
            </Box>
        </>
    );
};

export default PrivacyPolicy;
