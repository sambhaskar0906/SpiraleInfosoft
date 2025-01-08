import React from 'react'
import software from '../../assest/software.webp';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import softwareimg from '../../assest/software-dev1.jpg'
import Slider from '../../Component/Public/Slider'

const SoftwareDevelopement = () => {
    const theme = useTheme();

    const contentData = {
        title: 'Software Development Services',
        description: 'Software development is an integral part of today’s business as it aligns seamlessly with unique needs and goals of business. Our software development services cover a wide range of software solutions including desktop applications, custom software, enterprise software, ERP, custom web applications. We offer end-to-end solutions that covers everything from requirement analysis to software development and post development support. Our software services do not restrict to specific industry, but it can be fully customised as per company needs. Investing in customized software development services is not just a technological decision but a strategic one. It is about embracing innovation, adapting to change, and empowering your business to reach new heights.',
        title1: 'What is Software Development?',
        description1: 'Software development is the process of creating computer programs, applications, and systems to perform specific tasks, solve problems, or achieve objectives. It involves a structured approach to designing, coding, testing, and maintaining software to meet the needs of users, businesses, or organizations. Software development process encompasses a wide range of activities and methodologies to create functional and reliable software products. It plays an important role in enabling businesses and individuals to achieve the power of technology for productivity, efficiency, innovation, and problem-solving.',
        title2: 'Software Development Cycle',
        description2: 'Software development is the process of creating computer programs, applications, and systems to perform specific tasks, solve problems, or achieve objectives. It involves a structured approach to designing, coding, testing, and maintaining software to meet the needs of users, businesses, or organizations. Software development process encompasses a wide range of activities and methodologies to create functional and reliable software products. It plays an important role in enabling businesses and individuals to achieve the power of technology for productivity, efficiency, innovation, and problem-solving.',
        title3: 'Software Development Company in India',
        description3: 'With an experience of more than a decade and team of expert developers, TCSPL is one of the best software development companies in Delhi who love with coding and work commitment. Our commitment to quality, agile methodologies, and cost-effectiveness makes us a trusted partner for businesses seeking reliable and scalable software development services. Transform your ideas into reality with our expertise, and experience seamless digital solutions that drive growth and success. As a trusted Software Development Company in India, we specialize in creating innovative software solutions that cater to diverse industries.'
    };

    return (
        <div>
            <Box sx={{
                width: '100%',
                height: '50vh',
                position: 'relative',
                background: `url(${software})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                {/* Overlay Box */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 1,
                    }}
                />
                <Typography variant="h3" textAlign="center" color="white" sx={{ zIndex: 2, fontWeight: 'bold' }}>
                    Software Development
                </Typography>
            </Box>

            <Box sx={{ px: { xs: 2, md: 14, lg: 14 }, py: { xs: 2, md: 8 } }}>
                <Grid container spacing={4}>
                    {/* Left Side: Image */}
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src={softwareimg}
                            alt="Software Development"
                            sx={{
                                width: '100%',
                                height: '400px',
                                objectFit: 'cover',
                                borderRadius: '8px',
                            }}
                        />
                    </Grid>

                    {/* Right Side: Content */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                            {contentData.title}
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ fontSize: '17px' }}>
                            {contentData.description}
                        </Typography>
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        mt: 4,
                        py: 2
                    }}
                >
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                        {contentData.title1}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ fontSize: '17px' }}>
                        {contentData.description1}
                    </Typography>
                </Box>

                <Box
                    sx={{
                        py: 2
                    }}
                >
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                        {contentData.title2}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ fontSize: '17px' }}>
                        {contentData.description2}
                    </Typography>
                </Box>

                <Box
                    sx={{
                        py: 2
                    }}
                >
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                        {contentData.title3}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ fontSize: '17px' }}>
                        {contentData.description3}
                    </Typography>
                </Box>
            </Box>
            <Slider />
        </div>
    )
}

export default SoftwareDevelopement
