import React, { useState, useEffect, useRef } from 'react';
import {
    Cpu, Code2, BarChart3, ShieldCheck, Users,
    ArrowRight, CheckCircle2, Globe, Zap, Layers
} from 'lucide-react';
import Header1 from '../header/Header1';
import Footer from '../Footer'
import { useNavigate } from 'react-router-dom';

const Services1 = () => {

    const [activeService, setActiveService] = useState('');
    const observer = useRef(null);
    const navigate = useNavigate();

    const services = [
        {
            title: 'Artificial Intelligence',
            description: 'Enterprise-grade neural networks and predictive analytics for scale.',
            details: 'Our AI suite focuses on operationalizing machine learning. We don’t just build models; we build the pipelines that sustain them.',
            features: ['Conversational AI and chatbot interfaces', 'Automated document analysis', 'Sentiment and opinion tracking', 'Internal knowledge assistants'],
            slug: 'artificial-intelligence',
            icon: <Cpu className="w-8 h-8" />,
            imageUrl: 'https://media.istockphoto.com/id/2252678503/photo/multimodal-ai-technology-concept-with-digital-blocks-representing-artificial-intelligence.jpg?b=1&s=612x612&w=0&k=20&c=cqJKU6oBlAq9sHZ6_ATu6kttWRnj9fPDj9H7iy2W2n0='
        },
        {
            title: 'Software Development',
            description: 'Scalable architecture design and full-cycle product engineering.',
            details: 'Specializing in high-concurrency systems and microservices architecture using modern JavaScript ecosystems.',
            features: ['Cloud-Native Engineering', 'Legacy System Modernization', 'API-First Architecture'],
            slug: 'software-development',
            icon: <Code2 className="w-8 h-8" />,
            imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800'
        },
        {
            title: 'Web Application Development',
            description: 'Robust, secure, and performant web systems for global operations.',
            details: 'End-to-end web solutions built for high performance and military-grade security standards.',
            features: ['Progressive Web Apps (PWA)', 'Real-time Data Dashboards', 'Enterprise CMS Integration'],
            slug: 'web-application-development',
            icon: <BarChart3 className="w-8 h-8" />,
            imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
        },
        {
            title: 'R&D and Training',
            description: 'Dedicated innovation labs focused on emerging tech and talent.',
            details: 'Bridging the gap between academic research and commercial application through rigorous testing.',
            features: ['Emerging Tech Audits', 'Custom Engineering Workshops', 'Prototype Incubation'],
            slug: 'research-development-training',
            icon: <ShieldCheck className="w-8 h-8" />,
            imageUrl: 'https://images.pexels.com/photos/5999086/pexels-photo-5999086.jpeg'
        },
        {
            title: 'Internship Opportunities',
            description: 'Structured corporate programs for upcoming technical talent.',
            details: 'A dedicated pathway for junior talent to gain hands-on experience in full-stack development.',
            features: ['MERN Stack Mentorship', 'Agile Workflow Training', 'Career Placement Tracks'],
            slug: 'internship-opportunities',
            icon: <Users className="w-8 h-8" />,
            imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800'

        }
    ];

    // --- SCROLL SPY LOGIC ---
    useEffect(() => {
        // Callback function to execute when a section enters the view
        const handleIntersect = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveService(entry.target.id);
                }
            });
        };

        // Initialize Observer
        observer.current = new IntersectionObserver(handleIntersect, {
            // Adjust rootMargin to trigger the highlight when the section is near the top
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        });

        // Observe each section
        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.current.observe(section));

        return () => observer.current.disconnect();
    }, []);

    return (
        <>

            <Header1 />

            <div className="bg-[#F9FBFF] min-h-screen font-['Inter',sans-serif]">
                {/* Page Header */}
                <header className="bg-white border-b border-gray-200 pt-10 md:pt-20 pb-6 md:pb-12">
                    <div className="max-w-[1280px] mx-auto px-6">
                        <span className="text-blue-600 font-bold text-xs tracking-[0.3em] uppercase">Services Suite</span>
                        <h1 className="text-4xl font-extrabold text-slate-900 mt-4 mb-2">Our Technical Capabilities</h1>
                        <p className="text-gray-500 max-w-xl">
                            Comprehensive technology solutions designed for enterprise stability and marketplace innovation.
                        </p>
                    </div>
                </header>

                <div className="max-w-[1280px] mx-auto px-6 py-16 flex flex-col lg:flex-row gap-12">

                    {/* Sidebar Navigation: Google Docs Style */}
                    <aside className="hidden lg:block w-1/4 sticky top-24 h-fit">
                        <nav className="flex flex-col space-y-1 relative">
                            {/* Vertical Progress Line (Optional, adds to the Docs feel) */}
                            <div className="absolute left-0 top-0 w-[2px] h-full bg-gray-100" />

                            {services.map((s) => (
                                <a
                                    key={s.slug}
                                    href={`#${s.slug}`}
                                    className={`relative px-6 py-3 text-sm font-semibold transition-all duration-200 border-l-2 ${activeService === s.slug
                                        ? "text-blue-600 bg-blue-50/50 border-blue-600"
                                        : "text-gray-500 border-transparent hover:text-gray-900 hover:bg-gray-50"
                                        }`}
                                >
                                    {s.title}
                                </a>
                            ))}
                        </nav>

                        <div className="mt-12 p-6 bg-blue-600 rounded-sm text-white shadow-lg shadow-blue-100">
                            <h4 className="font-bold mb-2">Need a custom plan?</h4>
                            <p className="text-xs text-blue-100 mb-4 leading-relaxed">Our architects are ready to design a solution tailored to your needs.</p>
                            <button className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                                Talk to Sales <ArrowRight size={14} />
                            </button>
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <main className="lg:w-3/4 space-y-12">
                        {services.map((service) => (
                            <section
                                key={service.slug}
                                id={service.slug}
                                // Adding scroll-mt to account for sticky headers/offset
                                className="scroll-mt-24 bg-white border border-gray-100 p-6 md:p-12 rounded-sm shadow-sm transition-all duration-500"
                            >
                                <div className="flex flex-col md:flex-row gap-8">
                                    <div className="md:w-1/3">
                                        <div className={`w-16 h-16 flex items-center justify-center rounded-sm mb-6 transition-colors duration-500 ${activeService === service.slug ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"
                                            }`}>
                                            {service.icon}
                                        </div>
                                        <h2 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h2>
                                        <div className="flex items-center gap-2 text-xs mb-5 font-bold text-gray-400 uppercase tracking-widest">
                                            <Globe size={14} /> Global Availability
                                        </div>

                                        {/* Service Image Section */}
                                        <div className="h-45 overflow-hidden relative">
                                            <img
                                                src={service.imageUrl}
                                                alt={service.title}
                                                className="w-full h-full object-cover rounded-lg"
                                            />
                                            <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-transparent transition-colors duration-300 rounded-lg"></div>
                                        </div>
                                    </div>


                                    <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-gray-100 pt-8 md:pt-0 md:pl-12">
                                        <p className="text-gray-600 mb-6 leading-relaxed italic">
                                            "{service.description}"
                                        </p>
                                        <p className="text-gray-700 mb-8 leading-relaxed">
                                            {service.details}
                                        </p>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {service.features.map((feature, fIdx) => (
                                                <div key={fIdx} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                                                    <CheckCircle2 size={16} className="text-blue-500 shrink-0" />
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>

                                        <button className="mt-10 cursor-pointer bg-slate-900 text-white px-6 py-3 text-xs font-bold rounded-sm hover:bg-slate-600 transition-colors uppercase tracking-widest" onClick={() => navigate(`/services/${service.slug}`)}>
                                            View Detailed Services
                                            {/* {service.title} */}
                                        </button>
                                    </div>
                                </div>
                            </section>
                        ))}
                    </main>
                </div>

                {/* Final Trust CTA */}
                <section className="bg-slate-900 py-10 mt-10">
                    <div className="max-w-[1280px] mx-auto px-6 text-center">
                        <h3 className="text-white text-3xl font-bold mb-6">Built for scale. Trusted by experts.</h3>
                        <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale invert pt-8">
                            <Zap size={40} className="bg-white" />
                            <Layers size={40} className="bg-white" />
                            <Globe size={40} className="bg-white" />
                        </div>
                    </div>
                </section>
            </div>

            <Footer />


        </>
    );
};

export default Services1;