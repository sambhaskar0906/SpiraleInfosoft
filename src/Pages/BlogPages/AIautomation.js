import React from 'react';
import { Box, Typography, Grid, useTheme } from '@mui/material';
import blog1 from '../../assest/BlogImg/blogimg4.jpg';
import LatestPost from '../../Component/Public/LatestPost';

const blogData = {
    blogIntro: "The eCommerce landscape is constantly evolving, and staying competitive means leveraging the latest technologies to enhance efficiency, improve customer experiences, and drive growth. Among these technologies, artificial intelligence (AI) and automation are proving to be game-changers. Here's how you can effectively integrate AI and automation into your eCommerce business and reap the rewards.",
    heading: "Final Thoughts",
    description: "AI and automation are no longer optional for eCommerce businesses looking to thrive in a competitive market. By integrating these technologies into your operations, you can enhance efficiency, improve customer experiences, and drive growth. Start small by automating one aspect of your business, such as customer support or inventory management, and scale up as you see the benefits. The future of eCommerce is smart, efficient, and customer-centric—and AI and automation are leading the way.",
};

// Key features content
const content2 = [
    {
        title: "1. Personalized Shopping Experiences",
        description: [
            "Through the analysis of consumer data, including browsing history, purchase behavior, and preferences, artificial intelligence (AI) empowers eCommerce companies to provide highly customized shopping experiences. Recommender systems, like those used by Amazon or Netflix, use AI algorithms to suggest products or services tailored to individual customers. The line has been rephrased to enhance clarity and impact. share with me if you want any further modifications!",
        ],
    },
    {
        title: "2. Chatbots and Virtual Assistants",
        description: [
            "AI-powered chatbots and virtual assistants can handle customer queries 24/7, providing instant support and improving response times. These tools can answer frequently asked questions, assist with product recommendations, and even process orders. By automating customer support, you reduce operational costs while ensuring a seamless experience for your customers.",
        ],
    },
    {
        title: "3. Smart Inventory Management",
        description: [
            "Inventory management is a critical aspect of eCommerce, and AI can make it more efficient. AI tools can predict demand based on historical sales data, seasonal trends, and market conditions. This ensures you have the right stock levels, minimizing overstocking or stockouts. Additionally, automation can streamline the reordering process, saving time and reducing errors.",
        ],
    },
    {
        title: "4. Dynamic Pricing Strategies",
        description: [
            "AI-driven dynamic pricing models analyze factors such as competitor pricing, demand fluctuations, and customer behavior to optimize pricing in real time. This allows you to stay competitive while maximizing profits. For instance, you can automatically lower prices during off-peak times or increase them for high-demand items.",
        ],
    },
    {
        title: "5. Fraud Detection and Prevention",
        description: [
            "AI algorithms can identify unusual patterns in transactions, such as multiple orders from a single IP address or mismatched billing and shipping information, which may indicate fraudulent activity. By automating fraud detection, you can protect your business and customers without disrupting the shopping experience.",
        ],
    },
    {
        title: "6. Automated Marketing Campaigns",
        description: [
            "AI-powered marketing tools can segment your audience and create targeted campaigns based on customer behavior. Automation platforms can handle email marketing, social media ads, and retargeting campaigns, ensuring the right message reaches the right audience at the right time. This increases conversion rates while simultaneously saving time.",
        ],
    },
    {
        title: "7. Enhanced Customer Insights",
        description: [
            "AI tools can analyze vast amounts of data to provide actionable insights into customer behavior, preferences, and trends. These insights can inform your business strategy, helping you tailor your product offerings, optimize your website, and improve overall customer satisfaction.",
        ],
    },
    {
        title: "8. Streamlined Order Fulfillment",
        description: [
            "Automation in order processing and fulfillment ensures faster and more accurate deliveries. From automatically routing orders to the nearest warehouse to using robots for packing and shipping, automation reduces manual errors and improves efficiency. This is especially crucial for scaling your eCommerce operations.",
        ],
    },
    {
        title: "9. AI-Driven Content Creation",
        description: [
            "AI tools can generate product descriptions, blog posts, and other content tailored to your brand voice. This automation reduces the time spent on content creation and allows you to maintain a consistent online presence.",
        ],
    },
    {
        title: "10. Predictive Analytics for Growth",
        description: [
            "The line has been revised for a smoother and more engaging flow.If there is anything else you would like changed, please let me know. By understanding what products are likely to be in demand, you can plan your inventory, marketing campaigns, and pricing strategies accordingly. You can maintain your competitive edge by taking this proactive strategy.",
        ],
    },
];

const AIautomation = () => {
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
                    <span>How to   </span>
                    <span style={{ color: '#ff4156' }}>Leverage AI and Automation  </span>
                    <span>for Your eCommerce Business</span>
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
                        {[
                            ...(content.description || [])
                        ].map((desc, idx) => (
                            <Typography key={idx} variant="h5" mb={3}>
                                {desc}
                            </Typography>
                        ))}
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

export default AIautomation;
