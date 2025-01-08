import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Typography } from "@mui/material";
import BlogImg from '../../assest/Blog.avif';

// Blog Data
const blogData = {
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
        },
    ],
};

const LatestPost = () => {
    // Slider settings
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 960, // for medium screens
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600, // for small screens
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
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
                            <Box sx={{ p: 3 }}>
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
