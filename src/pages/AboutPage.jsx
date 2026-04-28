import React from 'react';
import {
    Globe,
    ShieldCheck,
    BarChart3,
    Rocket,
    CheckCircle2,
    Building2,
    ArrowUpRight,
    Users
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header1 from '../components/header/Header1';
import Footer from '../components/Footer';

const AboutUs = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-white text-slate-900 font-sans selection:bg-blue-100">
            <Header1 />

            {/* 1. Hero Section: The Identity */}
            <section className="pt-12 pb-20 lg:pt-20 lg:pb-20 bg-slate-50 border-b border-gray-100">
                <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-[1px] w-12 bg-blue-600"></span>
                            <span className="text-blue-600 font-bold text-[11px] tracking-[0.3em] uppercase">
                                Global Technology Powerhouse
                            </span>
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-black mb-8 leading-[1.1] tracking-tighter">
                            Sian Next Gen <br />
                            <span className="text-slate-600">Technologies.</span>
                        </h1>
                        <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                            A specialized intelligence firm dedicated to designing, developing, and
                            deploying modern digital ecosystems powered by AI and data-driven architecture.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="bg-white border border-gray-200 p-2 rounded-sm shadow-2xl shadow-slate-200">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                                alt="Our Technical Team"
                                className="w-full h-[400px] object-cover"
                            />
                        </div>
                        {/* High-Performance Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-slate-600 p-8 text-white hidden md:block">
                            <div className="text-4xl font-black text-slate-100">2026</div>
                            <div className="text-[10px] font-bold text-slate-200 uppercase tracking-widest mt-1">
                                Future-Ready Systems
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Who We Are: The Solution Focus */}
            <section className="py-24 bg-white">
                <div className="max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row gap-20 items-start">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
                            Beyond Writing Code — <br />
                            <span className="text-slate-600">We Craft Foundations.</span>
                        </h2>
                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed border-l-2 border-slate-100 pl-8">
                            <p>
                                We manage the entire lifecycle of technical innovation. From concept and
                                scalable architecture to global deployment, we build the systems
                                that sustain modern enterprise operations.
                            </p>
                            <p className="text-base font-medium text-gray-400">
                                Our expertise spans across proprietary AI products, SaaS platforms,
                                and high-performance solutions designed for total marketplace dominance.
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                        {[
                            { icon: <ShieldCheck />, label: "Security First" },
                            { icon: <BarChart3 />, label: "Data Driven" },
                            { icon: <Globe />, label: "Global Scale" },
                            { icon: <Building2 />, label: "Enterprise Ready" }
                        ].map((item, i) => (
                            <div key={i} className="p-8 border border-slate-100 bg-slate-50 flex flex-col items-center justify-center text-center group hover:bg-white hover:border-blue-200 transition-all">
                                <div className="text-blue-600 mb-4 transform group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <span className="text-xs font-bold uppercase tracking-widest text-slate-900">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Our Mission: The Driving Force */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
                    <div className="grid grid-cols-6 h-full">
                        {[...Array(24)].map((_, i) => (
                            <div key={i} className="border border-white/20 h-16 w-16"></div>
                        ))}
                    </div>
                </div>
                <div className="max-w-[1280px] mx-auto px-6 text-center relative z-10">
                    <span className="text-blue-500 font-bold text-xs tracking-[0.4em] uppercase mb-8 block">Mission Statement</span>
                    <h3 className="text-2xl lg:text-4xl font-medium leading-relaxed max-w-4xl mx-auto italic text-slate-200">
                        "To engineer innovative software, AI-powered ecosystems, and data-driven
                        platforms that empower organizations to lead in a hyper-digital world."
                    </h3>
                    <div className="mt-12 h-1 w-20 bg-blue-600 mx-auto"></div>
                </div>
            </section>

            {/* 4. Capabilities Grid */}
            <section className="py-24 bg-[#F4F7FA]">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="mb-16 border-l-4 border-blue-600 pl-6">
                        <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">How We Deliver Growth</h2>
                        <p className="text-gray-500 mt-2">Technical strategies that move the needle.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200 overflow-hidden rounded-sm">
                        {[
                            { title: "Strategic Automation", desc: "Automating repetitive workflows to free up high-value human capital." },
                            { title: "Data Transformation", desc: "Turning raw, unstructured data into actionable business intelligence." },
                            { title: "Scalable SaaS", desc: "Building proprietary tools that grow horizontally and vertically with your user base." },
                            { title: "Consultative Partnership", desc: "Providing end-to-end strategy from discovery to deployment." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-10 group hover:bg-blue-600 transition-colors duration-300">
                                <span className="text-[10px] font-mono font-bold text-gray-300 group-hover:text-white/40 mb-6 block">0{i + 1}</span>
                                <h3 className="text-lg font-bold text-slate-900 group-hover:text-white mb-4 leading-tight">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-blue-50 transition-colors">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Final CTA */}
            <section className="py-24 bg-white">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="bg-blue-900 p-12 lg:p-20 flex flex-col md:flex-row items-center justify-between gap-8 rounded-sm">
                        <div className="text-white max-w-2xl">
                            <h2 className="text-3xl lg:text-5xl font-black mb-6 leading-tight">
                                Ready to Architect <br /> Your Future?
                            </h2>
                            <p className="text-blue-100 text-lg opacity-90">
                                Combine technology, intelligence, and precision into systems that deliver impact.
                            </p>
                        </div>
                        <button
                            onClick={() => navigate('/contact-us')}
                            className="bg-slate-900 text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-slate-800 transition-all flex items-center gap-2 group"
                        >
                            Schedule Consultation <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutUs;