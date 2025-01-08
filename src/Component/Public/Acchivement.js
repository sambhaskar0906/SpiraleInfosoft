import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, useTheme } from '@mui/material';

const achievements = [
    { id: 1, title: 35, description: 'years of Experties', suffix: '' },
    { id: 2, title: 750, description: 'IT Professionals', suffix: '+' },
    { id: 3, title: 4000, description: 'Success Stories', suffix: 'K' },
    { id: 4, title: 30, description: 'Industries Covered', suffix: '+' },
];

const Achievement = () => {
    const theme = useTheme();
    const [counters, setCounters] = useState(achievements.map(() => 0));

    useEffect(() => {
        const intervalIds = achievements.map((achievement, index) => {
            const increment = Math.ceil(achievement.title / 100); // Adjust speed by changing denominator
            return setInterval(() => {
                setCounters(prev => {
                    const newCounters = [...prev];
                    if (newCounters[index] < achievement.title) {
                        newCounters[index] = Math.min(newCounters[index] + increment, achievement.title);
                    }
                    return newCounters;
                });
            }, 30); // Adjust interval speed in milliseconds
        });

        return () => {
            intervalIds.forEach(intervalId => clearInterval(intervalId));
        };
    }, []);

    const formatNumber = (value, suffix) => {
        if (suffix === 'K') {
            return `${(value / 1000).toFixed(1)}K`; // Converts to '4K'
        }
        return `${value}${suffix}`;
    };

    return (
        <Box sx={{ px: { xs: 2, md: 14 }, py: 6, background: theme.palette.primary.light }}>
            <Typography variant="h4" textAlign="center" sx={{ mb: { xs: 5, md: 10 } }}>
                Our Achievements
            </Typography>
            <Grid container spacing={4}>
                {achievements.map((achievement, index) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        key={achievement.id}
                        sx={{
                            borderRight: {
                                xs: 'none',
                                sm: index % 2 === 0 && index !== 3 ? `2px solid ${theme.palette.divider}` : 'none',
                                md: index < achievements.length - 1 ? `2px solid ${theme.palette.divider}` : 'none',
                            },
                        }}
                    >
                        <Box
                            sx={{
                                textAlign: 'center',
                                p: 2,
                                borderBottom: {
                                    xs: index < 2 ? `2px solid ${theme.palette.divider}` : 'none',
                                    md: 'none',
                                },
                                mx: { xs: 2 }, // Adds left and right margins
                                pb: { xs: 2 }, // Adds bottom padding for better spacing
                            }}
                        >
                            <Typography
                                variant="h4"
                                sx={{ color: theme.palette.primary.main, mb: 1, fontWeight: 'bold' }}
                            >
                                {formatNumber(counters[index], achievement.suffix)}
                            </Typography>
                            <Typography variant="h6">{achievement.description}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Achievement;
