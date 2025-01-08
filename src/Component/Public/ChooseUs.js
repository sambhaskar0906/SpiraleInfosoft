import React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Typography, Grid, Box, useTheme, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ChooseUs = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const handleButton = () => {
        window.scrollTo(0, 0);
        navigate('/about')
    }

    const features = [
        {
            icon: <ThumbUpIcon sx={{ fontSize: '4rem', color: 'primary.main' }} />,
            title: 'Quality',
            description: 'This slide is 100% editable. Adapt it to your needs and capture your audience\'s attention.',
        },
        {
            icon: <PeopleIcon sx={{ fontSize: '4rem', color: 'primary.main' }} />,
            title: 'Personnel',
            description: 'This slide is 100% editable. Adapt it to your needs and capture your audience\'s attention.',
        },
        {
            icon: <SettingsIcon sx={{ fontSize: '4rem', color: 'primary.main' }} />,
            title: 'Innovation',
            description: 'This slide is 100% editable. Adapt it to your needs and capture your audience\'s attention.',
        },
        {
            icon: <FavoriteIcon sx={{ fontSize: '4rem', color: 'primary.main' }} />,
            title: 'Commitment',
            description: 'This slide is 100% editable. Adapt it to your needs and capture your audience\'s attention.',
        },
    ];

    return (
        <Box sx={{ px: { xs: 2, md: 14, lg: 14 }, py: 6, background: theme.palette.primary.light }}>
            <Typography variant='h4' textAlign={'center'} fontWeight={'bold'} mb={4}>
                Why choose us
            </Typography>
            <Typography variant='h6' textAlign={'center'} mb={4}>
                TechCloak Solutions Pvt. Ltd. is a leading software development and service providing company since 2016, offering a wide range of software development and maintenance services across the globe.
            </Typography>
            <Box>
                <Grid container spacing={3} justifyContent="center">
                    {features.map((feature, index) => (
                        <Grid key={index} item xs={12} sm={6} md={3} sx={{ textAlign: 'center', padding: 2 }}>
                            <Paper
                                elevation={3}
                                sx={{
                                    padding: 4,
                                    borderRadius: 4,
                                    transition: 'transform 0.3s',
                                    '&:hover': { transform: 'scale(1.05)', boxShadow: theme.shadows[6] }
                                }}
                            >
                                {feature.icon}
                                <Typography variant="h5" mb={2} color="text.primary" fontWeight="bold">
                                    {feature.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {feature.description}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box sx={{ textAlign: 'center', mt: 6 }}>
                <Button variant="contained" color="primary" size="large" onClick={handleButton}>
                    Know More
                </Button>
            </Box>
        </Box>
    );
};

export default ChooseUs;
