import React from 'react';
import { Box, Card, CardContent, Typography, Avatar } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useTheme } from '@mui/material/styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const projects = [
    { title: 'Login Screen Development', description: 'Created a responsive login page with Material-UI components.', icon: <CheckCircleOutlineIcon /> },
    { title: 'Registration Form', description: 'Developed a user registration form with input validation and API integration.', icon: <CheckCircleOutlineIcon /> },
    { title: 'Responsive App Bar', description: 'Implemented a dynamic App Bar with a drawer for smaller screens.', icon: <CheckCircleOutlineIcon /> },
    { title: 'User List with CRUD', description: 'Built a user list with options to create, read, update, and delete users.', icon: <CheckCircleOutlineIcon /> },
    { title: 'Theme Management', description: 'Integrated light and dark themes using Material-UI Context.', icon: <CheckCircleOutlineIcon /> },
];

const ProjectShowcase = () => {
    const theme = useTheme();

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
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
        <Box sx={{ px: { xs: 2, md: 14 }, py: 6 }}>
            <Typography variant="h4" sx={{ marginBottom: 4, textAlign: 'center', fontWeight: 'bold' }}>
                Projects we have done
            </Typography>
            <Slider {...sliderSettings}>
                {projects.map((project, index) => (
                    <Box key={index} sx={{ padding: 2 }}>
                        <Card sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: 2,
                            backgroundColor: theme.palette.background.paper,
                            boxShadow: 3,
                            transition: 'transform 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'scale(1.05)',
                                boxShadow: 6,
                            },
                        }}>
                            <Avatar sx={{ bgcolor: theme.palette.success.main, width: 56, height: 56, marginBottom: 2 }}>
                                {project.icon}
                            </Avatar>
                            <CardContent>
                                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: theme.palette.text.primary }}>
                                    {project.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                                    {project.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default ProjectShowcase;
