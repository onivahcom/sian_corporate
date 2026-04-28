import React from 'react'
import Header from '../components/Header'
import { Box, Divider } from '@mui/material'
import AboutSection from '../utils/AboutSection';
import Footer from '../components/Footer';
import ServicesSlide from '../utils/servicesSlide';
import WhyChooseUs from '../utils/WhyChooseUs';
import ApplicationForm from '../components/ApplicationForm';
import HeroSection4 from '../components/hero/HeroSection4';
import ZohoProfessional from './rought';


const slides = [
    {
        src: 'https://img.freepik.com/premium-photo/trees-surround-corporate-buildings-cars-are-parked-street_848676-6833.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740',
        title: 'Deploying Indias largest quantum computer',
        description: 'A stunning low-angle view of modern city skyscrapers.',
    },
    {
        src: 'https://img.freepik.com/premium-photo/trees-surround-corporate-buildings-cars-are-parked-street_848676-6833.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740',
        title: 'Deploying Indias largest quantum computer',
        description: 'Trees and architecture blend in a calm corporate street scene.',
    },
    {
        src: 'https://img.freepik.com/premium-photo/trees-surround-corporate-buildings-cars-are-parked-street_848676-6833.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740',
        title: 'Deploying Indias largest quantum computer',
        description: 'Professional signage on an office building with clean design.',
    },
];


const LandingPage = () => {
    return (
        <>
            <ZohoProfessional />
        </>
        // <Box >

        //     <Header />
        //     <div className='py-10 '>
        //         <HeroSection4 />
        //     </div>
        //     <AboutSection />
        //     <ServicesSlide />
        //     <WhyChooseUs />
        //     <ApplicationForm />
        //     <Footer />
        // </Box>
    )
}

export default LandingPage