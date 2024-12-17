import React from 'react';
import { Box, Typography, Grid, useTheme, Stack } from '@mui/material';
import WebDev from '../../../assest/DropDown/webdevelop.webp';
import cms from '../../../assest/DropDown/cms.webp';
import Slider from '../../../Component/Public/Slider';
import OurServicesItem from '../../../Component/Public/OurServicesItem';
import { FaRegHandPointRight } from 'react-icons/fa';

const WebDesign = () => {
    const theme = useTheme();

    const content = {
        title: "Website Designing Company in India",
        description: [
            "TCSPL is one of the best software development companies in Noida. Our specialization is in web development and designing. Our company provides the best website designing services to our clients. Our team of experts and developers will help you in designing an attractive and engaging website, which will be user friendly as well as business oriented at the same time, so that you can get higher conversion rates."
        ]
    };

    const content1 = {
        title: "Web Designing Services that we provide :",
        description: [
            "Being a well-known website designing company and a team of certified designers and developers, our company is able to provide some of the best website designing services in Noida. Our company and its team work for the user experience and client satisfaction.",
            "We provide a range of web designing services to our clients.",
            "Even in UI/UX design we go through a multiple steps process, so that we can deliver a quality product to the client. At every step we have checkpoints to let the client and our team know  we are heading in the right direction.",
            "The variety of services that we provide in website designing to our clients are :",
        ]
    };

    const services2 = [

        {
            heading: " Website Design Consultation",
        },
        {
            heading: " Website Design Ideas",
        },
        {
            heading: "Complete Website Design",
        },
        {
            heading: "Mobile Responsive Design",
        },
        {
            heading: "Brand Logo Design",
        },
        {
            heading: "eCommerce Website Design",
        }
    ];

    const content2 = {
        title: "Why us ?",
    };

    const services = [

        {
            heading: "Knowing the Project",
            description: " Every project here starts from scratch. Our designers and developers first need to understand the vision of the client and the requirements and needs of their business. Also having a sharp eye on minor details and market trends, our team suggests the best solutions possible, that will definitely make our client’s website stand out and rank at the top."
        },
        {
            heading: "Planning",
            description: "Once all of us agree on the same note after knowing and diving deep into the vision of our client, the next step is to start planning and deciding the best suited technologies and strategies for the project. Which also includes assigning our best designers and developers for the project."
        },
        {
            heading: "Wireframing :",
            description: "Here we create a basic layout of the web design, showing how it is going to look after it is developed.This includes the standard and initial structure of the website"
        },
        {
            heading: "Prototype :",
            description: "This is a step where a design is created, which represents the final user interface of the website."
        },
        {
            heading: "Approval :",
            description: "During the whole process of planning and designing, we maintain a continuous connection with our clients, and once the design is approved and finalized, we proceed to the next step."
        },
        {
            heading: "Development :",
            description: "As per the approved design and requirements of the client, our assigned developers build robust and scalable codes, having great and attractive user interface, giving a delightful experience to the user."
        }
    ];

    const services1 = [
        {
            description: "Our web designing company in Noida is one of the best and leading agencies for offering such services.",
        },
        {
            description: "Our USP is our dedication and passion towards our work, a team of well certified and experienced developers and experts. We provide a huge range of web designing services to our clients. We pay our total attention to each and every, from minor to major detail. Our priority is providing our clients best service and all possible help that we can offer in order to boost their business and their journey online in getting such engagement from users and conversion rate, benefiting their business and meeting their expectations from us."
        },
        {
            description: "The work ethics and authenticity of ours, made us a trusted software development company."
        },
        {
            description: "We have collaborated with a decent number of happy and satisfied clients globally, and have delivered multiple successful and top notch projects worldwide."
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
                        backgroundColor: 'rgba(207, 78, 74, 0.9)',
                        zIndex: -1,
                    },
                }}
            >
                <Typography variant="h3" textAlign="center" color="white" sx={{ zIndex: 2, fontWeight: 'bold' }}>
                    Website Designing
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
                                <Typography key={index} variant="body2" mb={3}>
                                    {desc}
                                </Typography>
                            ))}
                            <Box component="ul" p={0} m={0} mb={2} style={{ listStyleType: 'none' }}>
                                {services2.map((service, index) => (
                                    <Stack direction={'row'} spacing={2} key={index} mb={1}>
                                        <Box>
                                            <FaRegHandPointRight fontSize={15} />
                                        </Box>
                                        <Typography variant="body2">
                                            <strong>{service.heading}:</strong>
                                        </Typography>
                                    </Stack>
                                ))}
                            </Box>
                            <Box component="ul" p={0} m={0} style={{ listStyleType: 'none' }}>
                                {services.map((service, index) => (
                                    <Stack direction={'row'} spacing={2} key={index} mb={1}>
                                        <Box>
                                            <FaRegHandPointRight fontSize={15} />
                                        </Box>
                                        <Typography variant="body2">
                                            <strong>{service.heading}:</strong>{service.description}
                                        </Typography>
                                    </Stack>
                                ))}
                            </Box>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', mt: 3, color: theme.palette.hoverAction.hoverDropdown, py: 1 }}>
                                {content2.title}
                            </Typography>

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

export default WebDesign;
