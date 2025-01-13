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
                'TechCloak Solutions Pvt. Ltd. is one of the most trusted and reliable software development companies when it comes to the user’s personal information protection principles.',
                'As we are an emerging company and expanding our fields, which also requires a lot of client interactions and conversations, we assure that the details or projects shared with us and our teams are end-to-end encrypted, ensuring no breaches and full authenticity—exactly what one can expect from a genuine and leading software development company.',
                'We totally work under the guidance of experts and government rules and regulations. We take our client’s privacy seriously, and there is no compromise on it.',
            ],
        },
        {
            icon: <GroupIcon fontSize="large" color="success" />,
            heading: 'No Provision for Third Parties',
            paragraphs: [
                'We always make sure that there is no breaching of information and personal details of clients or their business from our side. In any of these situations, we ensure that client privacy is not compromised at any cost.',
            ],
        },
        {
            icon: <GavelIcon fontSize="large" color="error" />,
            heading: 'Lawful Practices',
            paragraphs: [
                'Our company follows every applied and applicable law along with other guidelines issued by the government for the protection of personal information of the client.',
            ],
        },
        {
            icon: <LockIcon fontSize="large" color="secondary" />,
            heading: 'Security Measures',
            paragraphs: [
                'To maintain the privacy policies, we focus on educating employees and improving the entire information management system. Everything is carried out under great guidance and supervision to ensure there is no leakage of information.',
                'The company always seeks client feedback and opportunities for improvement. With the help of fetched and extracted data that has been provided by the visitor—sometimes in the form of cookies—we use this data to better understand the audience visiting our website, traffic rates, and region/location, enabling us to target our user base more effectively. We use cookies to gather insights about the visitor’s systems and devices used to access our website.',
                <>
                    For any questions or concerns regarding our privacy practices, feel free to contact us at <strong>info@tcspl.com</strong>
                </>,
                'By utilizing this information, we enhance our website to provide a richer experience to our clients. This information is used solely to create a better connection and understanding.',
                'The information provided by our visitors is safe and secure with us. However, while sending us any of your personal details, you must also take responsibility for ensuring its security.',
                'As we have already stated, we do not disclose or sell our dear clients’ data and personal information to any third party for any unethical practices.',
                'We take great care of our client’s personal information and continuously work to improve their experience when using our website and the services we provide.',
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
