import React, { useRef } from 'react';
import { Parallax } from 'react-parallax';
import {
    Box,
    Container,
    Typography,
    Grid,
    Paper,
    Avatar,
    Divider,
    useTheme,
    Button,
    Stack,
    IconButton,
} from '@mui/material';
import Header from '../components/Header';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Footer from '../components/Footer';
import ServiceSection from '../utils/ServiceSection';
import AllServices from '../utils/AllServices';
import FAQSection from '../utils/FAQSection';




const stats = [
    { label: 'Years of Excellence', value: '5+' },
    { label: 'Projects Delivered', value: '150+' },
    { label: 'Active Clients', value: '50+' },
    { label: 'Team Members', value: '25+' },
];

const statIcons = [
    <EmojiPeopleIcon color="primary" sx={{ fontSize: 40 }} />,
    <WorkOutlineIcon color="primary" sx={{ fontSize: 40 }} />,
    <FavoriteIcon color="primary" sx={{ fontSize: 40 }} />,
    <Diversity3Icon color="primary" sx={{ fontSize: 40 }} />,
];

const imageSlides = [
    {
        imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        title: 'Innovative Solutions',
        description: 'Leading the way in tech innovations with expert minds.',
        buttonText: 'Learn More',
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=800&q=80',
        title: 'Global Collaboration',
        description: 'Connecting teams around the world for success.',
        buttonText: 'Our Team',
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
        title: 'Customer Success',
        description: 'Delivering impactful results to our clients.',
        buttonText: 'Contact Us',
    },
];


const WhyUsPage = () => {
    const theme = useTheme();
    const splideRef = useRef(null);
    return (
        <Box>
            <Header />

            {/* Hero Section with Fixed Background */}
            <Box
                sx={{
                    height: '90vh',
                    backgroundImage: `url('https://img.freepik.com/premium-photo/view-modern-business-skyscrapers-glass-sky-view-landscape-commercial-building_39665-83.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740')`,
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    color: 'white',
                    textAlign: 'center',
                    px: 2,
                    zIndex: 1,
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: `linear-gradient(180deg, #053d6b, transparent)`,
                        // backgroundColor: 'rgba(5, 61, 107, 0.5)', // dark overlay
                        zIndex: -1,
                    },
                }}
            >
                <Container>
                    <Typography
                        variant="h2"
                        fontWeight="bold"
                    >
                        Why Choose Us
                    </Typography>
                    <Typography
                        variant="h6"
                        mt={3}
                        maxWidth="600px"
                        mx="auto"
                    >
                        Empowering Businesses with Innovative Solutions
                    </Typography>
                </Container>
            </Box>


            {/* why us section */}
            <Box
                sx={{
                    py: 12,
                    px: { xs: 3, md: 10 },
                    backgroundColor: '#f9f9f9',
                    color: 'black',
                    width: '100%',
                }}
            >
                <Grid
                    container
                    spacing={{ xs: 4, md: 6 }}
                    columns={{ xs: 1, sm: 1, md: 12 }}
                    alignItems="center"
                    justifyContent="center"
                >
                    {/* Left Content */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Stack spacing={3}>


                            <Typography
                                variant="h4"
                                color="text.primary"
                                fontWeight="bold"
                                data-aos="fade-up"
                            >
                                Belief Powers Business
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{ color: 'text.secondary', lineHeight: 2 }}
                                data-aos="fade-up"
                            >
                                We're a team of passionate creatives, developers, and strategists committed to delivering meaningful digital solutions. With a deep understanding of design, technology, and user behavior, we bring clarity to complexity and transform ideas into reality. Whether you're a startup looking to make a strong first impression or an established brand aiming to innovate, we offer a collaborative, transparent, and results-driven approach. Our strength lies in creating elegant, scalable, and high-performance digital experiences that truly reflect your brand’s values and goals.
                            </Typography>
                        </Stack>
                    </Grid>

                    {/* Right Image */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            data-aos="zoom-in"
                            component="img"
                            src="https://img.freepik.com/premium-photo/people-sitting-around-table-drinking-coffee-with-page-showing-idea-doodle-with-arrows_1134-78693.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740"
                            alt="Creative Collaboration"
                            sx={{
                                width: '100%',
                                borderRadius: 4,
                                boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
                                objectFit: 'cover',
                                height: { xs: 280, md: 320 },
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>



            <Footer />
        </Box>
    );
};

export default WhyUsPage;