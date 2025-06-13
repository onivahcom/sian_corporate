import { useState } from 'react';
import { Box, Typography, Grid, Button, Card, CardMedia, CardContent } from '@mui/material';
import { ArrowBack, ArrowDropDown, ArrowDropUp, ArrowUpward } from '@mui/icons-material';

import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CampaignIcon from '@mui/icons-material/Campaign'; // Digital Marketing
import CloudIcon from '@mui/icons-material/Cloud'; // Cloud Solutions
import SecurityIcon from '@mui/icons-material/Security'; // Cybersecurity
import SpeedIcon from '@mui/icons-material/Speed'; // Performance Optimization
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'; // API Integration
import SmartToyIcon from '@mui/icons-material/SmartToy'; // AI/Chatbot
import InsightsIcon from '@mui/icons-material/Insights'; // Analytics & SEO



const allServices = [
    {
        id: 1,
        title: 'Custom Software Development',
        icon: <DesignServicesIcon fontSize="medium" color="primary" />,
        image: 'https://img.freepik.com/free-photo/futuristic-robot-working-digital-interface_23-2151966679.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740',
    },
    {
        id: 2,
        title: 'Web Application Development',
        icon: <CodeIcon fontSize="medium" color="primary" />,
        image: 'https://img.freepik.com/premium-photo/digital-finance-business-models-using-data-analytics-technology-graph-perceptive-insights_1356430-5311.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740',
    },
    {
        id: 3,
        title: 'Mobile App Development',
        icon: <PhoneIphoneIcon fontSize="medium" color="primary" />,
        image: 'https://img.freepik.com/free-photo/futuristic-robot-working-digital-interface_23-2151966679.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740',
        // No match found in allServices
    },
    {
        id: 4,
        title: 'Software Consulting',
        icon: <CampaignIcon fontSize="medium" color="primary" />,
        image: 'https://img.freepik.com/free-photo/futuristic-robot-working-digital-interface_23-2151966679.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740',
        // No match found
    },
    {
        id: 5,
        title: 'Cloud Solutions & Migration',
        icon: <CloudIcon fontSize="medium" color="primary" />,
        image: 'https://img.freepik.com/free-photo/technology-integrated-everyday-life_23-2151887047.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740',
    },
    {
        id: 6,
        title: 'Software Integration',
        icon: <SecurityIcon fontSize="medium" color="primary" />,
        image: 'https://img.freepik.com/free-photo/futuristic-robot-working-digital-interface_23-2151966679.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740',
        // No match found
    },
    {
        id: 7,
        title: 'API Development & Integration',
        icon: <SpeedIcon fontSize="medium" color="primary" />,
        image: 'https://img.freepik.com/free-photo/futuristic-robot-working-digital-interface_23-2151966679.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740',
        // No match found
    },
    {
        id: 8,
        title: 'UI/UX Design',
        icon: <IntegrationInstructionsIcon fontSize="medium" color="primary" />,
        image: 'https://img.freepik.com/free-photo/futuristic-robot-working-digital-interface_23-2151966679.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740',
        // No match found
    },
    {
        id: 9,
        title: 'QA & Testing Services',
        icon: <SmartToyIcon fontSize="medium" color="primary" />,
        image: 'https://img.freepik.com/free-photo/futuristic-robot-working-digital-interface_23-2151966679.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740',
        // No match found
    },
    {
        id: 10,
        title: 'Maintenance & Support',
        icon: <InsightsIcon fontSize="medium" color="primary" />,
        image: 'https://img.freepik.com/free-photo/futuristic-robot-working-digital-interface_23-2151966679.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740',
        // No match found
    },
    {
        id: 11,
        title: 'Enterprise Software Solutions',
        icon: <DesignServicesIcon fontSize="medium" color="primary" />,
        image: 'https://img.freepik.com/free-photo/futuristic-robot-working-digital-interface_23-2151966679.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740',
        // No match found
    },
    {
        id: 12,
        title: 'DevOps & Automation',
        icon: <CodeIcon fontSize="medium" color="primary" />,
        image: 'https://img.freepik.com/free-photo/view-male-engineer-work-engineers-day-celebration_23-2151615153.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740',
    },
    {
        id: 13,
        title: 'Data Analytics & Business Intelligence',
        icon: <PhoneIphoneIcon fontSize="medium" color="primary" />,
        image: 'https://img.freepik.com/free-photo/portrait-indigenous-person-integrated-into-modern-life_23-2151102511.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740',
    },
    {
        id: 14,
        title: 'Artificial Intelligence (AI) Technologies',
        icon: <CampaignIcon fontSize="medium" color="primary" />,
        image: 'https://img.freepik.com/free-photo/man-hanging-out-with-robot_23-2151112223.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740',
    },
    {
        id: 15,
        title: 'Cybersecurity Solutions',
        icon: <CloudIcon fontSize="medium" color="primary" />,
        image: 'https://img.freepik.com/free-photo/futurism-perspective-digital-nomads-lifestyle_23-2151252420.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740',
    },
];


export default function AllServices() {
    const [showAll, setShowAll] = useState(false);
    const visibleServices = showAll ? allServices : allServices.slice(0, 4);

    return (
        <Box sx={{ px: { xs: 2, md: 10 }, py: 10, bgcolor: 'transparent', color: 'white' }}>
            <Typography variant="subtitle1" mb={2} fontWeight="bold" gutterBottom>
                Services
            </Typography>
            <Typography variant="h5" gutterBottom textAlign="left" sx={{ mb: 6, color: "white" }}>
                Transform your business with advanced technologies
            </Typography>

            <Grid container spacing={{ xs: 4, sm: 6, md: 6 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                {visibleServices.map((service, index) => (
                    <Grid key={index} size={{ xs: 6, sm: 6, md: 3 }}>
                        <Card
                            sx={{
                                cursor: "pointer",
                                position: 'relative',
                                borderRadius: 3,
                                overflow: 'hidden',
                                height: { xs: 200, sm: 350 },
                                mb: 2,
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: "translateY(-10px)",
                                    '.hover-overlay': {
                                        opacity: 1,
                                        background:
                                            'linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.2))',
                                    },
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={service.image}
                                alt={service.title}
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />

                            {/* Hover Overlay (initially hidden) */}
                            <Box
                                className="hover-overlay"
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    opacity: 1,
                                    transition: 'opacity 0.3s ease-in-out',
                                    background: 'rgba(0, 0, 0, 0.4)', // 20% black overlay
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    px: 2,
                                }}
                            >
                                <Typography
                                    variant="body5"
                                    component="div"
                                    sx={{
                                        position: 'absolute',
                                        top: 20,
                                        left: 10,
                                        color: '#fff',
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                        lineHeight: 1.3,
                                        textAlign: "left",
                                        marginRight: 20
                                    }}
                                >
                                    {service.title}
                                </Typography>
                            </Box>
                        </Card>

                    </Grid>

                ))}
            </Grid>

            <Box textAlign="center" mt={5}>
                <Button endIcon={showAll ? <ArrowDropUp /> : <ArrowDropDown />} size='large' variant="outlined" onClick={() => setShowAll(!showAll)} sx={{
                    color: "white", borderColor: 'white', '&:hover': {
                        bgcolor: "white",
                        color: "primary.dark"
                    }
                }}>
                    {showAll ? 'View Less' : 'View All Topics'}
                </Button>
            </Box>
        </Box>
    );
}
