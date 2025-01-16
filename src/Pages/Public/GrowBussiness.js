import React from 'react'
import software from '../../assest/Banner/software.webp';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import Growimg from '../../assest/grow.jpg'
import Slider from '../../Component/Public/Slider'
import image1 from '../../assest/grow1.svg'
import image2 from '../../assest/grow2.svg'
import image3 from '../../assest/grow3.svg'

const GrowBussiness = () => {
    const theme = useTheme();

    const contentData = {
        subtitile: 'Stunning websites & applications',
        title: 'Web Development SERVICES',
        description: 'TCSPL is a reputed Web Design and Development company in India. With a team of skilled developers, designers, and strategists, we transform your vision into a dynamic reality. Whether you are a startup seeking to establish your online presence or an established enterprise aiming to elevate your digital capabilities, we can be your trusted partner in shaping the future of web development. Explore our diverse range of web development services and let us embark on a journey to redefine your online identity.',
        subtitle1: 'How we do it',
        title1: 'Development Work Process',
        subtitle2: 'Empowering Your Web Identity',
        title2: 'Web Design & Development Company in India',
        description1: 'At TCSPL, we are blessed with top quality and dedicated team, rooted in deep understanding of technology and design. We embark on a mission to reshape the digital landscape with a belief that every pixel, every code line, and every user interaction matter. Our journey started with a vision to bridge the gap between aesthetics and functionality, offering our clients a seamless blend of captivating design and robust development. With a passion for crafting exceptional online experiences, we can be your dedicated partner on the journey to digital transformation. Hiring the services of a proficient website development company in India lets you develop a notable, attractive and performance driven website. We at TCSPL, not only build your website user-friendly but also offer end-to-end solution from launch and beyond. We develop complex, database-driven, customized websites with an ease.',
        description2: 'We thrive on challenges, turning them into opportunities to push the boundaries of what is possible. Our approach revolves around collaboration, innovation, and unwavering dedication. From conceptualization to execution, we work closely with you to transform your ideas into tangible digital realities. Our team of skilled designers and developers meticulously crafts each project, ensuring pixel-perfect designs, flawless code, and optimal performance. Our expertise may assist you with making profoundly value-added web portal solutions tweaked by the tailor-made requirements of the business. Our web portals can ceaselessly improve and expand the services by combination upcoming new modules with changes of the tastes of the end-users, as well as trends of the technology.',
    };

    const data = [
        {
            imgSrc: image1, // Imported image
            title: 'Planning & Wireframing',
            description: 'Understand the client goals, target audience and functional requirements for the website. Planning, strategizing, and envisioning the website structure, content, and functionality.'
        },
        {
            imgSrc: image2,
            title: 'Design & Development',
            description: 'Creating visually appealing and cohesive design reflecting the brand identity while ensuring a user-centric interface, responsive layout, technology features.',
        },
        {
            imgSrc: image3,
            title: 'Deployment',
            description: 'Conduct comprehensive testing, including functionality, cross-browser compatibility, responsiveness, and deploy the website to the live server.',
        },
    ];


    return (
        <div>
            <Box sx={{
                width: '100%',
                height: '60vh',
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
                <Typography variant="h3" textAlign="center" color="white" sx={{
                    zIndex: 2, fontWeight: 'bold', animation: 'fadeIn 2s ease-in-out',
                    '@keyframes fadeIn': {
                        from: { opacity: 0 },
                        to: { opacity: 1 },
                    },
                    letterSpacing: '0.05em',
                }}>
                    Web <span style={{ color: 'yellow' }}>Design & Development</span>
                </Typography>
            </Box>

            <Box sx={{ px: { xs: 2, md: 14, lg: 14 }, py: { xs: 2, md: 8 } }}>
                <Grid container spacing={4}>
                    {/* Left Side: Image */}
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src={Growimg}
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
                        <Typography variant='body1' sx={{ color: '#008080', fontSize: '14px' }}>{contentData.subtitile}</Typography>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                            Web{' '}
                            <Box
                                component="span"
                                sx={{
                                    color: '#ff4156', // Change this to your desired color
                                }}
                            >
                                Development SERVICES
                            </Box>
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ fontSize: '17px' }}>
                            {contentData.description}
                        </Typography>
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        mt: 4,
                        py: 2,
                        textAlign: 'center'
                    }}
                >
                    <Typography variant='body1' mt={4} sx={{ color: '#008080', fontSize: '16px' }}>{contentData.subtitle1}</Typography>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                        Development Work{' '}
                        <Box
                            component="span"
                            sx={{
                                color: '#ff4156', // Change this to your desired color
                            }}
                        >
                            Process
                        </Box>
                    </Typography>
                    <Grid container spacing={2} py={5}>
                        {data.map((item, index) => (
                            <Grid item xs={12} sm={4} key={index}>
                                <Box sx={{ textAlign: 'center' }}>
                                    <Box
                                        component="img"
                                        src={item.imgSrc}
                                        alt={item.title}
                                        sx={{
                                            width: '100%',
                                            maxWidth: '150px',
                                            margin: '0 auto',
                                            borderRadius: '8px',
                                            height: '100px'
                                        }}
                                    />
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            mt: 2,
                                            fontWeight: 'bold',
                                            color: '#333',
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            mt: 1,
                                            color: '#555',
                                        }}
                                    >
                                        {item.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box>
                    <Typography variant='body1' mt={4} mb={1} sx={{ color: '#008080', fontSize: '16px' }}>{contentData.subtitle2}</Typography>
                    <Typography variant='h4' fontWeight={'bold'}>{contentData.title2}</Typography>
                    <Typography variant='body2' py={1}>{contentData.description1}</Typography>
                    <Typography variant='body2' py={1}>{contentData.description2}</Typography>
                </Box>
            </Box>
            <Slider />
        </div >
    )
}

export default GrowBussiness;
