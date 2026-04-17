import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Sun, Moon, Cpu, Code, Globe, Lightbulb, ChevronDown,
    ShieldCheck, Mail, Clock, Sparkles, BarChart, Layers, CheckCircle2, ArrowUpRight,
    Smartphone,
    Zap,
    BarChart3,
    CheckCircle,
    RotateCw,
    Rocket,
    Building,
    ArrowRight,
    X,
    Menu,
    VenetianMask,
    MoonStar,
    Code2,
    Globe2,
    GraduationCap,
    Terminal,
    Target,
    Eye,
    Fingerprint,
    Award,
    TrendingUp,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';


const services = [
    {
        img: 'https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwwfHwwfHx8MA%3D%3D',
        title: 'Artificial Intelligence Services',
        desc: 'Leading the way in tech innovations.',
        buttonText: 'Contact Us',
        slug: 'artificial-intelligence',
        icon: <Cpu size={24} />
    },
    {
        img: 'https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U29mdHdhcmUlMjBEZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D',
        title: 'Software Development',
        desc: 'Connecting teams around the world for success.',
        buttonText: 'Contact Us',
        slug: 'software-development',
        icon: <Code2 size={24} />
    },
    {
        img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        title: 'Web Application Development',
        desc: 'Delivering impactful results to our clients.',
        buttonText: 'Contact Us',
        slug: 'web-application-development',
        icon: <Globe2 size={24} />
    },
    {
        img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
        title: 'Research & Development & Training',
        desc: 'Leading the way in tech innovations with expert minds.',
        buttonText: 'Contact Us',
        slug: 'research-development-training',
        icon: <Lightbulb size={24} />
    },
    {
        img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
        title: 'Internship Opportunities',
        desc: 'Delivering impactful results to our clients.',
        buttonText: 'Contact Us',
        slug: 'internship-opportunities',
        icon: <GraduationCap size={24} />
    },
];

const features = [
    {
        icon: <Building size={28} />,
        title: "Expertise Across Modern Tech",
        desc: "Deep knowledge across AI, software, and web development for strategic technology delivery.",
    },
    {
        icon: <Smartphone size={28} />,
        title: "Customized, Scalable Solutions",
        desc: "Tailored to your business goals and architected for exponential growth."
    },
    {
        icon: <Zap size={28} />,
        title: "Accelerated Time‑to‑Market",
        desc: "Agile delivery protocols that prioritize speed without sacrificing industrial quality."
    },
    {
        icon: <BarChart3 size={28} />,
        title: "Data‑Driven Approach",
        desc: "We build solutions grounded in analytical performance and concrete business outcomes."
    },
    {
        icon: <CheckCircle size={28} />,
        title: "End‑to‑End Implementation",
        desc: "From discovery to deployment, we handle every technical step with surgical precision."
    },
    {
        icon: <RotateCw size={28} />,
        title: "Ongoing Optimization",
        desc: "We ensure your solutions stay secure, fast, and future‑ready in an evolving landscape."
    },
];

const workflowSteps = [
    { t: 'Analysis', d: 'Deep dive into your business logic and requirements.', icon: <BarChart size={24} /> },
    { t: 'Architecture', d: 'Building scalable system designs and UX wireframes.', icon: <Layers size={24} /> },
    { t: 'Deployment', d: 'Iterative delivery with continuous integration.', icon: <CheckCircle2 size={24} /> }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3 // Steps pop up one after another
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.8 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 12
        }
    }
};

const App = () => {

    const navigate = useNavigate();

    const [darkMode, setDarkMode] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/', label: 'SYS_01' },
        { name: 'About', href: 'about', label: 'SYS_01' },
        { name: 'Why Us', href: 'why-us', label: 'ADV_02' },
        // { name: 'Services', href: 'services', label: 'OPS_03' },
        { name: 'Contact Us', href: 'contact-us', label: 'PORT_04' }
    ];

    useEffect(() => {
        const root = window.document.documentElement;
        if (darkMode) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [darkMode]);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://server.fillout.com/embed/v1/";
        script.async = true;
        document.body.appendChild(script);
        return () => { document.body.removeChild(script); };
    }, []);

    return (
        <div className="min-h-screen transition-colors duration-500 font-sans bg-slate-50 text-slate-900 dark:bg-[#020617] dark:text-slate-100">

            {/* --- NAVIGATION --- */}
            <nav className="fixed top-2 left-0 w-full z-500 px-2 md:px-6">
                <div className="max-w-6xl mx-auto rounded-full border backdrop-blur-xl px-4 md:px-8 py-3 flex justify-between items-center bg-white/80 border-slate-200 shadow-sm dark:bg-slate-950/80 dark:border-white/10 transition-all duration-500">

                    {/* --- LOGO --- */}
                    <div className="flex items-center gap-2 font-black text-lg  shrink-0">
                        <VenetianMask size={18} />
                        SIAN
                    </div>

                    {/* --- DESKTOP LINKS --- */}
                    <div className="hidden md:flex gap-10 text-[12px] font-bold uppercase tracking-[0.2em] opacity-60">
                        {navLinks.map((links, i) => (
                            <p key={links.name} onClick={() => navigate(`/${links.href}`)} className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                {links.name}
                            </p>
                        ))}
                    </div>

                    {/* --- ACTION BUTTONS --- */}
                    <div className="flex items-center gap-2 md:gap-4">
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 cursor-pointer rounded-full hover:bg-slate-500/10 transition-all text-blue-600 dark:text-orange-300"
                        >
                            {darkMode ? <Sun size={18} /> : <MoonStar size={18} />}
                        </button>

                        <button className="hidden sm:block px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest bg-blue-600 text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all">
                            Get Started
                        </button>

                        {/* MOBILE MENU TOGGLE */}
                        <button
                            onClick={() => setIsOpen(true)}
                            className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-500/10 rounded-full transition-all"
                        >
                            <Menu size={20} />
                        </button>
                    </div>
                </div>

                {/* --- MOBILE DRAWER --- */}
                <AnimatePresence>
                    {isOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsOpen(false)}
                                className="fixed inset-0 bg-black/20 dark:bg-black/60 backdrop-blur-sm z-[60]"
                            />

                            {/* Drawer Panel */}
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                className="fixed top-0 right-0 h-full w-full bg-white dark:bg-[#020617] shadow-2xl z-[70] p-8 flex flex-col border-l border-slate-200 dark:border-white/10"
                            >
                                <div className="flex justify-between items-center mb-12">
                                    <span className="font-black text-sm tracking-widest opacity-40 uppercase">Navigation</span>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-red-500/10 hover:text-red-500 transition-all"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                <div className="flex flex-col gap-6">
                                    {navLinks.map((i, idx) => (
                                        <motion.a
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            key={i}
                                            onClick={() => {
                                                navigate(`/${i.href}`);
                                                setIsOpen(false);
                                            }}
                                            className="text-xl font-black hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center justify-between group"
                                        >
                                            {i.name}
                                            <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                                        </motion.a>
                                    ))}
                                </div>

                                <div className="mt-auto">
                                    <button className="w-full py-4 rounded-2xl bg-blue-600 text-white font-black uppercase tracking-widest text-[10px] shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all">
                                        Get Started
                                    </button>
                                    <p className="text-center mt-6 text-[10px] font-bold uppercase tracking-[0.2em] opacity-30">
                                        Nexus Labs // 2026
                                    </p>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </nav>

            {/* --- HERO SECTION --- */}
            <section className="relative min-h-screen flex flex-col justify-center items-center px-6 text-center overflow-hidden py-25 md:py-0">
                {/* Dynamic Aura Background */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[400px] 
                   blur-[80px] md:blur-[120px] rounded-full opacity-20 pointer-events-none 
                   bg-blue-400 dark:bg-blue-600 will-change-transform transform-gpu"
                />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }} // Added explicit easing
                    className="relative z-10 max-w-4xl"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5  mt-0 md:mt-20 rounded-full border mb-8 bg-blue-50 border-blue-100 dark:bg-white/5 dark:border-white/10">
                        <Sparkles size={12} className="text-blue-600 dark:text-blue-400" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">Engineering NEXT-GEN Scalability</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl 2xl:text-9xl font-black leading-[0.9] mb-8 tracking-[0.05em]">
                        Scale Without <br />
                        <span className="text-slate-400 dark:text-slate-600 transition-colors duration-700 tracking-[0.05em]  opacity-90">
                            Limits.
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-60 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                        Architecting digital ecosystems that power the next generation of global business infrastructure.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest bg-blue-600 text-white hover:scale-105 transition-all shadow-lg shadow-blue-500/20">
                            Partner with us
                        </button>
                        <button className="px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest border border-slate-200 bg-white/50 hover:bg-white dark:border-slate-800 dark:bg-transparent dark:hover:bg-slate-800 transition-all">
                            Our Protocol
                        </button>
                    </div>
                </motion.div>

                <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                    <ChevronDown size={30} className="absolute bottom-10 opacity-30 left-1/2 -translate-x-1/2" />
                </motion.div>
            </section>


            <section id="about" className="py-24 px-6 bg-slate-50 dark:bg-[#020617] transition-colors duration-500 overflow-hidden">
                <div className="max-w-6xl mx-auto">

                    {/* --- LAYER 1: THE MISSION --- */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative z-10"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 mb-6">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                                    Our Origin
                                </span>
                            </div>

                            <h3 className="text-5xl md:text-7xl font-black mb-8 text-slate-900 dark:text-white uppercase">
                                WE DIGITIZE <br />
                                <span className="text-slate-300 dark:text-slate-800 transition-colors duration-700 ">
                                    TRUST.
                                </span>
                            </h3>

                            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium max-w-lg">
                                Engineering the infrastructure that powers the next generation of global business.
                                <span className="text-blue-600 dark:text-blue-400 font-bold block mt-4 italic">
                                    "We are the system behind your system."
                                </span>
                            </p>
                        </motion.div>

                        <div className="relative">
                            {/* Dynamic Aura behind the stats */}
                            <div className="absolute inset-0 bg-blue-600/20 dark:bg-blue-600/10 blur-[100px] rounded-full " />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                                <div className="p-10 rounded-[2.5rem] bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/10 text-center shadow-xl shadow-blue-900/5 transition-all hover:scale-105 duration-500">
                                    <p className=" text-4xl md:text-5xl font-black text-blue-600 mb-2 ">99.9%</p>
                                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-50 text-black dark:text-white">Uptime Reliability</p>
                                </div>
                                <div className="p-10 rounded-[2.5rem] bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/10 text-center mt-12 shadow-xl shadow-blue-900/5 transition-all hover:scale-105 duration-500">
                                    <p className="text-5xl font-black text-blue-600 mb-2 tracking-tighter">250+</p>
                                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-50 text-black dark:text-white">Global Partners</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- LAYER 2: CORE PILLARS --- */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                t: 'Our Purpose',
                                d: 'To help ambitious enterprises realize their technological dreams through precision engineering.',
                                icon: <Target className="w-6 h-6" />
                            },
                            {
                                t: 'Our Vision',
                                d: 'To become the leading provider of modern, digitalized R&D and advisory services worldwide.',
                                icon: <Eye className="w-6 h-6" />
                            },
                            {
                                t: 'Our Mission',
                                d: 'Providing high-quality fiduciary and technical services tailored to individual needs.',
                                icon: <Fingerprint className="w-6 h-6" />
                            }
                        ].map((pillar, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="p-10 rounded-[2.5rem] border bg-white dark:bg-slate-900/20 border-slate-100 dark:border-slate-900 transition-all duration-500 group shadow-sm hover:shadow-2xl hover:shadow-blue-500/10"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-8 shadow-lg shadow-blue-600/30 group-hover:rotate-6 transition-transform">
                                    {pillar.icon}
                                </div>
                                <h4 className="text-xl font-black mb-4 text-slate-900 dark:text-white uppercase tracking-tighter">
                                    {pillar.t}
                                </h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                                    {pillar.d}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* --- LAYER 3: VALUES (Bento Style) --- */}
                    <div className="mt-32 grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative rounded-[3rem] overflow-hidden group shadow-2xl">
                            <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200"
                                className="w-full h-[450px] object-cover transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                                alt="Team Collaboration"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 dark:from-[#020617] via-transparent to-transparent opacity-60" />
                        </div>

                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl md:text-4xl font-black mb-12 text-slate-900 dark:text-white uppercase">
                                SIAN NEXTGEN <span className="text-blue-600 italic font-light">Values</span>
                            </h2>
                            <div className="space-y-10">
                                {[
                                    { t: 'Collective Ownership', d: 'We take responsibility for every line of code we ship.', icon: <Award className="w-5 h-5" /> },
                                    { t: 'Iterative Growth', d: 'We constantly evolve our systems through real-world data.', icon: <TrendingUp className="w-5 h-5" /> },
                                    { t: 'Global Sync', d: 'Operating seamlessly across London and Tokyo hubs.', icon: <Globe className="w-5 h-5" /> }
                                ].map((val, i) => (
                                    <div key={i} className="flex gap-6 group">
                                        <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                            {val.icon}
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-xl mb-1 text-slate-900 dark:text-white tracking-tight">{val.t}</h5>
                                            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{val.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SERVICES GRID --- */}
            <section id="services" className="py-15 md:py-30 max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 gap-4">
                    <div>
                        <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-blue-600 dark:text-blue-400 mb-4">Capabilities</h2>
                        <p className="text-4xl md:text-5xl font-black">CORE EXPERTISE</p>
                    </div>
                    <p className="max-w-xs text-sm opacity-50 font-medium">Delivering specialized engineering solutions across the full stack of modern technology.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.4, ease: "circOut" }}
                            className="group cursor-pointer relative rounded-[2.5rem] overflow-visible"
                            onClick={() => navigate(`/services/${s.slug}`)}
                        >
                            {/* --- HOVER AURA BG --- */}
                            {/* This creates the glow effect outside the card boundaries */}
                            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] 
                               bg-blue-600/20 dark:bg-blue-500/10 blur-[80px] rounded-full scale-50 group-hover:scale-100 
                               transition-transform duration-700 ease-out" />
                            </div>

                            {/* Inner Card Container */}
                            <div className="relative z-10 h-full p-6 md:p-8 rounded-[2.4rem] bg-white dark:bg-[#060e2b] 
                           border border-slate-100 dark:border-slate-800 transition-all duration-500 
                           flex flex-col overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-500/10">

                                {/* Content Header */}
                                <div className="flex justify-between items-start mb-5 md:mb-15">
                                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center 
                                   bg-blue-50 dark:bg-blue-200  dark:text-blue-800  shadow-blue-500/30 
                                   group-hover:rotate-[10deg] group-hover:bg-blue-500 group-hover:text-white transition-transform duration-500">
                                        {s.icon}
                                    </div>
                                    <span className="text-4xl font-black opacity-10 group-hover:opacity-30 transition-opacity">
                                        0{i + 1}
                                    </span>
                                </div>

                                {/* Content Section */}
                                <div className="flex-1">
                                    <h3 className="text-2xl font-black mb-4  text-slate-700 dark:text-slate-300">
                                        {s.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium mb-8">
                                        {s.desc}
                                    </p>
                                </div>

                                {/* Image Container with Reveal */}
                                <div className="relative h-48 rounded-3xl overflow-hidden shadow-inner bg-slate-100 dark:bg-slate-900">
                                    <img
                                        src={s.img}
                                        alt={s.title}
                                        className="w-full h-full object-cover opacity-100 dark:opacity-100 
                                 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 
                                 transition-all duration-700"
                                    />

                                    {/* Gradient Scrim */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent 
                                   opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Button Reveal */}
                                    <div className="absolute inset-0 flex items-center justify-center translate-y-8 
                                   group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                        <button className="px-6 py-2.5 bg-white text-black font-black uppercase tracking-widest text-[10px] 
                                         rounded-full shadow-2xl transition-colors">
                                            Explore Service
                                        </button>
                                    </div>
                                </div>

                                {/* Animated Accent Line */}
                                <div className="mt-6 w-0 h-1 bg-blue-600 rounded-full group-hover:w-full transition-all duration-700" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- THE PROCESS (Timeline) --- */}
            <section id="process" className="py-15 md:py-30 bg-blue-50/50 dark:bg-slate-900/30 transition-colors duration-500">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black mb-4">OUR WORKFLOW</h2>
                        <p className="opacity-60">How we turn concepts into digital reality.</p>
                    </div>

                    {/* <div className="grid md:grid-cols-3 gap-12 relative"> */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid md:grid-cols-3 gap-12 relative"
                    >
                        {workflowSteps.map((step, idx) => (
                            <div key={idx} className="relative text-center z-10">

                                {/* --- ICON CONTAINER --- */}
                                <motion.div
                                    variants={itemVariants}
                                    className="group relative w-20 h-20 mx-auto rounded-3xl flex items-center justify-center mb-8 text-blue-600 bg-white shadow-xl dark:bg-slate-900 border border-slate-100 dark:border-white/5 transition-all duration-500 hover:shadow-blue-500/20"
                                >
                                    {/* Subtle Aura Glow behind icon */}
                                    <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-500" />

                                    <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                                        {step.icon}
                                    </div>
                                </motion.div>

                                {/* --- CONTENT --- */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.5 + (idx * 0.1) }}
                                >
                                    <h3 className="text-xl font-black mb-4 uppercase text-slate-700 dark:text-slate-300">
                                        {step.t}
                                    </h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-[260px] mx-auto font-medium italic">
                                        {step.d}
                                    </p>
                                </motion.div>

                                {/* --- CONNECTING LINE --- */}
                                {idx < 2 && (
                                    <motion.div
                                        initial={{ width: 0, opacity: 0 }}
                                        whileInView={{ width: "70%", opacity: 1 }}
                                        transition={{ delay: 0.8, duration: 1 }}
                                        className="hidden lg:block absolute top-10 left-[65%] h-[1px] bg-gradient-to-r from-blue-500/40 to-transparent -z-10"
                                    />
                                )}
                            </div>
                        ))}
                    </motion.div>
                    {/* </div> */}
                </div>
            </section>

            {/* --- WHY US --- */}
            <section className="py-15 md:py-30 px-6 bg-slate-50 dark:bg-[#020617] transition-colors duration-500">
                <div className="max-w-6xl mx-auto">

                    {/* Header Section */}
                    <div className="text-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="flex items-center justify-center gap-2 mb-4"
                        >
                            <div className="h-px w-8 bg-blue-600/30" />
                            <span className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-[0.3em] text-[10px]">
                                The Advantage
                            </span>
                            <div className="h-px w-8 bg-blue-600/30" />
                        </motion.div>

                        <h2 className="text-4xl md:text-6xl font-black mb-6 text-black dark:text-white">
                            WHY PARTNER WITH US?
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
                            We combine strategic high-level thinking with impeccable execution to deliver future-proof technology systems.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-10 rounded-[2.5rem] border bg-white border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 dark:bg-slate-900/40 dark:border-slate-800 dark:hover:border-blue-500/50 transition-all duration-500"
                            >
                                <div className="mb-8 w-14 h-14 rounded-2xl flex items-center justify-center bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-black mb-4  text-black dark:text-white">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Section - Dark Pod */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="mt-32 p-12 md:p-20 rounded-[3rem] bg-slate-900 dark:bg-slate-900/20 border border-slate-800 dark:border-white/5 text-center relative overflow-hidden shadow-2xl"
                    >
                        {/* Subtle Dynamic Aura */}
                        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 blur-[100px] pointer-events-none rounded-full" />
                        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-400/10 blur-[100px] pointer-events-none rounded-full" />

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h3 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
                                LET'S BUILD DIGITAL <br /> EXPERIENCES THAT WORK
                            </h3>
                            <p className="text-slate-400 text-lg mb-10 font-medium">
                                We collaborate with you to combine technology, intelligence, and purpose into solutions that perform today and evolve with your vision tomorrow.
                            </p>
                            <button className="cursor-pointer group px-10 py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center gap-3 mx-auto hover:bg-blue-700 hover:scale-105 transition-all  shadow-blue-500/40">
                                <Rocket size={18} />
                                Start Your Project
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>

                </div>
            </section>


            {/* contact */}
            <section id="contact" className="py-24 px-6 bg-slate-50 dark:bg-[#020617] transition-colors duration-500 overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-16 items-start">

                        {/* --- LEFT SIDE: THE CONTEXT --- */}
                        <div className="lg:col-span-5 pt-4">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 mb-6">
                                    <Sparkles size={14} className="text-blue-600 dark:text-blue-400" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                                        Direct Terminal
                                    </span>
                                </div>

                                <h2 className="text-4xl md:text-6xl font-black mb-8 text-black dark:text-white uppercase">
                                    Ready to <br />
                                    <span className="text-slate-400 dark:text-slate-800 transition-colors duration-700 tracking-[0.1em]">START?</span>
                                </h2>

                                <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-12 max-w-md font-medium">
                                    Our deployment cycle begins with this discovery form. It usually takes less than 3 minutes to define your initial project parameters.
                                </p>

                                {/* Trust Indicators */}
                                <div className="space-y-8">
                                    <div className="flex items-center gap-5 group">
                                        <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-blue-600 shadow-sm transition-all group-hover:scale-110">
                                            <ShieldCheck size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold dark:text-white uppercase tracking-tight">Encrypted Intake</p>
                                            <p className="text-xs opacity-50 font-medium">End-to-end secure transmission</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-5 group">
                                        <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-blue-600 shadow-sm transition-all group-hover:scale-110">
                                            <Terminal size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold dark:text-white uppercase tracking-tight">48h Response SLA</p>
                                            <p className="text-xs opacity-50 font-medium">Direct engineering review</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* --- RIGHT SIDE: THE FORM TERMINAL --- */}
                        <div className="lg:col-span-7 relative">
                            {/* Background Aura Glow (Focused behind the form) */}
                            <div className="absolute inset-0 z-0 pointer-events-none">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] 
                                   bg-blue-600/20 dark:bg-blue-500/10 blur-[100px] rounded-[3rem]" />
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="relative z-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#03081a] shadow-2xl overflow-hidden"
                            >
                                {/* Terminal Header Bar */}
                                <div className="h-12 border-b border-slate-100 dark:border-slate-800 flex items-center px-6 justify-between bg-slate-50/50 dark:bg-white/5">
                                    <div className="flex gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-800" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-800" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-800" />
                                    </div>
                                    <div className="flex items-center gap-2 opacity-30 text-slate-900 dark:text-white">
                                        <Terminal size={12} />
                                        <span className="text-[10px] font-bold uppercase tracking-widest">secure_intake_port</span>
                                    </div>
                                </div>

                                {/* --- FILLOUT STANDARD EMBED --- */}
                                <div className="min-h-[500px] w-full">
                                    <div
                                        style={{ width: '100%', height: '550px' }}
                                        data-fillout-id="rBmJHYwWQSus"
                                        data-fillout-embed-type="standard"
                                        data-fillout-inherit-parameters
                                        data-fillout-dynamic-resize
                                    ></div>
                                </div>

                                {/* Footer Info */}
                                <div className="px-8 py-4 bg-slate-50/50 dark:bg-white/5 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                                    <span className="text-[9px] font-bold uppercase tracking-widest opacity-20 dark:text-white">SYS_PORT: 443</span>
                                    <span className="text-[9px] font-bold uppercase tracking-widest opacity-20 dark:text-white text-right">PROTOCOL V4.0 // NEXUS</span>
                                </div>
                            </motion.div>

                            {/* Decorative Elements */}
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-blue-600/20 dark:border-blue-500/20 rounded-br-3xl pointer-events-none" />
                        </div>

                    </div>
                </div>
            </section>

            {/* --- FOOTER --- */}
            <Footer />

            <footer className="pt-24 pb-12 bg-white dark:bg-[#010413] border-t border-black/5 dark:border-white/5 transition-colors duration-500 hidden">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

                        {/* Brand Column */}
                        <div className="lg:col-span-5">
                            <div className="flex items-center gap-2 font-black text-2xl mb-6 italic">
                                <div className="w-6 h-6 rounded bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)]" />
                                NEXUS LABS
                            </div>
                            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed mb-8">
                                Architecting the digital infrastructure that powers the next generation of global business systems and AI research.
                            </p>
                            {/* <div className="flex gap-4">
                                {['LinkedIn', 'Twitter', 'Github'].map((platform) => (
                                    <div key={platform} className="w-9 h-9 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all cursor-pointer group">
                                        <span className="sr-only">{platform}</span>
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-white transition-colors" />
                                    </div>
                                ))}
                            </div> */}
                        </div>

                        {/* Sitemaps - Grid within Grid */}
                        <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">
                            <div>
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-6">Capabilities</h4>
                                <ul className="space-y-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                                    <li><a href="#" className="hover:text-blue-600 transition-colors">AI Research</a></li>
                                    <li><a href="#" className="hover:text-blue-600 transition-colors">Cloud Systems</a></li>
                                    <li><a href="#" className="hover:text-blue-600 transition-colors">Web Ops</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-6">Company</h4>
                                <ul className="space-y-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                                    <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
                                    <li><a href="#" className="hover:text-blue-600 transition-colors">Careers</a></li>
                                    <li><a href="#" className="hover:text-blue-600 transition-colors">Newsroom</a></li>
                                </ul>
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-6">Contact</h4>
                                <p className="text-sm font-medium text-slate-600 dark:text-slate-400 leading-relaxed italic">
                                    London HQ, UK <br />
                                    Tokyo Innovation Hub <br />
                                    hello@nexuslabs.co
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-30 text-center md:text-left">
                            © 2026 NEXUS LABS ENGINEERING // ALL RIGHTS RESERVED
                        </div>

                        <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
                            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Protocol</a>
                            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Ops</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;