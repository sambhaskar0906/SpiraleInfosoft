import React from 'react';
import { Box, Typography, Grid, useTheme, Stack } from '@mui/material';
import WebDev from '../../../assest/DropDown/Api.png';
import web from '../../../assest/DropDown/web.webp';
import Slider from '../../../Component/Public/Slider';
import OurServicesItem from '../../../Component/Public/OurServicesItem';
import { FaRegHandPointRight } from "react-icons/fa";

const ApiService = () => {
    const theme = useTheme();

    const content = {
        title: "API Development & Integration in India",
        description: [
            "TCSPL is the leading and most trusted software development company in Delhi NCR. We provide API development and integration services to extend the seamless functionality between the application and the other third party systems and devices.",
            "Our team of experts and certified developers build robust and scalable codes for API integration services that help the software solution to interface seamlessly with other devices, apps andbusiness systems. Being in this field for a long time, we have gained so much experience and expertise. Our aim is to make your ecommerce journey more smooth and delightful."
        ]
    };

    const content1 = {
        title: "API development and integration services we provide :",
        description: [
            "This development company offers a wide range of services that can help you in the journey of eCommerce business. We provide custom services so that we can deliver a dedicated API to the business system.",
            "To ensure the safe accessibility and security of the API integrations, we also provide encryptions. Microservices consulting is also done to make any application or code more versatile and scalable.",
        ]
    };

    const content2 = {
        title: "Why should you choose us for the API development and integration services ? As said earlier, our company",
        description: [
            "As said earlier, our company, Spirale Infosoft is one of the leading and trusted software development companies, with years of experience and a team of experts and certified developers, we have delivered many complex projects successfully with total client satisfaction.What makes us keep going and performing so well is our team's dedication towards their work and our working ethics.",
            "To ensure the quality and performance of the project, we assign experts and our best developers.We go through several phases and steps just to make sure that we fulfill all the requirementsand meet the client’s expectations."
        ]
    };

    const services = [

        {
            heading: "Custom API development and integration",
            description: "As per the requirements of the client and the business system, our team of developers build API codes that help the software solution to interface seamlessly with other devices, apps and business systems."
        },
        {
            heading: "API Implementation",
            description: "To solve the issues regarding data management, content creation, business logics, communications, microservices and data sharing, we implement external and internal API development solutions."
        },
        {
            heading: "Third party API integration",
            description: "Our team of developers build such an API that allows us to integrate with superior web functionalities to boost the existing business system and application."
        },
        {
            heading: "Cloud API Development",
            description: "To ensure the seamless and safe user access across all mobile devices and platforms, our company also provides the services of cloud API development which includes SaaS, PaaS, IaaS and APIaaS"
        },
        {
            heading: "Microservices consulting",
            description: "To make any application or code more scalable and stronger, our team of developers works on microservices consulting. Breaking down the existing monolithic applications into a suite of microservices, which allows every service to be configured, operated and modified independently as a unique process."
        },
        {
            heading: "API Maintinance And Support",
            description: "For security, we also offer API architecture encryptions, dashboard controls, single sign on capabilities and RBAC modules, to ensure the security and safety as well as the smooth performance."
        }
    ];

    const services1 = [

        {
            heading: "First step",
            heading1: "Discussion",
            description: "Our initial step for any project is to discuss it with the client, get to know about the purpose, the idea behind it and the vision that we are catering to."
        },
        {
            heading: "Second step",
            heading1: "Planning",
            description: " How this goal will be achieved and what executions will be made, everything is planned and calculated by the team of experts, which helps in further development processes."
        },
        {
            heading: "Third step",
            heading1: "Developemnt",
            description: " Our team of highly experienced and well certified developers build such robust and scalable codes that makes any application more versatile and productive,keeping in mind all the safety and security measurements."
        },
        {
            heading: "Fourth step",
            heading1: "Testing",
            description: " Before delivering any project, the final output is tested by our dedicated team,bugs are fixed and after going 360, the project is passed for the deployment."
        },
        {
            heading: "Fifth step",
            heading1: "maintinance",
            description: "To ensure that the web app developed, is running securely and smoothly, we also offer maintenance and support services after deployment."
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <Box
                sx={{
                    width: '100%',
                    height: '60vh',
                    position: 'relative',
                    backgroundImage: `url(${WebDev})`, // Ensure the image path is correct
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover', // Ensures the image covers the area
                    backgroundPosition: 'bottom center', // Centers the image both horizontally and vertically
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
                    sx={{
                        zIndex: 2, fontWeight: 'bold', animation: 'fadeIn 2s ease-in-out',
                        '@keyframes fadeIn': {
                            from: { opacity: 0 },
                            to: { opacity: 1 },
                        },
                        letterSpacing: '0.05em',
                    }}
                >
                    API Services
                </Typography>
            </Box>

            {/* Main Content */}
            <Box sx={{ px: { xs: 2, md: 10, lg: 15 }, py: { xs: 2, md: 2 }, mt: 3 }}>
                <Grid container spacing={8}>
                    {/* Left Section */}
                    <Grid item xs={12} md={8}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <img src={web} alt="Web Development" style={{ borderRadius: '20px', marginBottom: '1rem' }} />
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
                                {services1.map(({ heading, heading1, description }, index) => (
                                    <Box key={index} mb={2}>
                                        <Typography variant="body2" component="div" mb={1}>
                                            <strong>{heading}</strong>
                                        </Typography>
                                        <Stack direction="row" spacing={2}>
                                            <Box>
                                                <FaRegHandPointRight fontSize={15} />
                                            </Box>
                                            <Typography variant="body2">
                                                <strong>{heading1}:</strong> {description}
                                            </Typography>
                                        </Stack>
                                    </Box>
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

export default ApiService;
