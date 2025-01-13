import React from 'react';
import { Box, Typography, Grid, useTheme, Stack } from '@mui/material';
import blog1 from '../../assest/BlogImg/futureuiux.jpg';
import { FaRegHandPointRight } from "react-icons/fa";
import LatestPost from '../../Component/Public/LatestPost';

const blogData = {
    blogIntro: "As digital experiences continue to evolve at a rapid pace, staying ahead in the world of UI/UX design is more crucial than ever. User expectations are growing, and businesses must keep up by adopting cutting-edge design principles to stay competitive. In this blog, we explore the game-changing UI/UX design trends that are set to define 2025, offering insights into how you can craft exceptional digital experiences.",
    blogIntro1: "At TechCloak Solutions  Pvt. Ltd., we specialize in delivering innovative design solutions tailored to the future needs of businesses. Let's explore the trends transforming the industry.",
    heading: "Final Thoughts",
    description: "The UI/UX landscape in 2025 is set to be defined by innovation, inclusivity, and personalization. By staying informed about these trends and partnering with experts like TechCloak Solutions Pvt. Ltd., businesses can ensure their digital platforms stand out in an increasingly competitive market.",
    heading1: "The Role of TechCloak Solutions Pvt. Ltd. in Shaping the Future of UI/UX",
    description1: "As businesses prepare for the future, embracing these UI/UX trends is vital for delivering exceptional digital experiences. At TechCloak Solutions Pvt. Ltd., we combine creativity, technology, and strategy to help businesses stay ahead of the curve. Our expertise in integrating cutting-edge design trends ensures that your digital platforms are not only visually stunning but also highly functional and user-centric.",
    description2: "Whether you need to redesign your existing interface or develop a new platform from scratch, our team of experts is here to guide you every step of the way. Let us help you craft a future-ready UI/UX solution that aligns with your business goals and user expectations.",
};

// Key features content
const content2 = [
    {
        title: "1. Immersive Experiences with AR and VR",
        description: [
            "Augmented Reality (AR) and Virtual Reality (VR) have been steadily growing in popularity, and 2025 will see these technologies becoming mainstream in UI/UX design. AR and VR enable designers to create immersive experiences that go beyond traditional screen interfaces.",
        ],
    },
    {
        title: "2. AI-Driven Personalization",
        description: [
            "Artificial Intelligence (AI) is revolutionizing personalization in UI/UX design. By analyzing user behavior, AI can provide tailored experiences that feel intuitive and highly relevant. In 2025, AI-driven personalization will be a cornerstone of effective digital design.",
        ],
    },
    {
        title: "3. Voice User Interfaces (VUI)",
        description: [
            "The growing adoption of smart devices has made voice interaction a vital aspect of UI/UX design. Voice User Interfaces (VUIs) enable hands-free interactions, improving accessibility and convenience for users.",
        ],
    },
    {
        title: "4. Neumorphism 2.0",
        description: [
            "Neumorphism, a design trend characterized by soft, tactile UI elements, is evolving into its next iteration. Neumorphism 2.0 focuses on balancing aesthetics with usability, offering visually appealing designs without compromising functionality.",
        ],
    },
    {
        title: "5. Micro-Interactions for Enhanced Engagement",
        description: [
            "Micro-interactions are small, subtle design elements that improve user engagement and provide feedback. In 2025, these interactions will play a bigger role in creating intuitive and delightful user experiences.",
        ],
    },
    {
        title: "6. Dark Mode and Dynamic Themes",
        description: [
            "Dark mode has evolved from a passing trend to a standard feature in contemporary UI design. In 2025, dynamic themes that adapt to user preferences and environmental lighting conditions will gain prominence.",
        ],
    },
    {
        title: "7. Inclusive and Accessible Design",
        description: [
            "As the demand for inclusivity grows, UI/UX design must prioritize accessibility to cater to a diverse audience. Inclusive design ensures that digital platforms are usable by everyone, including people with disabilities.",
        ],
    },
    {
        title: "8. Minimalism with a Purpose",
        description: [
            "Minimalist design continues to dominate, but in 2025, it’s all about purpose-driven minimalism. This trend focuses on reducing clutter while ensuring that every element serves a clear function.",
        ],
    },
    {
        title: "9. Sustainability in Design",
        description: [
            "Sustainability is emerging as a crucial factor in UI/UX design. Designers are focusing on creating digital products that are not only user-friendly but also environmentally conscious.",
        ],
    },
    {
        title: "10. Advanced Data Visualization",
        description: [
            "With the rise of big data, effective data visualization is essential. Advanced data visualization techniques make complex information more digestible and engaging for users.",
        ],
    },
];

// Services data
const services1 = [
    {
        heading: ["Key Applications:"],
        description: ["E-commerce platforms offering virtual try-ons.",
            "Educational tools creating immersive learning environments.",
            "Real estate apps showcasing virtual property tours.",
        ],
    },
    {
        heading: ["Examples:"],
        description: ["Content recommendations based on user preferences.",
            "Adaptive interfaces that adjust to individual user needs.",
            "Predictive analytics for enhanced user journeys.",
        ],
        desc1: [
            "Leveraging AI in your design strategy ensures that your platform remains engaging and user-centric.",
        ],
    },
    {
        heading: ["Key Trends:"],
        description: ["Natural Language Processing (NLP) for smoother communication.",
            "Voice-enabled search and navigation.",
            "Integration of VUIs with IoT devices."
        ],
        desc1: ["Businesses should prioritize incorporating voice functionalities into their platforms to enhance user accessibility."],
    },
    {
        heading: ["Features:"],
        description: ["Subtle shadows and highlights for a 3D-like effect.",
            "Minimalistic yet engaging interface elements.",
            "Enhanced focus on accessibility.",
        ],
    },
    {
        heading: ["Examples:"],
        description: ["Animated buttons or icons reacting to user actions.",
            "Subtle vibrations or sounds as feedback.",
            "Progress indicators during loading screens.",
        ],
        desc1: ["Even minor details can significantly enhance user satisfaction."],
    },
    {
        heading: ["Benefits:"],
        description: ["Reduced eye strain in low-light conditions.",
            "Improved battery efficiency for devices.",
            "A sleek, modern aesthetic.",
        ],
        desc1: ["Dynamic themes provide users with a personalized visual experience."],
    },
    {
        heading: ["Best Practices:"],
        description: ["Designing for screen readers and keyboard navigation.",
            "High contrast modes for better readability.",
            "Flexible font sizes and adaptable layouts."
        ],
    },
    {
        heading: ["Characteristics:"],
        description: ["Intuitive navigation with fewer distractions.",
            "Focus on essential content and features.",
            "Clean, uncluttered layouts."
        ],
    },
    {
        heading: ["Strategies:"],
        description: ["Optimizing designs for energy efficiency.",
            "Promoting digital decluttering.",
            "Encouraging eco-friendly practices through design elements.",
        ],
    },
    {
        heading: ["Key Trends:"],
        description: ["Interactive dashboards for real-time insights.",
            "Use of AR/VR for immersive data representation.",
            "Simplified yet impactful graphical elements."
        ],
    },
];

const FutureUIUX = () => {
    const theme = useTheme();
    return (
        <div>
            {/* Blog Content */}
            <Box sx={{ px: { xs: 2, md: 14 }, py: 6 }}>
                <Typography
                    variant="h4"
                    sx={{
                        mb: 5,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        color: '#333',
                        letterSpacing: 1.2,
                    }}
                >
                    <span>The Future of UI/UX:  </span>
                    <span style={{ color: '#ff4156' }}> Game-Changing </span>
                    <span>Trends for 2025</span>
                </Typography>

                <Grid container spacing={3} sx={{ mb: 6, alignItems: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <div
                            style={{
                                height: '350px',
                                overflow: 'hidden',
                                borderRadius: '16px',
                                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.5)',
                                position: 'relative',
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
                                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                    borderRadius: '16px',
                                }}
                            />
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
                <Typography variant='h5' py={0.8}>
                    {blogData.blogIntro1}
                </Typography>

                {content2.map((content, index) => (
                    <Box key={index} sx={{ mt: 5 }}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 'bold',
                                mt: 3,
                                color: theme.palette.hoverAction.hoverDropdown,
                                py: 1,
                            }}
                        >
                            {content.title}
                        </Typography>
                        {content.description.map((desc, idx) => (
                            <Typography key={idx} variant="h5" py={0.5} mb={3}>
                                {desc}
                            </Typography>
                        ))}
                        <Box component="ul" sx={{ p: 0, m: 0, listStyleType: 'none' }}>
                            <Typography variant="h5" fontWeight="bold" mb={2}>
                                {services1[index]?.heading}
                            </Typography>
                            {services1[index]?.description?.map((service, idx) => (
                                <Stack direction="row" spacing={2} key={idx} mb={2}>
                                    <Box
                                        sx={{
                                            fontSize: { xs: 15, sm: 15, md: 15 },
                                            mt: '5px !important'
                                        }}
                                    >
                                        <FaRegHandPointRight />
                                    </Box>
                                    <Typography variant="h5">{service}</Typography>
                                </Stack>
                            ))}
                            {services1[index]?.desc1 && (
                                <Typography variant="h5" mt={2}>
                                    {services1[index].desc1}
                                </Typography>
                            )}
                        </Box>
                    </Box>
                ))}

                <Box sx={{ my: { xs: 2, md: 5 } }}>
                    <Typography variant="h4" mb={2} fontWeight="bold" sx={{ color: theme.palette.hoverAction.hoverDropdown, }}>
                        {blogData.heading1}
                    </Typography>
                    <Typography variant="h5" py={0.5}>{blogData.description1}</Typography>
                    <Typography variant="h5" py={0.5}>{blogData.description2}</Typography>
                </Box>

                <Box sx={{ my: { xs: 2, md: 5 } }}>
                    <Typography variant="h4" mb={2} fontWeight="bold" sx={{ color: theme.palette.hoverAction.hoverDropdown, }}>
                        {blogData.heading}
                    </Typography>
                    <Typography variant="h5">{blogData.description}</Typography>
                </Box>
            </Box>
            <LatestPost />
        </div>
    );
};

export default FutureUIUX;
