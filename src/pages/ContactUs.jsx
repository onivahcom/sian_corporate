import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    ShieldCheck, Mail, Clock, Sparkles, BarChart, Layers, CheckCircle2, ArrowUpRight,

    Terminal,
    Target,
    Eye,
    Fingerprint,
    Award,
    TrendingUp,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ApplicationForm from '../components/ApplicationForm';
import Header1 from '../components/header/Header1';


const ContactUs = () => {



    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://server.fillout.com/embed/v1/";
        script.async = true;
        document.body.appendChild(script);
        return () => { document.body.removeChild(script); };
    }, []);

    return (
        <>

            <Header1 />

            <div className='py-10 md:py-20'>
                <ApplicationForm />
            </div>


            <Footer />
        </>
    );
};

export default ContactUs;