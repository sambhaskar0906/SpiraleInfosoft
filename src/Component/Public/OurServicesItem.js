import React, { useEffect } from 'react';
import { Box, Button, Stack, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom'; // Import for routing links

const OurServicesItem = () => {
    const theme = useTheme();

    const list = [
        { name: "App Development", link: "/services/app-development" },
        { name: "Web Development", link: "/services/web-development" },
        { name: "API Services", link: "/services/api-service" },
        { name: "Cross-platform App Development", link: "/services/app-development/cross-plateform" },
        { name: "eCommerce Services", link: "/services/ecommers-service" },
        { name: "CMS Development", link: "/services/cms-development" }
    ];

    const colors = ['#FF6347', '#32CD32', '#1E90FF', '#FAEA7C', '#ACD4F4', '#1A2347'];

    const buttonGroups = [
        [
            { label: "Android", link: "/services/app-development/native-android" },
            { label: "React", link: "/services/web-development/reactjs" },
            { label: "App", link: "/services/app-development" },
            { label: "iOS", link: "/services/app-development/native-ios" }
        ],
        [
            { label: "eCommerce", link: "/services/ecommers-service" },
            { label: "Laravel", link: "/services/web-development/laravel" }
        ]
    ];

    const scrollToTop = () => {
        window.scrollTo(0, 0); // Scroll to top of the page
    };

    useEffect(() => {
        // Optionally, you can set this effect to be triggered by route changes
        scrollToTop(); // Scroll to top when the component is mounted
    }, []);

    return (
        <Box>
            <Typography variant="h4" fontWeight="bold" py={2}>
                Our Services
            </Typography>
            {list.map((item, index) => (
                <Box
                    key={index}
                    component={Link} // Use Link to make the box clickable
                    to={item.link} // Add the service link
                    onClick={scrollToTop} // Trigger scroll to top on link click
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 2,
                        textDecoration: 'none',
                        color: 'inherit',
                        '&:hover': {
                            backgroundColor: '#f0f0f0',
                            color: theme.palette.hoverAction.hoverDropdown,
                            cursor: 'pointer',
                        },
                    }}
                >
                    <Box
                        sx={{
                            width: 20,
                            height: 20,
                            borderRadius: '50%',
                            backgroundColor: colors[index] || '#ccc',
                            mr: 2,
                            border: '1px solid #000',
                        }}
                    />
                    <Typography variant="body2" fontWeight="bold">
                        {item.name}
                    </Typography>
                </Box>
            ))}

            {/* Tag Cloud */}
            <Typography variant="h4" fontWeight="bold" py={2}>
                Tag Cloud
            </Typography>
            {buttonGroups.map((group, index) => (
                <Stack key={index} direction="row" spacing={2} sx={{ flexWrap: 'wrap', mt: 2 }}>
                    {group.map((tag, idx) => (
                        <Button
                            key={idx}
                            component={Link} // Use Link for buttons
                            to={tag.link} // Add the tag link
                            onClick={scrollToTop} // Trigger scroll to top on button click
                            variant="contained"
                            sx={{
                                backgroundColor: theme.palette.hoverAction.hoverDropdown,
                                borderRadius: '10px',
                                py: 1,
                                textDecoration: 'none',
                            }}
                        >
                            {tag.label}
                        </Button>
                    ))}
                </Stack>
            ))}
        </Box>
    );
};

export default OurServicesItem;
