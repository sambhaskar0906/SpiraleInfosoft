import { Box, Card, CardContent, Grid, Paper, Stack, Typography, useTheme } from '@mui/material';
import React from 'react';
import { useThemeContext } from '../../App';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import ApiIcon from '@mui/icons-material/Api';
import AppleIcon from '@mui/icons-material/Apple';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const discoveryItems = [
    {
        id: 1,
        title: "Discovery",
        description: "Discover your problem and business requirements.",
        bgColor: "#FFCDD2", // Light red
        color: "#D32F2F",   // Red color for number 01
        icon: <CastForEducationIcon />, // Icon for Discovery
    },
    {
        id: 2,
        title: "Planning",
        description: "Plans and steps to implement the discovered business.",
        bgColor: "#C8E6C9", // Light green
        color: "#388E3C",   // Green color for number 02
        icon: <ApiIcon />, // Icon for Planning
    },
    {
        id: 3,
        title: "Execute",
        description: "Execute new business opportunities and solutions",
        bgColor: "#BBDEFB", // Light blue
        color: "#1976D2",   // Blue color for number 03
        icon: <AppleIcon />, // Icon for Execute
    },
    {
        id: 4,
        title: "Deliver",
        description: "In final step, we test and deliver the product/service to you.",
        bgColor: "#FFF9C4", // Light yellow
        color: "#F57C00",   // Orange color for number 04
        icon: <AcUnitIcon />, // Icon for Deliver
    },
];

const OurWorking = () => {
    // const theme = useThemeContext();
    const theme = useTheme();
    return (
        <Box
            sx={{
                px: { xs: 2, lg: 15, md: 10 },
                py: { xs: 2, md: 3 },
            }}
        >
            <Box textAlign={'center'} py={3}>
                <Typography variant='h5' py={1} sx={{ color: theme.palette.ButtonColor }}>
                    Our Working Process
                </Typography>
                <Typography variant='h4' py={1} fontWeight={'bold'}>
                    We help you in getting your <br /> business to new heights
                </Typography>
            </Box>
            <Grid container spacing={2}>
                {discoveryItems.map((item, index) => (
                    <Grid item xs={12} lg={3} md={4} sm={6} key={item.id}>
                        <Card sx={{ boxShadow: 2, backgroundColor: item.bgColor }}>

                            <Stack direction={'row'} justifyContent={'space-between'}>
                                <Typography sx={{ fontSize: '30px', m: 2 }}>
                                    {item.icon}
                                </Typography>
                                <Typography
                                    variant='h4'
                                    sx={{
                                        color: item.color, // Set the color for each number
                                        backgroundColor: theme.palette.info.deem,
                                        width: '70px',
                                        height: '70px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderBottomLeftRadius: '95%',
                                        ml: 1,
                                    }}
                                >
                                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                                </Typography>
                            </Stack>
                            <CardContent>
                                <Typography variant='h4' fontWeight={'bold'} py={2}>
                                    {item.title}
                                </Typography>
                                <Typography variant='body1'>
                                    {item.description}
                                </Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default OurWorking;
