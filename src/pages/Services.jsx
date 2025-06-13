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


const Services = () => {
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
                        What We Do
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
                    py: 10,
                    px: { xs: 3, md: 10 },
                    backgroundColor: '#fff',
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
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography
                            variant="h4"
                            gutterBottom
                            color='primary'
                            sx={{ fontWeight: 'bold', mb: 3 }}
                            data-aos='fade-up'
                        >
                            Belief Powers Business
                        </Typography>

                        <Typography
                            data-aos='fade-up'
                            variant="body1"
                            sx={{ color: 'text.secondary', lineHeight: 2, mb: 2 }}
                        >
                            We are a passionate team of creatives, designers, and developers dedicated
                            to building impactful digital experiences. With a focus on innovation and
                            collaboration, we help businesses bring their vision to life with cutting-edge
                            technology and clean design.
                        </Typography>


                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            data-aos='fade-up'
                            component="img"
                            src="https://img.freepik.com/premium-photo/people-sitting-around-table-drinking-coffee-with-page-showing-idea-doodle-with-arrows_1134-78693.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740"
                            alt="Company Team"
                            sx={{
                                width: '100%',
                                borderRadius: 3,
                                boxShadow: 0,
                                objectFit: 'cover',
                                height: { xs: 280, md: 300 },
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>

            <ServiceSection />


            <AllServices />

            <Box py={10} px={3} bgcolor={theme.palette.background.paper}>

                <Grid sx={{ display: { xs: 'flex', }, justifyContent: 'space-between', alignItems: 'center', width: "100%", mb: 4 }}>

                    <Typography variant="h5" fontWeight="bold">
                        Get to know us better
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            gap: 2,
                        }}
                    >
                        <IconButton
                            onClick={() => splideRef.current?.splide?.go('<')}
                            sx={{
                                backgroundColor: 'rgba(0,0,0,1)',
                                color: 'white',
                                '&:hover': { backgroundColor: 'rgba(0,0,0,1)' },
                            }}
                        >
                            <ArrowBack />
                        </IconButton>
                        <IconButton
                            onClick={() => splideRef.current?.splide?.go('>')}
                            sx={{
                                backgroundColor: 'rgba(0,0,0,1)',
                                color: 'white',
                                '&:hover': { backgroundColor: 'rgba(0,0,0,1)' },
                            }}
                        >
                            <ArrowForward />
                        </IconButton>
                    </Box>
                </Grid>
                <Splide
                    ref={splideRef}
                    options={{
                        type: 'loop',
                        perPage: 3,
                        perMove: 1,
                        gap: '1rem',
                        breakpoints: {
                            2000: { perPage: 4 },
                            1024: { perPage: 3 },
                            640: { perPage: 1 },
                        },
                        arrows: false,
                        pagination: true,
                        autoplay: false,
                        pauseOnHover: true,
                    }}
                    // hasTrack={false}
                    aria-label="Image carousel with overlay"
                >

                    {imageSlides.map(({ imageUrl, title, description, buttonText }, idx) => (
                        <SplideSlide key={idx}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    height: 450,
                                    borderRadius: 3,
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    boxShadow: 3,
                                    '&:hover img': {
                                        transform: 'scale(1.1)',
                                        transition: 'transform 0.5s ease',
                                    },
                                    '&:hover .overlay': {
                                        backgroundColor: 'rgba(0,0,0,0.55)',
                                        transition: 'background-color 0.5s ease',
                                    },
                                }}
                            >
                                {/* Background Image */}
                                <Box
                                    component="img"
                                    src={imageUrl}
                                    alt={title}
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease',
                                        display: 'block',
                                    }}
                                />

                                {/* Overlay with dim background */}
                                <Box
                                    className="overlay"
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        bgcolor: 'rgba(0, 0, 0, 0.4)',
                                        color: 'white',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-end',  // move text & button to bottom
                                        alignItems: 'start',
                                        textAlign: 'left',
                                        px: 3,
                                        pb: 3, // padding bottom for spacing
                                    }}
                                >
                                    <Typography variant="h5" fontWeight="bold" mb={1}>
                                        {title}
                                    </Typography>
                                    <Typography variant="body2" mb={3} sx={{ maxWidth: 250 }}>
                                        {description}
                                    </Typography>
                                    <Button
                                        endIcon={<ArrowForward />}
                                        variant="text"

                                        size="small"
                                        sx={{ textTransform: 'uppercase', fontWeight: 'bold', color: "white" }}
                                    >
                                        {buttonText}
                                    </Button>
                                </Box>

                            </Box>
                        </SplideSlide>
                    ))}

                </Splide>

            </Box>

            <Box py={5} px={3} bgcolor='#ffff'>
                <Typography variant="body5" color='primary' mb={4} fontWeight="bold" component='div' textAlign="left" sx={{ ml: { xs: '5%', md: "20%" } }}>
                    Products and Platforms
                </Typography>
                <Typography variant="h4" color='primary' mb={4} textAlign="left" sx={{ maxWidth: 650, borderLeft: "2px solid darkblue", pl: 2, placeSelf: "left", ml: { xs: '5%', md: "20%" }, fontSize: { xs: '2rem', md: "2.5rem" }, letterSpacing: 1 }}>
                    Create a more adaptive organization with our expertise, ecosystem, and solutions.
                </Typography>
                <FAQSection />
            </Box>

            {/* Stats Section */}
            <Box sx={{ py: 10, bgcolor: "white" }} >
                <Container>
                    <Typography variant="h5" color='primary' mb={4} fontWeight="bold" textAlign="left">
                        Numbers You Should Know
                    </Typography>

                    <Splide
                        options={{
                            type: 'loop',
                            perPage: 4,
                            gap: '1.5rem',
                            breakpoints: {
                                1024: { perPage: 4 },
                                640: { perPage: 1 },
                            },
                            autoplay: false,
                            pauseOnHover: true,
                            arrows: false,
                            pagination: true,
                        }}
                        aria-label="Statistics Carousel"
                    >
                        {stats.map((stat, index) => (
                            <SplideSlide key={index}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        height: 350,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        px: 3,
                                        py: 4,
                                        mb: 4,
                                        bgcolor: '#f8f8f8',
                                        borderRadius: 4,
                                        textAlign: 'center',
                                    }}
                                >
                                    {statIcons[index % statIcons.length]}
                                    <Typography
                                        variant="h3"
                                        fontWeight="bold"
                                        color="primary"
                                        mt={2}
                                    >
                                        {stat.value}
                                    </Typography>
                                    <Divider
                                        sx={{
                                            width: 40,
                                            mx: 'auto',
                                            my: 2,
                                            bgcolor: theme.palette.primary.main,
                                            height: 3,
                                            borderRadius: 2,
                                        }}
                                    />
                                    <Typography
                                        variant="subtitle1"
                                        fontWeight={600}
                                        color="text.secondary"
                                    >
                                        {stat.label}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary" mt={1}>
                                        {`Delivering impactful results through innovation.`}
                                    </Typography>
                                </Paper>
                            </SplideSlide>
                        ))}
                    </Splide>
                </Container>
            </Box>


            <Footer />
        </Box>
    );
};

export default Services;