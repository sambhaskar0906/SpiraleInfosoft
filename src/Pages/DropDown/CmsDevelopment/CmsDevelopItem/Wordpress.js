import React from 'react';
import { Box, Typography, Grid, useTheme } from '@mui/material';
import WebDev from '../../../../assest/DropDown/webdevelop.webp';
import cms from '../../../../assest/DropDown/cms.webp';
import Slider from '../../../../Component/Public/Slider';
import OurServicesItem from '../../../../Component/Public/OurServicesItem';

const WordPress = () => {
    const theme = useTheme();

    const content = {
        title: "Wordpress Development Company in India",
        description: [
            "TCSPL is a well-known web development company, based in Noida. Our priority is to provide a great customer experience to our clients.",
            "We, as a Wordpress development company, ensure that the services provided by us are high in quality and performance.",
            "From the very planning part to the final deployment and delivery, our team of experienced and dedicated developers stays in touch with our clients for better understanding and clarity about the purpose and needs of the project."
        ]
    };

    const content1 = {
        title: "Wordpress Development Services",
        description: [
            "Being a Wordpress development company, we provide you one of the best services in this field that are cost-efficient too. Our team of certified and well-experienced web developers have a great command over platforms like PHP, Laravel, React JS, and many more."
        ]
    };

    const content2 = {
        title: "Why choose TCSPL for the Wordpress Development Services ?",
        description: [
            "Our Wordpress Development Company provides services including several phases of production and maintenance so that we can deliver the project on time with no complications."
        ]
    };

    const services = [

        {
            heading: "Custom Wordpress Development Services",
            description: "Our Wordpress development company and its team of talented and dedicated developers take care of each and every requirement and need of the client and their project. Knowing our client’s requirements, we provide them with well-suited solutions for their business."
        },
        {
            heading: "Enterprise Wordpress Development Services",
            description: "To transform any regular business into an ecommerce business, their workflow and strategies are revised for better performance."
        },
        {
            heading: "Ecommerce Services",
            description: "For an ecommerce business, having a website or an app with great UI/UX designs that are attractive and engaging is the most important thing."
        },
        {
            heading: "Third-party Integration Services",
            description: "In an ecommerce business, seamless integrations are the key to a successful run in the market. The stronger your integrations are, the better your web app will perform."
        },
        {
            heading: "Website Data Migration Services",
            description: "Our experts help you in targeting a wide range of customers by integrating the best-suited technology for your business through strategies like SEO, social media, email, and content marketing."
        },
        {
            heading: "Maintenance",
            description: "Depending on the type of ecommerce business, front-end and back-end developments are done."
        }
    ];

    const services1 = [

        {
            description: "In this phase we get to know the aim and the needs of our clients. Here our developers dive deep to know the vision of our client that will be very helpful in visualizing the idea and executing it."
        },
        {
            description: "Here in this step, a prototype or a wireframe of design is created to get the vision more clearer. Here we also consult with our clients so that we know that we are getting it to the right direction. We create user-friendly interfaces."
        },
        {
            description: "After knowing the aim, understanding the vision and idea of the client, our developers get into the development phase. As per the requirement of the application that is to be developed, we use the most relevant methodology to make it both high quality, high performance and cost efficient to the client."
        },
        {
            description: "This is the final step before delivering the built websites to our clients. Testing and quality check is must, to ensure that our developed website is high end performing and meets up the needs and requirements of our clients."
        },
        {
            description: "This is the final step before delivering the built websites to our clients. Testing and quality check is must, to ensure that our developed website is high end performing and meets up the needs and requirements of our clients."
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
                    WordPress Development
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
                                    <Box component="li" key={index} mb={2}>
                                        <Typography variant="body2">
                                            <strong>{service.heading}:</strong> {service.description}
                                        </Typography>
                                    </Box>
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
                                    <Box
                                        component="li"
                                        key={index}
                                        sx={{ mb: 2 }}
                                    >
                                        <Typography variant="body2">{service.description}</Typography>
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

export default WordPress;
