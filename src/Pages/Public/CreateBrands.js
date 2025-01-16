import React from 'react'
import software from '../../assest/Banner/software.webp';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import Growimg from '../../assest/digital-marketing-service.jpg'
import Slider from '../../Component/Public/Slider'
import image1 from '../../assest/grow1.svg'
import image2 from '../../assest/grow2.svg'
import image3 from '../../assest/grow3.svg'

const CreateBrands = () => {
    const theme = useTheme();

    const contentData = {
        subtitile: 'Improve Your Web Presence',
        title: 'Digital Marketing Services',
        description: 'In the fast growing digital and AI driven world, the key to success lies in appearing first with engaging content that translate into tangible results. Leverage the power of strategic and innovative digital marketing services and get desired outcomes. Our digital marketing solutions are a symphony of creativity and strategy, carefully created to compel with your audience searches.From meticulously curating resonant content to devising astute SEO manoeuvres, our bespoke online marketing approach aligns with your brand essence, ensuring resonance across every touch point. We are not just marketers, we are architects of immersive brand narratives that captivate, convert, and foster enduring connections.',
        title1: 'Why Choose TCSPL as Your Digital Marketing Services Agency',
        subtitle2: 'Your Brand Journey, Our Expertise',
        title2: 'Digital Marketing Agency in India',
        description1: 'There are more than 5 billion users using internet worldwide which accounts approx. 64% Of world population and more than 4 billion (approx. 50% world audience) are social media active users. Amid this vast virtual expanse, a multitude of websites claim for attention, creating a competitive battleground for brand recognition on search engines and social media platforms. Here, the question arises: How can your brand ascend this digital ladder and claim the spotlight? We have an answer- As top digital marketing agency in India, we put our best efforts to improve your ROI. We offer our diverse solutions for different business niche and any kind of digital marketing goal. Our digital marketing services comprises of dynamic approach, modern workforce, diverse skill set, reasonable pricing, measurable ROI budget campaigns and experience of more than a decade. We have complete digital growth solutions from organic growth to paid marketing solutions.',
        description2: 'We had helped many <span style="color: #ff4156; font-weight: bold;">businesses to build</span> their presence in the social realm as well as come up on search engine rankings. Discover the spectrum of our <span style="color: #ff4156; font-weight: bold;"> digital marketing solutions</span>, each tailored to benefit a unique facet of the online era.',
        description3: 'We follow adaptive approach as per recent trends and tailored as well as to your brand unique identity. We delve deep into market insights, unravel consumer behaviours, and come out with solutions that drive engagement across diverse digital platforms. Whether it is SEO (search engine optimization) to boost your online visibility, PPC campaigns that deliver immediate impact, or social media strategies (SMM) that spark conversations, we are your partners in progress.',
        subtitle3: 'We are digital marketing company in Delhi with more than a decade of experience and primary focus on goal-oriented website advertising solutions. Choose TSCPL for your brand’s digital growth and get the results beyond expectations.',
    };

    const data = [
        {
            imgSrc: image1, // Imported image
            title: 'Team of experienced',
            description: 'Get effective strategies of digital marketing with specialized skills workforce in various aspects as SEO, PPC, analytics, content creation, graphics, SMM and more.'
        },
        {
            imgSrc: image2,
            title: 'Full-service Solutions',
            description: 'A cohesive approach with complete web solutions from digital marketing, website creation, app creation, content creation, technical SEO under one roof.',
        },
        {
            imgSrc: image3,
            title: 'Personalized approach',
            description: 'Tailored strategies as per industry insights and unique business goals which lead to create effective campaigns.',
        },
        {
            imgSrc: image2,
            title: 'Data-Driven approach',
            description: 'Use Latest marketing tools as Aherfs, Google analytics, Keyword research, plagiarism and grammar checker to data driven results.',
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
                    Digital <span style={{ color: 'yellow' }}> Marketing</span>
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
                                height: '420px',
                                objectFit: 'cover',
                                borderRadius: '8px',
                            }}
                        />
                    </Grid>

                    {/* Right Side: Content */}
                    <Grid item xs={12} md={6}>
                        <Typography variant='body1' sx={{ color: '#008080', fontSize: '14px' }}>{contentData.subtitile}</Typography>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                            Digital{' '}
                            <Box
                                component="span"
                                sx={{
                                    color: '#ff4156', // Change this to your desired color
                                }}
                            >
                                Marketing Services
                            </Box>
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ fontSize: '17px' }}>
                            {contentData.description}
                        </Typography>
                    </Grid>
                </Grid>
                <Typography variant='h6' color="text.secondary" sx={{ fontSize: '17px' }}>{contentData.description3}</Typography>
                <Box
                    sx={{
                        mt: 4,
                        py: 2,
                    }}
                >
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center' }}>
                        Why Choose TCSPL Your{' '}
                        <Box
                            component="span"
                            sx={{
                                color: '#ff4156', // Change this to your desired color
                            }}
                        >
                            Digital Marketing Services
                        </Box>
                        {' '} Agency
                    </Typography>
                    <Typography variant='body2' fontSize={'17px'} color="text.secondary" mb={2}>{contentData.subtitle3}</Typography>
                    <Grid container spacing={2} py={5}>
                        {data.map((item, index) => (
                            <Grid item xs={12} sm={3} key={index}>
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
                    <Typography variant='body1' mt={4} mb={1} sx={{ color: '#008080', fontSize: '16px', textAlign: 'center' }}>{contentData.subtitle2}</Typography>
                    <Typography variant='h4' textAlign={'center'} fontWeight={'bold'} mb={2}>{contentData.title2}</Typography>
                    <Typography variant='body2' py={1} fontSize={'17px'} color="text.secondary">{contentData.description1}</Typography>
                    <Typography
                        variant="body2"
                        py={1}
                        fontSize="17px"
                        color="text.secondary"
                        dangerouslySetInnerHTML={{ __html: contentData.description2 }}
                    />
                </Box>
            </Box>
            <Slider />
        </div >
    )
}

export default CreateBrands;
