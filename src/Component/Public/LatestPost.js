import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Typography } from "@mui/material";
import BlogImg from '../../assest/BlogImg/blogimg.jpg';
import BlogImg1 from '../../assest/BlogImg/mobile.jpg';
import BlogImg2 from '../../assest/BlogImg/blogimg2.jpg';

// Blog Data
const blogData = {
    blogPosts: [
        {
            img: BlogImg1,
            title: "Mobile Application Development",
            excerpt: "In today’s digital age, mobile applications have become an integral part of our daily lives.",
            link: "/blog/mobile-application-blog",
        },
        {
            img: BlogImg2,
            title: "10 Essential Tips for Creating",
            excerpt: "Explore tips for creating scalable software solutions.",
            link: "/blog/essentail-tipes-blog",
        },
        {
            img: BlogImg,
            title: "Key Features",
            excerpt: " Here are the key features every custom application should include in 2025:",
            link: "/blog/key-features-blog",
        },
    ],
};

const LatestPost = () => {
    const navigate = useNavigate();

    // Slider settings
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false, // Hide next and previous buttons
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const handleReadMore = (link) => {
        window.scrollTo(0, 0); // Scroll to the top
        navigate(link); // Navigate to the link
    };

    return (
        <Box
            sx={{
                px: { xs: 2, md: 14 },
                py: 5,
                background: 'linear-gradient(to right, #e3f2fd, #ffffff)',
                borderRadius: 4,
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    mb: 5,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: '#1565c0',
                    textShadow: '1px 1px 2px #90caf9',
                }}
            >
                Latest Posts
            </Typography>
            <Slider {...settings}>
                {blogData.blogPosts.map((post, index) => (
                    <Box key={index} sx={{ px: 2 }}>
                        <Box
                            sx={{
                                boxShadow: 4,
                                borderRadius: 2,
                                overflow: 'hidden',
                                background: 'white',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.08)',
                                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                                },
                            }}
                        >
                            <Box
                                component="img"
                                src={post.img}
                                alt={post.title}
                                sx={{
                                    width: '100%',
                                    height: 220,
                                    objectFit: 'cover',
                                }}
                            />
                            <Box sx={{ p: 2 }}>
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: 'bold', mb: 1, color: '#1e88e5' }}
                                >
                                    {post.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ mb: 2, color: 'text.secondary', lineHeight: 1.6 }}
                                >
                                    {post.excerpt}
                                </Typography>
                                <Button
                                    variant="contained"
                                    size="small"
                                    onClick={() => handleReadMore(post.link)} // Call the handler
                                    sx={{
                                        backgroundColor: '#1565c0',
                                        color: '#fff',
                                        '&:hover': {
                                            backgroundColor: '#0d47a1',
                                        },
                                    }}
                                >
                                    Read More
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default LatestPost;
