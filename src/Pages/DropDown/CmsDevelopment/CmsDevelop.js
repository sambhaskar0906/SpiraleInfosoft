import React from 'react';
import { Box, Typography, Grid, useTheme, Stack } from '@mui/material';
import WebDev from '../../../assest/DropDown/webdevelop.webp';
import cms from '../../../assest/DropDown/cms.webp';
import Slider from '../../../Component/Public/Slider';
import OurServicesItem from '../../../Component/Public/OurServicesItem';
import { FaRegHandPointRight } from "react-icons/fa";

const CmsDevelop = () => {
    const theme = useTheme();

    const content = {
        title: "CMS Development Company in India",
        description: [
            "Tcspl is one of the leading software development companies, based in Noida. We provide best CMS development services and also have a team of dedicated developers that actually cares about customer satisfaction and matching their expectations.",
            "With help of our CMS development services, you can get a great amount of engagement rates on your websites, that also reflects in the generated revenues of the company.",
            "We have a good team of certified developers, who give their best and are experts in their respected fields. From web app development to the trends in the market, our developers keep everything in mind while working on a project.",
            "Our company has already delivered multiple projects, globally.",
        ]
    };

    const content1 = {
        title: "CMS Development Services provided by us :",
        description: [
            "Being a CMS development company, we provide a huge range of services to our clients so that they have a great customer experience and an ease in building websites and getting your business to the new heights."
        ]
    };

    const content2 = {
        title: "Best CMS Development Company in Noida",
        description: [
            "Having experienced and certified developers in our team and delivering some of the best services in the field makes our company of the trusted go to places for software developments and other related services.",
            "Our expertise in the development services reflects in the projects that we have delivered to our clients, and their level of satisfaction is unmatchable.",
            "We as an emerging company give our best in matching the customer expectations, delivering great quality products and best services",
        ]
    };

    const services = [

        {
            heading: "Custom CMS Development Services",
            description: "We modify our services for every new project as per their requirements and the needs of their business. We build and create a better quality CMS for the websites, so that the engagement rate on that website rise and our client’s company gains more profit"
        },
        {
            heading: "CMS integration services",
            description: "To introduce more and better features on our client’s website, we integrate CMS with several new and advanced technologies like CRMs and other automation tools and analytics for better results."
        },
        {
            heading: "CMS migration service",
            description: "Our developers always ensure that during migration, they get every aspect included, such as service files, SEO, structured data and URL structures for foolproof updates and migrations. Our CMS development company helps in getting our client’s existing websites migrated"
        },
        {
            heading: "CMS maintenance services",
            description: "After deployment of the final product is done, and in any case if there is some trouble or issue faced by our clients, the team of dedicated developers will be available for you to provide all possible help in fixing the bugs and maintaining the quality and performance of the website."
        },
    ];

    const services1 = [

        {
            heading: "Customer satisfaction :",
            description: " One of our major priorities is customer satisfaction and matching their expectations. Our developers divedeep into the thought process of the client to know the vision and their requirements, providing them best suited solutions that also elevates their business game."
        },
        {
            heading: "Quality Check",
            description: " Our main focus is always on building great quality products with great performance and impact on the business model of the client. Our teamn of developers uses the best suited technology for every project as per their requirements and scope."
        },
        {
            heading: "Range of Services",
            description: "Whether it is about building or developing an app or website, or it is about migrating or maintaining, in every aspect and phase, our team of experts is there to help you with that. We provide every possible service that can make our client’s experience delightful."
        },
        {
            heading: "Business oriented services",
            description: " While giving best quality products with high performance, we also take care of our client’s business model. We give one of the best solutions, when it comes to elevating one’s business through our projects. We design such websites and applications that are user friendly and get you a great amount of engagement rate, while directly benefiting our client’s business."
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
                        backgroundColor: '#0A58CA',
                        zIndex: -1,
                    },
                }}
            >
                <Typography variant="h3" textAlign="center" color="white" sx={{ zIndex: 2, fontWeight: 'bold' }}>
                    CMS Development
                </Typography>
            </Box>

            {/* Main Content */}
            <Box sx={{ px: { xs: 2, md: 10, lg: 15 }, py: { xs: 2, md: 2 }, mt: 3 }}>
                <Grid container spacing={8}>
                    {/* Left Section */}
                    <Grid item xs={12} md={8}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <img src={cms} alt="Web Development" style={{ borderRadius: '20px', marginBottom: '1rem' }} />
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
                                <Typography key={index} variant="body2" mb={3}>
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

export default CmsDevelop;
