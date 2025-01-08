import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const PrivacyPolicy = () => {
    const theme = useTheme();

    // Content object
    const content = [
        {
            heading: 'Privacy Policy',
            paragraph: 'Spirale Infosoft is one of the most trusted and reliable software development companies when it comes to the user’s personal information protection principles.',
            paragraph1: "As we are an emerging company and expanding our fields which also requires a lot of client interactions and conversations, we assure that the details or projects shared with us and our teams are end to end encrypted and there is no breaching and full authenticity, what one can expect from a genuine and a leading software development company.",
            paragraph2: "We totally work under the guidance of experts and government rules and regulations. We take our client’s privacy seriously and there is no compromise with it",
        },
        {
            heading: 'No provision for third parties :',
            paragraph: 'We always make sure that there is no breaching of information and personal details of clients or their business from our side. In any of these situations, we ensure that the  client privacy is not compromised at any cost.',
        },
        {
            heading: 'Lawful practices :',
            paragraph: 'Our company follows every applied and applicable law with other guidelines issued by the                     government for the protection of personal information of the client.',
        },
        {
            heading: 'Security measurements :',
            paragraph: 'To maintain the privacy policies, we focus on educating the employees and improving the whole information management system.Everything should be under great guidance and supervision,so that there is no leakage of information.',
            paragraph1: "The company always seeks for client feedback and room for any improvement. With the help of fetched and extracted data that has been provided by the visitor, sometimes in the form of cookies, we use that data to know more about the audience visiting our website, traffic rate, region/location also so that we can target our user base and can get to know more about them. We use cookies to know more about the visitor’s systems and devices that they use to visit our website.",
            paragraph2: "By this piece of information, we enhance our website to provide a richer experience to our client.We use this information just to make a better connection and understanding.",
            paragraph3: "The information provided by our visitors is safe and secure with us. But while sending us any of your personal details you must also be very responsible about it.",
            paragraph4: "And as we have stated it already, we do not disclose or sell our dear client’s data and personal information to any third party, for any kind of unethical practices.",
            paragraph5: "We take good care of our client’s personal information and also work for their better experience of using the website and the services provided by us.",
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <Box
                sx={{
                    position: 'relative',
                    height: '50vh',
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
                <Typography variant="h3" textAlign="center" color="white" sx={{ zIndex: 2, fontWeight: 'bold' }}>
                    Privacy Policy
                </Typography>
            </Box>

            {/* Main Content */}
            <Box sx={{ px: { xs: 5, md: 10, lg: 15 }, py: { xs: 2, md: 2 }, mt: 3 }}>
                {content.map((item, index) => (
                    <Box key={index} sx={{ mb: 4 }}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                            {item.heading}
                        </Typography>
                        <Typography variant="h5" sx={{ color: theme.palette.text.primary }}>
                            {item.paragraph}
                        </Typography>
                        <Typography variant="h5" sx={{ color: theme.palette.text.primary, py: 1 }}>
                            {item.paragraph1}
                        </Typography>
                        <Typography variant="h5" sx={{ color: theme.palette.text.primary }}>
                            {item.paragraph2}
                        </Typography>
                        <Typography variant="h5" sx={{ color: theme.palette.text.primary, py: 1 }}>
                            {item.paragraph3}
                        </Typography>
                        <Typography variant="h5" sx={{ color: theme.palette.text.primary }}>
                            {item.paragraph4}
                        </Typography>
                        <Typography variant="h5" sx={{ color: theme.palette.text.primary, py: 1 }}>
                            {item.paragraph5}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </>
    );
};

export default PrivacyPolicy;
