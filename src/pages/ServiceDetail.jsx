import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Box, Container } from '@mui/material';

// Import your independent UI components
import ArtificialIntelligence from '../utils/services/AritificialIntelligence';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SoftwareDevelopment from '../utils/services/SoftwareDevelopement';
import WebApplicationDevelopment from '../utils/services/webapplicationDevelopment';
import ResearchDevelopment from '../utils/services/ResearchDevelopment';
import InternshipOpportunities from '../utils/services/InternshipOpportunities';
import Header1 from '../components/header/Header1';
import { ArrowRight, BarChart3, Code2, Cpu, ShieldCheck, Users } from 'lucide-react';
import ServiceSection from '../components/services/ServiceSection';



const ServiceDetail = () => {

    const { servicename } = useParams();

    return (

        <div>
            <Header1 />

            < >

                {servicename === 'artificial-intelligence' && <ArtificialIntelligence />}
                {servicename === 'software-development' && <SoftwareDevelopment />}
                {servicename === 'web-application-development' && <WebApplicationDevelopment />}
                {servicename === 'research-development-training' && <ResearchDevelopment />}
                {servicename === 'internship-opportunities' && <InternshipOpportunities />}

            </>

            <ServiceSection />


            <Footer />
        </div>
    );
};

export default ServiceDetail;