import React from 'react';
import { Box, Typography, Grid, useTheme, Stack } from '@mui/material';
import WebDev from '../../../assest/DropDown/appdev.png';
import app from '../../../assest/DropDown/app.webp';
import Slider from '../../../Component/Public/Slider';
import OurServicesItem from '../../../Component/Public/OurServicesItem';
import { FaRegHandPointRight } from "react-icons/fa";

const AppDevlop = () => {
    const theme = useTheme();

    const content = {
        title: "App Development Company in India",
        description: [
            " TCSPL is a well organized and an emerging App development company, based in Noida. ",
            " Our team of highly certified and experienced developers provides you the best solutions and the applications as per the requirements of the",
            "We provide a full cycle of app development processes. Customer satisfaction and meeting their requirements is our priority.Providing our clients, user friendly yet business-oriented apps is our aim. ",
            " Our passion for creating outstanding applications and solutions for our clients is unmatched.",
            "The team developers are capable of delivering complex to complex applications on time with no complaints regarding the quality and the performance of the software.",
            "You can hire developers from our company to get a great customer experience of our app development services.We have already delivered multiple React Native and Native Android / iOS applications that are performing very well and also have great quality.",
        ]
    };

    const content1 = {
        title: "App Development Services",
        description: [
            "As we are an app development company, we provide the whole cycle of app development process, including as many services as possible so that the client gets satisfied."
        ]
    };

    const content2 = {
        title: "Why choose TCSPL for App Development Services ?",
        description: [
            "Being an app development company, all our services are customer oriented. We handle each of the phases of the app development process with such care and dedication.We have dedicated developers for each part.",
            "From its planning to the execution, to its maintenance and support services, our developers are there to help you grow your business. We execute our app development processes in several phases so that we can work on each part of the app development with great detailing:",
        ]
    };

    const services = [

        {
            heading: "Custom App Development Services",
            description: " : Every client comes with a different set of requirements and the business model. We provide each project a specific treatment that suits their business model and requirements the most. We assign developers to the projects having a good knowledge of technologies and crafts required by it."
        },
        {
            heading: " Different technologies ",
            description: "Our team of developers have already worked on multiple languages like React native, Native android app or iOS, they have a great experience in providing such services."
        },
        {
            heading: " Maintenance ",
            description: " We also provide maintenance services to our clients, so that they can have a great experience of working with us. We give all maintenance and support as much as possible from our side."
        },
        {
            heading: "Consulting ",
            description: " One of the most important parts of our services is consulting. Consulting about the business models or designs of the application or anything relevant to the app development process can be helpful at times."
        },
    ];

    const services1 = [

        {
            heading: "Planning ",
            description: "The initial phase of discussion and discovering the requirements of the client and the needs of their business. Here the developer gets to know about the vision and expectation of the client. Ideation part is so important because it is the foundation of next steps and phases in the app development process."
        },
        {
            heading: "Design ",
            description: "Once the idea is locked and finalized with the clients, the next step is designing. For better clarity, protocols are designed, wireframing is done.A good interface can actually affect the engagement rate of any application.UI / UX designs help a lot in getting that approach of user- friendly interfaces."
        },
        {
            heading: "Development ",
            description: "Most crucial of an app development process is coding and its execution. After the approval of designs by the client, developers start coding for the same. We use different modern and advanced technologies best suited for the project.",
        },
        {
            heading: "Quality Check and Testing ",
            description: " Before delivering the final application to the clients, our developers go through every process and step of standard testing. Bugs are fixed and then the product is delivered to the client. We give our best so that we can provide clients with an application that is great in quality and performance."
        },
        {
            heading: "Maintenance ",
            description: " We also provide maintenance services to our clients, so that they can have a great experience of working with us. We give all maintenance and support as much as possible from our side."
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <Box
                sx={{
                    width: '100%',
                    height: '50vh',
                    position: 'relative',
                    backgroundImage: `url(${WebDev})`, // Ensure the image path is correct
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover', // Ensures the image covers the area
                    backgroundPosition: 'center', // Centers the image both horizontally and vertically
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {/* Overlay for better text readability */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity as needed
                        zIndex: 1,
                    }}
                />
                <Typography
                    variant="h3"
                    textAlign="center"
                    color="white"
                    sx={{ zIndex: 2, fontWeight: 'bold' }}
                >
                    App Developemnt
                </Typography>
            </Box>

            {/* Main Content */}
            <Box sx={{ px: { xs: 2, md: 10, lg: 15 }, py: { xs: 2, md: 2 }, mt: 3 }}>
                <Grid container spacing={8}>
                    {/* Left Section */}
                    <Grid item xs={12} md={8}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <img src={app} alt="Web Development" style={{ borderRadius: '20px', marginBottom: '1rem' }} />
                            <Typography variant="h4" sx={{ fontWeight: 'bold', mt: 3, color: theme.palette.hoverAction.hoverDropdown, py: 1 }}>
                                {content.title}
                            </Typography>
                            {content.description.map((desc, index) => (
                                <Typography key={index} variant="body2" py={0.5}>
                                    {desc}
                                </Typography>
                            ))}
                            <Typography variant="h4" sx={{ fontWeight: 'bold', mt: 3, color: theme.palette.hoverAction.hoverDropdown, py: 1 }}>
                                {content1.title}
                            </Typography>
                            {content1.description.map((desc, index) => (
                                <Typography key={index} variant="body2" py={0.5} mb={3}>
                                    {desc}
                                </Typography>
                            ))}
                            <Box component="ul" p={0} m={0} style={{ listStyleType: 'none' }}>
                                {services.map((service, index) => (
                                    <Stack direction={'row'} spacing={2} key={index} mb={2}>
                                        <Box>
                                            <FaRegHandPointRight fontSize={15} />
                                        </Box>
                                        <Typography variant="body2">
                                            <strong>{service.heading}:</strong> {service.description}
                                        </Typography>
                                    </Stack>
                                ))}
                            </Box>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', mt: 3, color: theme.palette.hoverAction.hoverDropdown, py: 1 }}>
                                {content2.title}
                            </Typography>
                            {content2.description.map((desc, index) => (
                                <Typography key={index} variant="body2" py={0.5} mb={3}>
                                    {desc}
                                </Typography>
                            ))}

                            <Box component="ul" sx={{ p: 0, m: 0, listStyleType: 'none' }}>
                                {services1.map((service, index) => (
                                    <Stack direction={'row'} spacing={2} key={index} mb={2}>
                                        <Box>
                                            <FaRegHandPointRight fontSize={15} />
                                        </Box>
                                        <Typography variant="body2">
                                            <strong>{service.heading}:</strong> {service.description}
                                        </Typography>
                                    </Stack>
                                ))}
                            </Box>

                        </Box>
                    </Grid>

                    {/* Right Section */}
                    <Grid item xs={12} md={4} sx={{ position: 'sticky', top: 0, maxHeight: 'calc(100vh - 0vh)', overflowY: 'auto' }}>
                        <OurServicesItem />
                    </Grid>
                </Grid>
            </Box>
            <Slider />
        </>
    );
};

export default AppDevlop;
