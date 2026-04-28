import React, { useEffect, useState } from 'react';
import {
    ArrowRight,
    ChevronRight,
    ShieldCheck,
    Zap,
    Globe,
    BarChart3,
    Users,
    Code2,
    Cpu,
    Settings,
    Layers,
    Smartphone,
    Gauge,
    LineChart,
    CheckCircle2,
    RefreshCcw,
    Mail,
    Clock,
    Menu,
    X,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Header1 from '../components/header/Header1';
import ServiceSection from '../components/services/ServiceSection';
import Footer from '../components/Footer';

const ZohoProfessional = () => {
    const services = [
        {
            title: 'Artificial Intelligence',
            description: 'Enterprise-grade neural networks and predictive analytics for scale.',
            slug: 'artificial-intelligence',
            icon: <Cpu className="w-6 h-6 text-blue-600" />
        },
        {
            title: 'Software Development',
            description: 'Scalable architecture design and full-cycle product engineering.',
            slug: 'software-development',
            icon: <Code2 className="w-6 h-6 text-blue-600" />
        },
        {
            title: 'Web Application Development',
            description: 'Robust, secure, and performant web systems for global operations.',
            slug: 'web-application-development',
            icon: <BarChart3 className="w-6 h-6 text-blue-600" />
        },
        {
            title: 'R&D and Training',
            description: 'Dedicated innovation labs focused on emerging tech and talent.',
            slug: 'research-development-training',
            icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
        },
        {
            title: 'Internship Opportunities',
            description: 'Structured corporate programs for upcoming technical talent.',
            slug: 'internship-opportunities',
            icon: <Users className="w-6 h-6 text-blue-600" />
        }
    ];

    const features = [
        {
            icon: <Layers className="w-8 h-8 text-blue-600" />,
            title: "Expertise Across Modern Technologies",
            desc: "Deep knowledge across AI, software, and web development for strategic technology delivery."
        },
        {
            icon: <Smartphone className="w-8 h-8 text-blue-600" />,
            title: "Customized, Scalable Solutions",
            desc: "Tailored to your goals and designed for growth."
        },
        {
            icon: <Gauge className="w-8 h-8 text-blue-600" />,
            title: "Accelerated Time‑to‑Market",
            desc: "Agile delivery without sacrificing quality."
        },
        {
            icon: <LineChart className="w-8 h-8 text-blue-600" />,
            title: "Data‑Driven, Business‑Centric Approach",
            desc: "We build solutions grounded in performance and outcomes."
        },
        {
            icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />,
            title: "End‑to‑End Implementation",
            desc: "From discovery to deployment, we handle every step with precision."
        },
        {
            icon: <RefreshCcw className="w-8 h-8 text-blue-600" />,
            title: "Ongoing Support & Optimization",
            desc: "We ensure your solutions stay secure, fast, and future‑ready."
        },
    ];

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://server.fillout.com/embed/v1/";
        script.async = true;
        document.body.appendChild(script);
        return () => { document.body.removeChild(script); };
    }, []);


    return (
        <div className="min-h-screen bg-white font-['Inter',sans-serif] text-[#2C3345]">

            <Header1 />

            {/* Hero Section */}
            <section className="bg-white py-16 lg:py-20 border-b border-gray-50">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                        {/* LEFT COLUMN: The Hook */}
                        <div className="lg:col-span-7">
                            <span className="text-[#2b69b9] font-bold text-sm tracking-[0.1em] uppercase inline-block mb-4">
                                Enterprise Cloud Ecosystem
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold mb-6 leading-[1.1] tracking-tight text-slate-900">
                                Every tool you need. <br />
                                <span className="text-gray-700">One seamless experience.</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-500 mb-5 max-w-xl leading-relaxed">
                                The unified operating system for modern business. Automate your
                                workflows, integrate your data, and scale your global infrastructure
                                from a single dashboard.
                            </p>


                        </div>

                        {/* RIGHT COLUMN: The High-Intent Call-to-Action Box */}
                        <div className="lg:col-span-5">
                            <div className="bg-slate-50 border border-gray-200 p-8 md:p-10 rounded-sm shadow-sm">
                                <h3 className="text-xl font-bold mb-2 text-slate-900">Get started today</h3>
                                <p className="text-sm text-gray-500 mb-8">No credit card required. Cancel anytime.</p>

                                <div className="space-y-4">
                                    <button className="w-full bg-[#0d4ea3] text-white py-4 rounded-[4px] font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100 flex items-center justify-center gap-2">
                                        GET STARTED <ChevronRight size={18} />
                                    </button>
                                </div>

                                {/* Feature Checklist inside the CTA box */}
                                <div className="mt-8 space-y-3">
                                    {[
                                        "Unlimited users and automation",
                                        "256-bit enterprise encryption",
                                        "24/7 Priority engineering support"
                                    ].map((text, i) => (
                                        <div key={i} className="flex items-center gap-3 text-[13px] text-gray-600 font-medium">
                                            <div className="w-4 h-4 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                                                <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            {text}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* About Us Section (New) */}
            <section id="about" className="py-8 md:py-24 lg:py-32 border-t border-gray-100 overflow-hidden">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

                        {/* Left: Content Block */}
                        <div className="w-full lg:w-6/12 lg:sticky lg:top-24">
                            <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-[10px] md:text-[11px] font-bold tracking-[0.25em] uppercase rounded-sm mb-6">
                                Established 2016
                            </div>

                            <h2 className="text-3xl md:text-4xl  font-extrabold mb-6 md:mb-8 text-[#1A202C] leading-[1.1] tracking-tight">
                                Redefining the <span className="">Digital Architecture</span> of Global Commerce.
                            </h2>

                            <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed border-l-2 border-gray-100 pl-6 md:pl-8">
                                <p className="text-sm md:text-base font-medium text-gray-600">
                                    We don't just build applications; we engineer the resilient digital
                                    foundations that allow modern enterprises to outpace the market.
                                </p>
                                <p className="text-sm md:text-base font-medium text-gray-600">
                                    From high-frequency marketplace engines to custom AI integration,
                                    our work bridges the gap between visionary strategy and technical reality.
                                </p>
                            </div>

                        </div>

                        {/* Right: Architectural Image Composite */}
                        <div className="w-full lg:w-6/12 relative mt-6 lg:mt-0">
                            <div className="grid grid-cols-12 gap-3 md:gap-4">

                                {/* Large Main Image - Full width on mobile, 8-cols on desktop */}
                                <div className="col-span-12 md:col-span-12 overflow-hidden rounded-sm shadow-xl md:shadow-2xl">
                                    <img
                                        src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                                        alt="Corporate Headquarters"
                                        className="w-full h-[400px] md:h-auto object-cover md:object-contain rounded-xl"
                                    />
                                </div>

                                {/* Secondary Tall Image - Hidden on very small screens, visible from md up */}
                                {/* <div className="hidden md:flex md:col-span-4 flex-col gap-4">
                                    <div className="h-full overflow-hidden rounded-sm grayscale hover:grayscale-0 transition duration-500">
                                        <img
                                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80"
                                            alt="Engineering Team"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div> */}

                                {/* Overlapping Detail Card */}
                                <div className="relative md:absolute mt-[-2rem] md:mt-0 md:-bottom-20 md:right-10 bg-[#0d4ea3] p-6 md:p-8 text-white w-[90vw] mx-auto md:max-w-[280px] rounded-sm shadow-xl z-10">
                                    <p className="text-xs md:text-sm font-medium italic opacity-90 mb-4">
                                        "Their ability to handle complex marketplace logic while maintaining
                                        enterprise security is unparalleled."
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="h-px w-6 md:w-8 bg-white/50"></div>
                                        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-tighter">CTO, Fortune 500 Partner</span>
                                    </div>
                                </div>
                            </div>

                            {/* Subtle background decoration - Adjusted for mobile */}
                            <div className="absolute -z-10 top-20 -right-10 md:-right-20 w-48 h-48 md:w-64 md:h-64 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Service Section: High Density Grid */}
            <ServiceSection />

            {/* Features Section (New) */}
            <section id="features" className="py-12 md:p-24 bg-white overflow-hidden">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6">

                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-sm font-bold text-blue-600 tracking-[0.2em] uppercase mb-4">
                                Core Competencies
                            </h2>
                            <h3 className="text-3xl md:text-4xl font-extrabold text-[#1A202C]">
                                Why Global Enterprises <br className="hidden md:block" /> Partner With Us
                            </h3>
                        </div>
                        <p className="text-gray-500 max-w-sm text-sm md:text-base border-l-2 border-blue-600 pl-6">
                            We combine deep technical mastery with a relentless commitment to long-term business performance.
                        </p>
                    </div>

                    {/* The "Connected" Feature Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-t border-l border-gray-100">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="group relative p-8 md:p-12 border-r border-b border-white bg-slate-50 transition-all duration-300"
                            >
                                {/* Subtle Numbering - A very Zoho-style corporate detail */}
                                <span className="absolute top-8 right-8 text-xs font-mono text-gray-200 group-hover:text-blue-200 transition-colors">
                                    0{idx + 1}
                                </span>

                                {/* Icon with persistent blue background on mobile, hover effect on desktop */}
                                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-sm flex items-center justify-center mb-8   transition-all duration-300">
                                    {feature.icon}
                                </div>

                                <h4 className="text-xl font-bold mb-4 text-slate-900 leading-tight">
                                    {feature.title}
                                </h4>

                                <p className="text-gray-600 leading-relaxed text-sm md:text-base opacity-80 group-hover:opacity-100 transition-opacity">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Trust CTA */}
                    <div className="mt-16 p-8 bg-[#F8FAFC] rounded-sm flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-100">
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="client" />
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-gray-600 font-medium">
                                Joined by <span className="text-slate-900 font-bold">50+ Fortune 500</span> technical teams.
                            </p>
                        </div>
                        <button className="flex items-center gap-2 text-blue-600 font-bold text-sm hover:gap-4 transition-all">
                            VIEW CASE STUDIES <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
            </section>

            <section id="contact" className="py-12 md:py-20 bg-white border-t border-gray-100">
                <div className="max-w-[1280px] mx-auto px-2 md:px-20">

                    {/* Section Header */}
                    <div className="mb-16 border-l-4 border-blue-600 pl-6">
                        <h2 className="text-3xl font-bold text-slate-900">Start Your Enterprise Journey</h2>
                        <p className="text-gray-500 mt-2">Connect with our engineering team to scale your digital infrastructure.</p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-16">

                        {/* LEFT SIDE: Value Propositions */}
                        <div className="lg:w-5/12">
                            <h3 className="text-xl font-bold mb-6 text-slate-800">Why collaborate with SIAN?</h3>

                            <div className="space-y-10">
                                {/* Feature 1 */}
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-10 h-10 bg-blue-50 flex items-center justify-center rounded-sm">
                                        <ShieldCheck className="text-blue-600" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Enterprise Security</h4>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            All project data is handled via SOC2 compliant protocols and end-to-end encryption.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 2 */}
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-10 h-10 bg-blue-50 flex items-center justify-center rounded-sm">
                                        <Clock className="text-blue-600" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">48-Hour Engineering Review</h4>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            Your requirements are reviewed directly by our lead architects, not a sales representative.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 3 */}
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-10 h-10 bg-blue-50 flex items-center justify-center rounded-sm">
                                        <Mail className="text-blue-600" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Direct Communication</h4>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            Get a dedicated Slack channel or MS Teams bridge for real-time collaboration.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Supporting Quote */}
                            <div className="mt-12 p-8 bg-slate-50 border border-gray-100 rounded-sm italic text-gray-600 text-sm">
                                "The discovery process was thorough and focused on our business goals rather than just technical specs. A refreshing change from typical vendors."
                                <div className="mt-4 font-bold text-slate-900 not-italic uppercase tracking-tighter text-[10px]">
                                    — Operations Director, Global Logistics
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE: The Form Container */}
                        <div className="lg:w-7/12">
                            <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
                                {/* Header for the Form Box */}
                                <div className="px-6 py-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Project Discovery Form</span>
                                </div>

                                {/* Form Embed Area */}
                                <div className="min-h-[400px] bg-white">
                                    <div
                                        style={{ width: '100%', height: '600px' }}
                                        data-fillout-id="rBmJHYwWQSus"
                                        data-fillout-embed-type="standard"
                                        data-fillout-inherit-parameters
                                        data-fillout-dynamic-resize
                                    ></div>
                                </div>

                            </div>

                            <p className="mt-4 text-[11px] text-center text-gray-400">
                                By submitting this form, you agree to our <a href="#" className="underline text-blue-600">NDA & Data Privacy Policy</a>.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            <Footer />
        </div>
    );
};

export default ZohoProfessional;