import React from 'react';
import { Box, Typography, Grid, useTheme, Stack } from '@mui/material';
import WebDev from '../../../assest/DropDown/webdevelop.webp';
import app from '../../../assest/DropDown/app.webp';
import Slider from '../../../Component/Public/Slider';
import OurServicesItem from '../../../Component/Public/OurServicesItem';
import { FaRegHandPointRight } from "react-icons/fa";

const Ecommers = () => {
    const theme = useTheme();

    const content = {
        title: "eCommers Services",
        description: [
            "TCSPL is an emerging software development and maintenance company, based in Noida. Our company provides one of the best eCommerce services in Delhi NCR.",
            "In today’s digital world, everyone is going online. From an entrepreneur to a business tycoon, today everyone is competing online to gain a wide audience and customer base. It is a need of the hour that in order to get your business to the new heights, you also must get your business online.",
            "And to help you in that, we have a dedicated team of certified developers and experts, who will provide you some of the best solutions to boost your business.",
        ]
    };

    const content1 = {
        title: "eCommers Services we Provide",
        description: [
            "We provide a wide range of ecommerce services, ensuring that we fulfill all business requirements and the expectations of the client. Our team of experts and developers will help you to get through all sorts of challenges and issues in an ecommerce business."
        ]
    };

    const content2 = {
        title: "Why Should You Choose us?",
        description: [
            "We are one of the most trusted companies that provide best ecommerce services. Our team of experts is always available to help you in getting your business online and target a wide range of audience."
        ]
    };

    const services = [

        {
            heading: "Consulting",
            description: " As per our client’s business models and requirements, our experts suggest some of the best solutions possible. We guide our clients through all kinds of research required to set up an ecommerce business."
        },
        {
            heading: "Business Optimazation",
            description: " To transform any regular business to an ecommerce business, their workflow and strategies are revised for better performance."
        },
        {
            heading: "User Interface",
            description: "For an ecommerce business, having a website or an app with great UI UX designs, giving that attractive and engaging look to the web app is the most important thing."
        },
        {
            heading: "Integration",
            description: " In an ecommerce business, seamless integrations are the key to a successful run in the market. The stronger your integrations are, the better your web app will perform."
        },
        {
            heading: "Marketing",
            description: "To make any business successful or recognized by the audience, an important role is played by its marketing strategies. Our experts will help you in targeting a wide range of customers by integrating the best suited technology for your business. Through SEO marketing, Social media marketing, Email marketing, Content marketing and also using a few other strategies, our team will help you boost your business."
        },
        {
            heading: "Webstore Setup",
            description: "Depending on the type of the ecommerce business, front-end and back-end developments are done"
        },
        {
            heading: "Data Management",
            description: "The information of products listed on the website, their details are provided in the form of image files, printed catalogs or PDFs, all these are managed in a data form so that the details shown to the customers visiting the website are up to date."
        },
        {
            heading: "Surveys",
            description: " To know the market and the targeted customer better, surveys are conducted. From these surveys, the information that is extracted can play a vital role in grabbing a bigger range of audience base and improving our strategies."
        },

    ];

    const services1 = [

        {
            description: "Customer satisfaction has always been our priority and we always aim to offer the best services to our clients."
        },
        {
            description: "We provide business oriented solutions to our clients that directly benefit their business and get them increased engagement rates on their ecommerce websites."
        },
        {
            description: "Our experts pay attention to every minor detail that can help us improve our performance and quality."
        },
        {
            description: "As every project is different from the other, we also treat every project differently, depending on their requirements and client’s expectations. Preparing custom strategies and services to pull out the solutions best suited to the project."
        },
        {
            description: "From us you can hire a lot of highly experienced and certified developers. We have experts and consultants also to suggest you the appropriate solutions."
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <Box
                sx={{
                    position: 'relative',
                    backgroundImage: `url(${WebDev})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '40vh',
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
                        backgroundColor: '#A77DE0',
                        zIndex: -1,
                    },
                }}
            >
                <Typography variant="h3" textAlign="center" color="white" sx={{ zIndex: 2, fontWeight: 'bold' }}>
                    eCommers Services
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
                                            {service.description}
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

export default Ecommers;
