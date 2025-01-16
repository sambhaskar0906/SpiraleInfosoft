import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button, Chip, useTheme, TextField, Stack } from '@mui/material';
import BlogImg from '../../assest/Banner/Blog.png';
import image from '../../assest/BlogImg/blogimg.jpg';
import blog1 from '../../assest/BlogImg/blogimg2.jpg';
import blog2 from '../../assest/BlogImg/mobile.jpg';
import future from '../../assest/BlogImg/futureuiux.jpg';
import Blogimg3 from '../../assest/BlogImg/AIML.jpg'
import Blogimg4 from '../../assest/BlogImg/blogimg4.jpg'

const blogs = [
    { id: 1, title: 'Key Features', description: 'Here are the key features every custom application should include in 2025:', category: 'Emerging Trends in Technology', image: image, date: 'Jan 14,2024', link: '/blog/key-features-every-custom-application' },
    { id: 2, title: '10 Essential Tips for Creating', description: 'Explore tips for creating scalable software solutions.', category: 'Software Development Best Practices', image: blog1, date: 'Jan 14,2024', link: '/blog/10-essentail-tips-for-creating-a-scalable-software-solution' },
    { id: 3, title: 'Mobile Application Development', description: 'In today’s digital age, mobile applications have become an integral part of our daily lives.', category: 'Mobile Technology', image: blog2, date: 'Jan 14,2024', link: '/blog/mobile-application-development-blog' },
    { id: 4, title: 'Future UI/UX', description: 'In this blog, we explore the game-changing UI/UX design trends that are set to define 2025', category: 'Design', image: future, date: 'Jan 14,2024', link: '/blog/the-future-of-UI/UX-game-changing-trends' },
    { id: 5, title: 'AI and Machine Learning', description: 'The field of software development is undergoing a transformative revolution driven by AI and ML.', category: 'Artificial Intelligence Technology', image: Blogimg3, date: 'Jan 14,2024', link: '/blog/AI-and-Machine-Learning-are-changing-software-development' },
    { id: 6, title: 'Leverage AI and Automation', description: 'Here how you can effectively integrate AI and automation into your eCommerce business and reap the rewards.', category: 'Ecommerce Technology', image: Blogimg4, date: 'Jan 14,2024', link: '/blog/leverage-AI-and-automation-for-your-eCommerce-business' },
];

const Blog = () => {
    const theme = useTheme();
    const [filter, setFilter] = useState('');
    const [visibleBlogs, setVisibleBlogs] = useState(6);

    const filteredBlogs = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(filter.toLowerCase()) ||
        blog.category.toLowerCase().includes(filter.toLowerCase())
    );

    const handleLoadMore = () => {
        setVisibleBlogs((prev) => prev + 3);
    };

    return (
        <div>
            {/* Blog Header */}
            <Box
                sx={{
                    width: '100%',
                    height: '60vh',
                    position: 'relative',
                    backgroundImage: `url(${BlogImg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
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
                    Welcome to{' '}
                    <Box
                        component="span"
                        sx={{
                            color: 'yellow',
                        }}
                    >
                        Our Blog
                    </Box>
                </Typography>
            </Box>

            {/* Blog Filter */}
            <Box
                sx={{
                    px: { xs: 2, md: 14 },
                    mt: { xs: 2, md: 4 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <TextField
                    variant="outlined"
                    placeholder="Search blogs by title or category..."
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    sx={{
                        width: { xs: '100%', sm: '50%', md: '35%' }, // Adjust width for different screen sizes
                        alignSelf: 'flex-end', // Align to the right side
                        mb: 2,
                        background: 'linear-gradient(135deg, #f5f7fa, #ffffff)',
                        borderRadius: '30px',
                        boxShadow: '3px 3px 8px rgba(0, 0, 0, 0.1), -3px -3px 8px rgba(255, 255, 255, 0.8)',
                        transition: 'all 0.3s ease',
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '30px',
                            pl: '16px',
                            '&.Mui-focused': {
                                boxShadow: `0 0 10px ${theme.palette.primary.main}`,
                            },
                        },
                        '& input::placeholder': {
                            color: theme.palette.text.secondary,
                            fontStyle: 'italic',
                            fontSize: '0.95rem',
                            opacity: 0.85,
                        },
                    }}
                    InputProps={{
                        startAdornment: (
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mr: 1,
                                    color: theme.palette.text.secondary,
                                    '& i': {
                                        fontSize: '1.2rem',
                                        transition: 'transform 0.3s ease',
                                    },
                                }}
                            >
                                <i className="material-icons">search</i>
                            </Box>
                        ),
                    }}
                />

                {filteredBlogs.length === 0 && (
                    <Box
                        sx={{
                            mt: 2,
                            color: theme.palette.text.secondary,
                            fontSize: '1rem',
                            fontStyle: 'italic',
                        }}
                    >
                        No results found for your search.
                    </Box>
                )}
            </Box>

            {/* Blog Content */}
            <Box sx={{ px: { xs: 2, md: 14 }, py: 4, backgroundColor: '#f9f9f9' }}>
                <Grid container spacing={4}>
                    {filteredBlogs.slice(0, visibleBlogs).map((blog) => (
                        <Grid item xs={12} sm={6} md={4} key={blog.id}>
                            <Card
                                sx={{
                                    height: '100%',
                                    borderRadius: 2,
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0 6px 24px rgba(0, 0, 0, 0.15)',
                                    },
                                    overflow: 'hidden',
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'relative',
                                        display: 'inline-block', // Ensures the overlay only affects the image
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={blog.image}
                                        alt={blog.title}
                                        sx={{
                                            height: 200,
                                            transition: 'opacity 0.3s',
                                            '&:hover': {
                                                opacity: 0.9,
                                            },
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black overlay with 50% opacity
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            color: 'white', // Text color
                                            opacity: 0,
                                            transition: 'opacity 0.3s',
                                            '&:hover': {
                                                opacity: 1,
                                            },
                                        }}
                                    >
                                        <Typography variant="h6">{blog.title}</Typography>
                                    </Box>
                                </Box>

                                <CardContent sx={{ position: 'relative', backgroundColor: '#fff' }}>
                                    <Chip
                                        label={blog.category}
                                        sx={{
                                            mb: 2,
                                            backgroundColor: 'linear-gradient(45deg, #ff6f61, #ff8e53)',
                                            fontSize: 12,
                                            textTransform: 'uppercase',
                                            letterSpacing: 1,
                                            borderRadius: 1,
                                        }}
                                    />
                                    <Typography
                                        variant="h6"
                                        fontWeight="bold"
                                        gutterBottom
                                        sx={{
                                            color: 'text.primary',
                                            fontSize: '1.1rem',
                                            lineHeight: 1.5,
                                        }}
                                    >
                                        {blog.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            mb: 2,
                                            fontSize: '0.95rem',
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {blog.description}
                                    </Typography>
                                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                        <Button
                                            variant="contained"
                                            size="small"
                                            sx={{
                                                textTransform: 'none',
                                                backgroundColor: '#ff6f61',
                                                '&:hover': { backgroundColor: '#ff8e53' },
                                                fontWeight: 'bold',
                                                fontSize: '0.85rem',
                                                px: 2,
                                                py: 0.5,
                                            }}
                                            href={blog.link}
                                        >
                                            Read More
                                        </Button>
                                        <Typography variant='body2' fontWeight={'bold'}>
                                            {blog.date}
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                {visibleBlogs < filteredBlogs.length && (
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                        <Button
                            variant="contained"
                            onClick={handleLoadMore}
                            sx={{
                                textTransform: 'none',
                                fontWeight: 'bold',
                                backgroundColor: '#ff6f61',
                                color: '#fff',
                                px: 3,
                                py: 1,
                                fontSize: '1rem',
                                '&:hover': {
                                    backgroundColor: '#ff8e53',
                                },
                            }}
                        >
                            Explore More
                        </Button>
                    </Box>
                )}
            </Box>

        </div>
    );
};

export default Blog;
