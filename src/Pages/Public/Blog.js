import { Box, Typography, Button, Grid, useTheme } from '@mui/material';
import React from 'react';
import BlogImg from '../../assest/DropDown/Blog.png';

const blogData = {
    title: "Blog",
    headerContent: "Welcome to Our Blog",
    paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque metus ac turpis vulputate, ut elementum ligula tincidunt. Proin quis orci a nisl fermentum placerat. Integer vehicula, sapien id pretium vehicula, purus ligula scelerisque erat, eu iaculis augue nunc eget metus.",
        "Sed non dapibus nulla. Aenean sit amet metus vitae mi tincidunt tincidunt vel et augue. Donec at nulla id eros bibendum commodo. Nam posuere tortor nec quam lacinia, at dictum magna faucibus.",
        "Curabitur eget libero nec sapien fermentum tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Ut vehicula, nunc a viverra cursus, lorem mauris consequat orci, vitae bibendum purus lorem a nisi."
    ],
    buttonText: "Explore More",
    blogPosts: [
        {
            img: BlogImg,
            title: "How to Start a Blog",
            excerpt: "Learn the basics of starting a successful blog from scratch.",
        },
        {
            img: BlogImg,
            title: "Top Blogging Tips",
            excerpt: "Discover the top tips to grow your blog and reach a wider audience.",
        },
        {
            img: BlogImg,
            title: "Content Creation Strategies",
            excerpt: "Explore effective strategies for creating engaging content.",
        }
    ]
};

const Blog = () => {
    const theme = useTheme();
    return (
        <div>
            {/* Blog Header */}
            <Box
                sx={{
                    width: '100%',
                    height: '50vh',
                    position: 'relative',
                    backgroundImage: `url(${BlogImg})`, // Ensure the image path is correct
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover', // Ensures the image covers the area
                    backgroundPosition: 'center', // Centers the image both horizontally and vertically
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
                    sx={{ zIndex: 2, fontWeight: 'bold' }}
                >
                    {blogData.title}
                </Typography>
            </Box>

            {/* Blog Content */}
            <Box sx={{ px: { xs: 2, md: 14 }, py: 6 }}>
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', textAlign: 'center' }}>
                    <span>Welcome to </span>
                    <span style={{ color: '#ff4156' }}>Our Blog</span>
                </Typography>
                {blogData.paragraphs.map((para, index) => (
                    <Typography key={index} variant="body2" sx={{ mb: 4, lineHeight: 1.8, textAlign: 'justify' }}>
                        {para}
                    </Typography>
                ))}
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ px: 4, py: 1.5, fontSize: '1rem', textTransform: 'none', borderRadius: 2 }}
                    >
                        {blogData.buttonText}
                    </Button>
                </Box>
            </Box>
        </div>
    );
};

export default Blog;
