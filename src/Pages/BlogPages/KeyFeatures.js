import React from 'react';
import { Box, Typography, Grid, useTheme, Stack } from '@mui/material';
import blog1 from '../../assest/BlogImg/blogimg.jpg';
import { FaRegHandPointRight } from "react-icons/fa";
import LatestPost from '../../Component/Public/LatestPost';

const blogData = {
    blogIntro: "In the rapidly evolving digital landscape, businesses are increasingly turning to custom applications to meet their unique needs and stay competitive. As we move into 2025, certain features have become essential for any custom application to deliver value, scalability, and user satisfaction. Here are the key features every custom application should include in 2025:",
    heading: "Conclusion",
    description: "As businesses navigate the challenges and opportunities of 2025, having a robust custom application with these key features is critical. By prioritizing AI integration, cybersecurity, scalability, and user-centric design, your application can deliver exceptional value and keep your business ahead of the competition. Investing in these features today ensures long-term success in an increasingly digital world.",
};

// Key features content
const content2 = [
    {
        title: "1. Artificial Intelligence and Machine Learning",
        description: [
            "AI and ML have transformed the way applications operate, providing personalized user experiences, predictive analytics, and automation. Custom applications in 2025 must incorporate:",
        ],
    },
    {
        title: "2. Cloud Integration",
        description: [
            "With the increasing reliance on cloud-based services, applications must be designed to leverage the cloud for scalability, reliability, and cost-efficiency. Key benefits include:",
        ],
    },
    {
        title: "3. Cross-Platform Compatibility",
        description: [
            "In 2025, users expect applications to work seamlessly across devices and platforms. Ensure your custom application includes:",
        ],
    },
    {
        title: "4. Enhanced Cybersecurity Features",
        description: [
            "With the rise in cyber threats, robust security measures are non-negotiable. Applications should include:",
        ],
    },
    {
        title: "5. User-Centric Design (UX/UI)",
        description: [
            "User experience remains a cornerstone of application success. A custom application must:",
        ],
    },
    {
        title: "6. Real-Time Analytics and Reporting",
        description: [
            "Businesses need insights to make informed decisions. Custom applications should provide:",
        ],
    },
    {
        title: "7. Integration with IoT (Internet of Things)",
        description: [
            "As IoT adoption grows, custom applications should support integration with IoT devices. This allows:",
        ],
    },
    {
        title: "8. Scalability and Flexibility",
        description: [
            "Custom applications must evolve with business needs. Ensure your application:",
        ],
    },
    {
        title: "9. Offline Functionality",
        description: [
            "Users expect applications to work even without an internet connection. Include:",
        ],
    },
    {
        title: "10. Sustainability Features",
        description: [
            "In 2025, sustainability is a growing priority. Custom applications should:",
        ],
    },
];

// Services data
const services1 = [
    {
        description: ["Chatbots and Virtual Assistants for enhanced customer support.",
            "Predictive Analytics to anticipate user behavior and improve decision-making.",
            "Automation Tools to streamline repetitive tasks and boost efficiency.",
        ],
    },
    {
        description: ["Seamless Data Syncing across devices.",
            "Scalable Infrastructure to handle fluctuating workloads.",
            "Enhanced Security through cloud service providers’ advanced protocols.",
        ],
    },
    {
        description: ["Responsive Design to adapt to various screen sizes.",
            "Support for Multiple Operating Systems, such as iOS, Android, and Windows.",
            "Progressive Web App (PWA) Capabilities for app-like experiences on browsers."
        ],
    },
    {
        description: ["Data Encryption to protect sensitive information.",
            "Multi-Factor Authentication (MFA) to enhance login security.",
            "Regular Security Updates to address vulnerabilities promptly.",
        ],
    },
    {
        description: ["Prioritize Intuitive Navigation for ease of use.",
            "Offer Customizable Dashboards tailored to user preferences.",
            "Focus on Accessibility to ensure inclusivity for users with disabilities.",
        ],
    },
    {
        description: ["Dashboards with Real-Time Data for instant updates.",
            "Customizable Reports to meet specific business requirements.",
            "Integration with BI Tools for advanced analytics.",
        ],
    },
    {
        description: ["Data Collection from IoT Devices to improve operations.",
            "Remote Monitoring for enhanced control.",
            "Automated Processes based on IoT data inputs."
        ],
    },
    {
        description: ["Supports Modular Development for easy updates.",
            "Handles Increased User Load as the business grows.",
            "Allows for Feature Expansion without extensive redevelopment."
        ],
    },
    {
        description: ["Offline Data Access with syncing capabilities when reconnected.",
            "Caching Mechanisms for uninterrupted user experience."
        ],
    },
    {
        description: ["Optimize Energy Consumption for efficient resource use.",
            "Promote Paperless Processes to reduce environmental impact.",
            "Integrate with Sustainable Technologies, such as green cloud services."
        ],
    },
];

const KeyFeatures = () => {
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
                    <span>Key Features Every Custom </span>
                    <span style={{ color: '#ff4156' }}>Application </span>
                    <span>Should Include in 2025</span>
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
                            {services1[index]?.description.map((service, idx) => (
                                <Stack direction={'row'} spacing={2} key={idx} mb={2}>
                                    <Box>
                                        <FaRegHandPointRight fontSize={15} />
                                    </Box>
                                    <Typography variant="h5">{service}</Typography>
                                </Stack>
                            ))}
                        </Box>
                    </Box>
                ))}

                <Box sx={{ my: { xs: 2, md: 5 } }}>
                    <Typography variant="h4" mb={2} fontWeight="bold">
                        {blogData.heading}
                    </Typography>
                    <Typography variant="h5">{blogData.description}</Typography>
                </Box>
            </Box>
            <LatestPost />
        </div>
    );
};

export default KeyFeatures;
