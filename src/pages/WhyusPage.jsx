import React from 'react';
import {
    BrainCircuit,
    Zap,
    BarChart4,
    ShieldCheck,
    CheckCircle2,
    Search,
    Rocket,
    Globe
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header1 from '../components/header/Header1';
import Footer from '../components/Footer';
import { Hub } from '@mui/icons-material';

const WhyUsPage = () => {
    const navigate = useNavigate();

    const valueProps = [
        {
            title: "Expertise Across Modern Technologies",
            icon: <BrainCircuit size={24} />,
            desc: "Deep knowledge across AI, software, and web development. We don't just use tools; we understand the strategic delivery of technology."
        },
        {
            title: "Customized, Scalable Solutions",
            icon: <Hub size={24} />,
            desc: "Tailored to your specific business goals and designed for horizontal and vertical growth from day one."
        },
        {
            title: "Accelerated Time‑to‑Market",
            icon: <Zap size={24} />,
            desc: "Our agile delivery cycles ensure you launch faster without sacrificing the long-term quality of your code."
        },
        {
            title: "Data‑Driven & Business‑Centric",
            icon: <BarChart4 size={24} />,
            desc: "We build solutions grounded in performance and outcomes. Every feature is engineered to move your business metrics."
        },
        {
            title: "End‑to‑End Implementation",
            icon: <Search size={24} />,
            desc: "From discovery and system architecture to deployment and global operation—we handle every step with precision."
        },
        {
            title: "Ongoing Support & Optimization",
            icon: <ShieldCheck size={24} />,
            desc: "We ensure your solutions stay secure, fast, and future‑ready with continuous monitoring and system optimization."
        }
    ];

    return (
        <div className="bg-white text-slate-900 font-sans">
            <Header1 />

            {/* Corporate Hero Section */}
            <section className="pt-12 pb-20 lg:pt-20 lg:pb-20 bg-slate-50 border-b border-gray-100">
                <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-[1px] w-12 bg-blue-600"></span>
                            <span className="text-blue-600 font-bold text-[11px] tracking-[0.3em] uppercase">
                                The Sian Advantage
                            </span>
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-black mb-8 leading-[1.1] tracking-tighter">
                            Why Partner <br />
                            <span className="text-slate-700">With Us?</span>
                        </h1>
                        <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                            In a world of generic software, we provide the intelligent edge your organization needs to outpace the competition through AI-powered precision and engineering mastery.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-8 border border-gray-200 rounded-sm">
                            <div className="text-4xl font-black text-blue-600 mb-2">99.9%</div>
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Availability</div>
                        </div>
                        <div className="bg-white p-8 border border-gray-200 rounded-sm">
                            <div className="text-4xl font-black text-blue-600 mb-2">40%</div>
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Efficiency Gain</div>
                        </div>
                        <div className="col-span-2 bg-slate-900 p-8 rounded-sm text-white flex items-center justify-between">
                            <div>
                                <div className="text-2xl font-bold">Global Scale</div>
                                <div className="text-xs text-slate-400">Deployments across web & mobile</div>
                            </div>
                            <Globe className="text-blue-500 opacity-50" size={40} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Proposition Grid: Connected Suite Style */}
            <section className="py-24 bg-white">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="mb-16 border-l-4 border-blue-600 pl-6">
                        <h2 className="text-3xl font-bold text-slate-900">Engineering Principles</h2>
                        <p className="text-gray-500 mt-2">The core pillars of our technical delivery model.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200 overflow-hidden rounded-sm">
                        {valueProps.map((prop, index) => (
                            <div
                                key={index}
                                className="bg-white p-10 group hover:bg-slate-50 transition-colors duration-300"
                            >
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 flex items-center justify-center rounded-sm mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                    {prop.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{prop.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    {prop.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* "We Own the Tech" Section: Architectural Layout */}
            <section className="py-24 bg-slate-50 border-y border-gray-100">
                <div className="max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row gap-20 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl font-black text-slate-900 mb-8 leading-tight">
                            We Own the Tech <br /> <span className="text-slate-700">We Build.</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed italic border-l-4 border-slate-200 pl-6">
                            Unlike traditional agencies that just "hand over code," we create and operate proprietary SaaS platforms. We understand scale because we live it every day.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                "Proprietary AI Models",
                                "Global Operations",
                                "Flexible Licensing",
                                "Full-Lifecycle Management"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-blue-600" size={18} />
                                    <span className="font-bold text-sm text-slate-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <div className="bg-white border border-gray-200 p-2 rounded-sm shadow-xl">
                            <div className="bg-slate-900 p-10 text-white rounded-sm">
                                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 mb-8">Performance Metrics</h4>
                                <div className="space-y-10">
                                    <div>
                                        <div className="text-5xl font-black text-white">99.9%</div>
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">System Reliability</div>
                                    </div>
                                    <div>
                                        <div className="text-5xl font-black text-white">+40%</div>
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">Operational Efficiency</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA: Clean & Focused */}
            <section className="py-24 bg-white">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="bg-blue-900 rounded-sm p-12 lg:p-20 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                        <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 relative z-10">
                            Build Experiences That Work.
                        </h2>
                        <p className="text-blue-100 max-w-2xl mx-auto mb-10 text-lg relative z-10">
                            Combine technology, intelligence, and precision into solutions that leave a lasting impression on your business metrics.
                        </p>
                        <button
                            onClick={() => navigate('/contact-us')}
                            className="bg-white text-blue-600 px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-sm hover:bg-slate-50 transition-colors relative z-10"
                        >
                            Start Your Project
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default WhyUsPage;