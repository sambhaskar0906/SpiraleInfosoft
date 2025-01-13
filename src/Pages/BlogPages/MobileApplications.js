import { Box, Grid, Stack, Typography, useTheme } from '@mui/material';
import React from 'react';
import blog1 from '../../assest/BlogImg/mobile.jpg';
import { FaRegHandPointRight } from "react-icons/fa";
import LatestPost from '../../Component/Public/LatestPost';

const blogData = {
    blogIntro: "In today’s digital age, mobile applications have become an integral part of our daily lives. From social networking to shopping, learning to working, apps provide seamless solutions and enhance user experiences. But what exactly is mobile application development, and why is it so crucial in our tech-driven world? Let’s dive deep into understanding this transformative domain.",
    heading: "Conclusion",
    description: "Mobile application development is more than just building apps; it’s about creating experiences that add value to users’ lives and drive business growth. Whether you’re a startup looking to make a mark or an established brand aiming to expand your digital presence, a well-crafted mobile app is a powerful tool.",
};

const content2 = [
    {
        title: "Understanding Mobile Application Development",
        description: [
            "Mobile application development is the process of designing, creating, and deploying software applications that run on mobile devices such as smartphones and tablets. These apps are crafted to leverage the unique features and hardware of mobile devices, offering users convenience, efficiency, and functionality on the go.",
        ],
        description1: [
            "Mobile apps are typically developed for two major platforms: iOS and Android, each requiring distinct approaches and tools for development. Whether you're building a gaming app, an e-commerce solution, or a productivity tool, mobile application development is about crafting experiences that meet user needs and drive engagement."
        ],
    },
    {
        title: "Key Stages of Mobile Application Development",
        description: ["The process of mobile application development can be broken down into several crucial stages:"]
    },
    {
        title: "Types of Mobile Applications",
        description: ["Mobile apps can be classified into three main types based on their development approach:"]
    },
    {
        title: "Tools and Technologies for Mobile Application Development",
        description: ["Mobile application development leverages various tools, frameworks, and programming languages to ensure efficiency and scalability. Here are some popular ones:"]
    },
    {
        title: "Why Businesses Need Mobile Apps",
        description: ["For businesses, mobile apps are no longer optional; they are a necessity. Here’s why:"],
        description1: [
            "Enhanced Customer Engagement: Mobile apps enable businesses to connect with their customers directly through features like push notifications, chatbots, and personalized offers."
        ],
    },
    {
        title: "Role of TechCloak Solutions in Mobile Application Development",
        description: ["At TechCloak Solutions, we specialize in delivering cutting-edge mobile applications tailored to your business needs. Our expertise spans both iOS app development and Android app development, ensuring that your app reaches a broad audience. Here’s what sets us apart:"]
    },
    {
        title: "Emerging Trends in Mobile Application Development",
        description: ["The world of mobile app development is constantly evolving. Here are some trends shaping the future:"]
    },
];

const services1 = [
    {
        title: "Ideation and Research:",
        description: [
            "This is the conceptual phase where the app idea is brainstormed, its feasibility is assessed, and market research is conducted to identify target users and competitors.",
        ],
    },
    {
        title: "Wireframing and Design:",
        description: [
            "Designers create wireframes to map out the app’s interface and user experience. Aesthetic aspects like color schemes, typography, and visual elements are finalized to ensure an engaging and intuitive design.",
        ],
    },
    {
        title: "Development:",
        description: [
            "During this phase, developers code the app’s functionality using programming languages and frameworks suited for the platform. For iOS app development, technologies like Swift or Objective-C are commonly used, while Android app development often employs Java or Kotlin.",
        ],
    },
    {
        title: "Testing:",
        description: [
            "Rigorous testing is performed to identify and fix bugs, optimize performance, and ensure the app runs smoothly across different devices and operating systems.",
        ],
    },
    {
        title: "Deployment and Launch:",
        description: [
            "Once the app is tested and refined, it is submitted to app stores like Apple’s App Store or Google Play for distribution. This step also involves creating marketing strategies to attract downloads and users.",
        ],
    },
    {
        title: "Maintenance and Updates:",
        description: [
            "Post-launch, developers continually monitor the app’s performance, address user feedback, and roll out updates to improve features and security.",
        ],
    },
];

const typesData = [
    {
        title: "Native Apps:",
        description: "Native apps are developed specifically for a single platform, such as iOS or Android. They offer superior performance and access to platform-specific features but require separate development efforts for each platform."
    },
    {
        title: "Web Apps:",
        description: "These are essentially websites designed to function as apps on mobile devices. They run on web browsers and do not require installation, but they may have limitations in terms of speed and functionality."
    },
    {
        title: "Hybrid Apps:",
        description: "Combining the best of native and web apps, hybrid apps are built using web technologies like HTML, CSS, and JavaScript but are wrapped in a native shell for deployment. They can run on multiple platforms with minimal code changes."
    },
];

const typesData1 = [
    {
        title: "Integrated Development Environments (IDEs):",
        description: "Android Studio, Xcode"
    },
    {
        title: "Cross-Platform Frameworks: ",
        description: "React Native, Flutter, Xamarin"
    },
    {
        title: "Backend Technologies: ",
        description: "Node.js, Firebase, AWS"
    },
    {
        title: "UI/UX Tools:  ",
        description: "Adobe XD, Sketch, Figma"
    },
];

const typesData2 = [
    {
        title: "Increased Accessibility: ",
        description: " Apps provide users with 24/7 access to services, ensuring convenience and boosting brand loyalty."
    },
    {
        title: "Revenue Generation:  ",
        description: "With in-app purchases, subscription models, and advertisements, mobile apps can be a significant source of income."
    },
    {
        title: "Brand Visibility:  ",
        description: "Having a mobile app enhances a company’s presence in the digital space, making it more recognizable and accessible to customers."
    },
];

const typesData3 = [
    {
        title: "Custom Solutions:",
        description: "We understand that every business is unique. That’s why we craft bespoke mobile apps that align with your goals and resonate with your target audience."
    },
    {
        title: "Expert Team: ",
        description: "Our team of seasoned developers and designers leverages the latest tools and technologies to build high-performance, user-friendly apps."
    },
    {
        title: "Focus on Quality:",
        description: "From ideation to deployment, we maintain rigorous quality standards to deliver apps that excel in functionality and design."
    },

    {
        title: "Innovation-Driven Approach:",
        description: "At TechCloak Solutions, innovation is at the core of what we do. We integrate advanced features and emerging technologies like AI, AR/VR, and IoT to make your app future-ready."
    },
];

const typesData4 = [
    {
        title: "5G Technology:",
        description: "Faster internet speeds will enable more sophisticated apps with real-time features and seamless performance."
    },
    {
        title: "AI and Machine Learning:",
        description: "Apps are becoming smarter with AI-driven personalization, voice assistants, and predictive analytics."
    },
    {
        title: "Internet of Things (IoT):",
        description: "IoT-powered apps are enabling smart home automation, health monitoring, and enhanced connectivity."
    },

    {
        title: "Progressive Web Apps (PWAs):",
        description: "PWAs are gaining traction for their ability to deliver app-like experiences without requiring installation."
    },
];


const MobileApplications = () => {
    const theme = useTheme();

    return (
        <div>
            <Box sx={{ px: { xs: 2, md: 14 }, py: 6 }}>
                <Typography variant='h4' textAlign={'center'} sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 'bold', mb: 3 }}>
                    What is <span style={{ color: '#ff4156' }}>Mobile Application Development?</span>
                </Typography>
                <Grid container spacing={3} sx={{ mb: 6, alignItems: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <div
                            style={{
                                position: 'relative',
                                height: '350px',
                                overflow: 'hidden',
                                borderRadius: '16px',
                                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.5)',
                            }}
                        >
                            <img
                                src={blog1}
                                alt="Blog"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                            <div
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'rgba(0, 0, 0, 0.4)', // Semi-transparent overlay
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#fff',
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                }}
                            >
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 'medium',
                                lineHeight: 1.6,
                                color: '#555',
                                background: 'linear-gradient(to right, #fff, #f9f9f9)',
                                padding: 2,
                                borderRadius: 4,
                                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                                height: '350px',
                                overflow: 'auto',
                            }}
                        >
                            {blogData.blogIntro}
                        </Typography>
                    </Grid>
                </Grid>

                {content2.map((content, index) => (
                    <Box key={index} sx={{ mt: 5 }}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mt: 3, color: theme.palette.hoverAction.hoverDropdown, py: 1 }}>
                            {content.title}
                        </Typography>
                        {content.description.map((desc, idx) => (
                            <Typography key={idx} variant="h5" py={0.5} mb={2}>
                                {desc}
                            </Typography>
                        ))}
                        {content.description1 && content.description1.map((desc, idx) => (
                            <Typography key={idx} variant="h5" py={0.5} mb={2}>
                                {desc}
                            </Typography>
                        ))}

                        {/* Render services1 for "Key Stages of Mobile Application Development" */}
                        {content.title === "Key Stages of Mobile Application Development" && (
                            <Box component="ul" sx={{ p: 0, m: 0, listStyleType: 'none' }}>
                                {services1.map((service, idx) => (
                                    <Box key={idx} mb={2}>
                                        <Stack direction="row" spacing={1.5} mb={1}>
                                            <Box
                                                sx={{
                                                    fontSize: { xs: 15, sm: 15, md: 15 },
                                                    mt: '5px !important'
                                                }}
                                            >
                                                <FaRegHandPointRight />
                                            </Box>
                                            <Typography variant="h6" fontWeight="bold" sx={{ color: theme.palette.hoverAction.hoverDropdown, }}>
                                                {service.title}
                                            </Typography>
                                        </Stack>
                                        <Typography variant="h5">{service.description[0]}</Typography>
                                    </Box>
                                ))}
                            </Box>
                        )}

                        {/* Render typesData for "Types of Mobile Applications" */}
                        {content.title === "Types of Mobile Applications" && (
                            <Box component="ul" sx={{ p: 0, m: 0, listStyleType: 'none' }}>
                                {typesData.map((type, idx) => (
                                    <Box key={idx} mb={2}>
                                        <Stack direction="row" spacing={1.5} mb={1}>
                                            <Box
                                                sx={{
                                                    fontSize: { xs: 15, sm: 15, md: 15 },
                                                    mt: '5px !important'
                                                }}
                                            >
                                                <FaRegHandPointRight />
                                            </Box>
                                            <Typography variant="h6" fontWeight="bold" sx={{ color: theme.palette.hoverAction.hoverDropdown, }}>
                                                {type.title}
                                            </Typography>
                                        </Stack>
                                        <Typography variant="h5">{type.description}</Typography>
                                    </Box>
                                ))}
                            </Box>
                        )}

                        {/* Render typesData1 for "Types of Mobile Applications" */}
                        {content.title === "Tools and Technologies for Mobile Application Development" && (
                            <Box component="ul" sx={{ p: 0, m: 0, listStyleType: 'none' }}>
                                {typesData1.map((type, idx) => (
                                    <Box key={idx} mb={2}>
                                        <Stack direction="row" spacing={1.5} mb={1}>
                                            <Box
                                                sx={{
                                                    fontSize: { xs: 15, sm: 15, md: 15 },
                                                    mt: '5px !important'
                                                }}
                                            >
                                                <FaRegHandPointRight />
                                            </Box>
                                            <Typography variant="h6" fontWeight="bold" sx={{ color: theme.palette.hoverAction.hoverDropdown, }}>
                                                {type.title}
                                            </Typography>
                                            <Typography variant="h5">{type.description}</Typography>
                                        </Stack>
                                    </Box>
                                ))}
                            </Box>
                        )}

                        {/* Render typesData2 for "Types of Mobile Applications" */}
                        {content.title === "Why Businesses Need Mobile Apps" && (
                            <Box component="ul" sx={{ p: 0, m: 0, listStyleType: 'none' }}>
                                {typesData2.map((type, idx) => (
                                    <Box key={idx} mb={2}>
                                        <Stack direction="row" spacing={1.5} mb={1}>
                                            <Box
                                                sx={{
                                                    fontSize: { xs: 15, sm: 15, md: 15 },
                                                    mt: '5px !important'
                                                }}
                                            >
                                                <FaRegHandPointRight />
                                            </Box>
                                            <Typography variant="h6" fontWeight="bold" sx={{ color: theme.palette.hoverAction.hoverDropdown, }}>
                                                {type.title}
                                            </Typography>
                                        </Stack>
                                        <Typography variant="h5">{type.description}</Typography>
                                    </Box>
                                ))}
                            </Box>
                        )}

                        {/* Render typesData3 for "Types of Mobile Applications" */}
                        {content.title === "Role of TechCloak Solutions in Mobile Application Development" && (
                            <Box component="ul" sx={{ p: 0, m: 0, listStyleType: 'none' }}>
                                {typesData3.map((type, idx) => (
                                    <Box key={idx} mb={2}>
                                        <Stack direction="row" spacing={1.5} mb={1} >
                                            <Box
                                                sx={{
                                                    fontSize: { xs: 15, sm: 15, md: 15 },
                                                    mt: '5px !important'
                                                }}
                                            >
                                                <FaRegHandPointRight />
                                            </Box>
                                            <Typography variant="h6" fontWeight="bold" sx={{ color: theme.palette.hoverAction.hoverDropdown, }}>
                                                {type.title}
                                            </Typography>
                                        </Stack>
                                        <Typography variant="h5">{type.description}</Typography>
                                    </Box>
                                ))}
                            </Box>
                        )}

                        {/* Render typesData4 for "Types of Mobile Applications" */}
                        {content.title === "Emerging Trends in Mobile Application Development" && (
                            <Box component="ul" sx={{ p: 0, m: 0, listStyleType: 'none' }}>
                                {typesData4.map((type, idx) => (
                                    <Box key={idx} mb={2}>
                                        <Stack direction="row" spacing={1.5} mb={1} >
                                            <Box
                                                sx={{
                                                    fontSize: { xs: 15, sm: 15, md: 15 },
                                                    mt: '5px !important'
                                                }}
                                            >
                                                <FaRegHandPointRight />
                                            </Box>
                                            <Typography variant="h6" fontWeight="bold" sx={{ color: theme.palette.hoverAction.hoverDropdown, }}>
                                                {type.title}
                                            </Typography>
                                        </Stack>
                                        <Typography variant="h5">{type.description}</Typography>
                                    </Box>
                                ))}
                            </Box>
                        )}
                    </Box>
                ))}

                <Box sx={{ my: { xs: 2, md: 5 } }}>
                    <Typography variant='h4' mb={2} fontWeight={'bold'}>
                        {blogData.heading}
                    </Typography>
                    <Typography variant='h5'>
                        {blogData.description}
                    </Typography>
                </Box>
            </Box>
            <LatestPost />
        </div>
    );
};

export default MobileApplications;
