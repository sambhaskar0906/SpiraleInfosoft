import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button, Chip, useTheme, TextField } from '@mui/material';
import BlogImg from '../../assest/DropDown/Blog.png';
import image from '../../assest/BlogImg/blogimg.jpg';
import blog1 from '../../assest/BlogImg/blogimg2.jpg';
import blog2 from '../../assest/BlogImg/mobile.jpg';

const blogs = [
    { id: 1, title: 'Key Features', description: 'Here are the key features every custom application should include in 2025:', category: 'Emerging Trends in Technology', image: image, link: '/blog/key-features-blog' },
    { id: 2, title: '10 Essential Tips for Creating', description: 'Explore tips for creating scalable software solutions.', category: 'Software Development Best Practices', image: blog1, link: '/blog/essentail-tipes-blog' },
    { id: 3, title: 'Mobile Application Development', description: 'In today’s digital age, mobile applications have become an integral part of our daily lives.', category: 'Mobile Technology', image: blog2, link: '/blog/mobile-application-blog' },
    { id: 4, title: 'Key Features', description: 'Here are the key features every custom application should include in 2025:', category: 'Technology', image: image, link: '/blog/key-features-blog' },
    { id: 5, title: '10 Essential Tips for Creating', description: 'Explore tips for creating scalable software solutions.', category: 'Technology', image: blog1, link: '/blog/essentail-tipes-blog' },
    { id: 6, title: 'Mobile Application Development', description: 'In today’s digital age, mobile applications have become an integral part of our daily lives.', category: 'Technology', image: blog2, link: '/blog/mobile-application-blog' },
    { id: 7, title: 'Key Features', description: 'Here are the key features every custom application should include in 2025:', category: 'Technology', image: image, link: '/blog/key-features-blog' },
    { id: 8, title: '10 Essential Tips for Creating', description: 'Explore tips for creating scalable software solutions.', category: 'Technology', image: blog1, link: '/blog/essentail-tipes-blog' },
    { id: 9, title: 'Mobile Application Development', description: 'In today’s digital age, mobile applications have become an integral part of our daily lives.', category: 'Technology', image: blog2, link: '/blog/mobile-application-blog' },
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
                    sx={{ zIndex: 2, fontWeight: 'bold', mb: 1, px: 2 }}
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
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Search blogs by title or category..."
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    sx={{
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
                            '& .MuiInputAdornment-root': {
                                transition: 'transform 0.3s ease, color 0.3s ease',
                                '& i': {
                                    color: theme.palette.primary.light,
                                },
                                '&:hover i, &.Mui-focused i': {
                                    color: theme.palette.primary.dark,
                                    transform: 'scale(1.2)',
                                },
                            },
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'transparent',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: theme.palette.primary.light,
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: theme.palette.primary.main,
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
            </Box>


            {/* Blog Content */}
            <Box sx={{ px: { xs: 2, md: 14 }, py: 4 }}>
                <Grid container spacing={4}>
                    {filteredBlogs.slice(0, visibleBlogs).map((blog) => (
                        <Grid item xs={12} sm={6} md={4} key={blog.id}>
                            <Card
                                sx={{
                                    height: '100%',
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    '&:hover': { transform: 'scale(1.05)', boxShadow: 3 },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={blog.image}
                                    alt={blog.title}
                                    sx={{ height: 200 }}
                                />
                                <CardContent>
                                    <Chip
                                        label={blog.category}
                                        sx={{
                                            mb: 2,
                                            backgroundColor: theme.palette.primary.main,
                                            color: 'white',
                                            fontWeight: 'bold',
                                        }}
                                    />
                                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                                        {blog.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                        {blog.description}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        sx={{ textTransform: 'none' }}
                                        href={blog.link}
                                    >
                                        Read More
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                {visibleBlogs < filteredBlogs.length && (
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleLoadMore}
                            sx={{ textTransform: 'none' }}
                        >
                            Load More
                        </Button>
                    </Box>
                )}
            </Box>
        </div>
    );
};

export default Blog;
