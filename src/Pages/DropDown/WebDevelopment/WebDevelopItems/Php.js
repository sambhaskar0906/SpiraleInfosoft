import React from 'react';
import { Box, Typography, Grid, useTheme } from '@mui/material';
import WebDev from '../../../../assest/Banner/phpbanner.jpg';
import cms from '../../../../assest/DropDown/cms.webp';
import Slider from '../../../../Component/Public/Slider';
import OurServicesItem from '../../../../Component/Public/OurServicesItem';

const Php = () => {
    const theme = useTheme();

    const content = {
        title: "PHP Development Company in India",
        description: [
            "TCSPL is a PHP Development Company, based in Noida. We provide php development services that are very cost effective.You can hire developers, having great experience and expertise in the given field.",
            "Our team of developers have a great command over the php frameworks such as Codeigniter and Laravel. We provide custom php development services to our clients, as every project comes with different requirements and expectations. For our client’s business or start-up, our team of developers creates robust, intuitive and efficient CMS’ for them. The team of experienced and dedicated developers allows us to have more speedy and robust PHP application developments without any issues.",
            "We have also delivered many projects globally on time. As an emerging Php Development Company, our prime focus is always on the quality of the products that we deliver to our clients, whether it be any app or website. We make sure that it serves the purpose of being productive to our client and their business. We ensure that the solutions we provide to our clients actually meet up to their requirements and expectations."
        ]
    };

    const content1 = {
        title: "Being a php development company, we provide a whole life cycle of php application development",
        description: [
            "We provide high performing, full featured, scalable web applications and php development services using a wide range of frameworks for php such as CodeIgniter and Laravel."
        ]
    };

    const content2 = {
        title: "Why choose TCSPL for the Web Development Services ?",
        description: [
            "Our PHP Development Company provides services including several phases of production and maintenance so that we can deliver the project on time with no complications."
        ]
    };

    const services = [

        {
            heading: "Custom PHP Development Services",
            description: " Every project comes with different problems or requirements. So, we start each project from scratch and get them through the whole life cycle of a php development.We provide custom codes and solutions that perfectly suit the requirements of the project."
        },
        {
            heading: "Full Stack PHP Development Services",
            description: " We provide both front and back end php application development services to our clients."
        },
        {
            heading: "PHP API Development & Integrations",
            description: " Our team of expert developers is capable of improving functionalities of the web applications by securely extending them with existing and new third party systems or devices."
        },
        {
            heading: "PHP Framework Development :",
            description: " To deliver scalable and flexible PHP applications, our team of developers expertise with the latest php frameworks such as Codeigniter and Laravel."
        },
        {
            heading: "PHP CMS/Platforms Development Services",
            description: " CMS website development platform to build a dynamic and database driven website using MySQL and PHP."
        },
        {
            heading: "PHP Support and Maintenance",
            description: " Our PHP development company also provides services like support and maintenance to ensure the quality and seamless performance of the PHP applications and websites."
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
                    width: '100%',
                    height: '60vh',
                    position: 'relative',
                    backgroundImage: `url(${WebDev})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        zIndex: 1,
                    }}
                />
                <Typography
                    variant="h3"
                    color="white"
                    sx={{
                        zIndex: 2, fontWeight: 'bold', mb: 1, px: 2, animation: 'fadeIn 2s ease-in-out',
                        '@keyframes fadeIn': {
                            from: { opacity: 0 },
                            to: { opacity: 1 },
                        },
                        letterSpacing: '0.05em',
                    }}
                >
                    PHP Development
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

export default Php;
