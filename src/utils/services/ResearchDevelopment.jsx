import React from 'react';
import {
    FlaskConical,
    GraduationCap,
    CheckCircle2,
    ArrowUpRight,
    Globe,
    Zap,
    Search,
    BookOpen
} from 'lucide-react';

const ResearchDevelopment = () => {
    const expertise = [
        {
            title: "Research & Development (R&D)",
            icon: <FlaskConical size={24} />,
            description: "We partner with you through every stage of innovation — from research and feasibility to prototyping and validation. R&D is focused on exploring new solutions and creating differentiated technology.",
            applications: [
                "Feasibility studies and market research",
                "Rapid prototyping and proof of concept",
                "Applied research for business goals",
                "Innovation strategy & exploration"
            ],
            bgImage: "https://images.pexels.com/photos/9574502/pexels-photo-9574502.jpeg",
            whyText: "R&D fuels growth by helping you anticipate trends and make informed decisions about future product direction."
        },
        {
            title: "Training & Capability Building",
            icon: <GraduationCap size={24} />,
            description: "Technology moves fast — and so should your team. Our training services are designed to equip your people with hands‑on expertise in modern frameworks and best practices.",
            applications: [
                "AI, ML & analytics workflows",
                "Software development best practices",
                "Cloud architecture & DevOps",
                "Interactive real-world workshops"
            ],
            bgImage: "https://images.pexels.com/photos/7794078/pexels-photo-7794078.jpeg",
            whyText: "Our training begins with a needs assessment to tailor content that aligns with your specific business objectives."
        }
    ];

    return (
        <div className="bg-white text-slate-900 font-sans">



            {/* Expertise Domains Grid */}
            <section className="py-12 md:py-24  bg-[#F4F7FA]">
                <div className="max-w-[1400px] mx-auto px-6">

                    {/* Grid Title */}
                    <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-20 gap-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="h-[1px] w-12 bg-blue-600"></span>
                                <span className="text-blue-600 font-bold text-[11px] tracking-[0.3em] uppercase">
                                    Innovation & Learning
                                </span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                                Future-Proofing <span className="text-slate-400">Enterprise Intelligence</span>
                            </h2>
                        </div>
                        <div className="max-w-md lg:text-right">
                            <p className="text-slate-500 leading-relaxed text-sm lg:text-base border-r-0 lg:border-r-4 border-blue-600 lg:pr-8">
                                Bridging the gap between academic research and commercial application. We empower your organization through specialized R&D and world-class technical training.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {expertise.map((item, index) => (
                            <div
                                key={index}
                                className="group relative bg-white border border-slate-200 p-8 md:p-10 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
                            >
                                {/* Meta Header */}
                                <div className="flex justify-between items-center mb-10">
                                    <div className="w-14 h-14 bg-slate-50 text-blue-600 flex items-center justify-center rounded-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                        {item.icon}
                                    </div>
                                    <span className="text-4xl font-black text-slate-100 pointer-events-none">
                                        0{index + 1}
                                    </span>
                                </div>

                                {/* Featured Image - Now directly in the flow */}
                                <div className="relative w-full h-48 mb-8 overflow-hidden rounded-sm bg-slate-100">
                                    <img
                                        src={item.bgImage}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
                                    />
                                    {/* Subtle overlay to keep it consistent with the slate theme */}
                                    <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500" />
                                </div>

                                {/* Core Info */}
                                <div className="space-y-4 mb-8">
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-500 text-[14px] leading-relaxed italic border-l-2 border-slate-100 pl-4">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Deployment Specs Box */}
                                <div className="flex-1">
                                    <div className="bg-slate-50/50 p-6 rounded-sm border border-slate-100 mb-6">
                                        <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
                                            Offerings:
                                        </span>
                                        <ul className="space-y-3">
                                            {item.applications.map((app, i) => (
                                                <li key={i} className="flex items-start gap-3 text-[13px] font-bold text-slate-700 leading-tight">
                                                    <CheckCircle2 size={14} className="text-blue-600 shrink-0 mt-0.5" />
                                                    {app}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
                                        <strong>Outcome:</strong> {item.whyText}
                                    </p>
                                </div>

                                {/* Interaction Footer */}
                                <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between">
                                    <button className="flex items-center gap-2 text-[11px] font-black text-slate-900 uppercase tracking-widest hover:text-blue-600 transition-colors group/btn">
                                        View Roadmap
                                        <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                    </button>
                                    <span className="text-[10px] font-mono text-slate-300 uppercase">
                                        Lab_SLA
                                    </span>
                                </div>
                            </div>
                        ))}

                        {/* Professional CTA Anchor */}
                        <div className="relative bg-slate-900 p-10 flex flex-col justify-between overflow-hidden">
                            <div className="absolute -right-10 -bottom-10 text-[12rem] font-black text-white/[0.03] select-none uppercase">
                                R&D
                            </div>

                            <div className="relative z-10">
                                <div className="h-12 w-12 bg-blue-600 flex items-center justify-center mb-6">
                                    <Search className="text-white" size={20} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                                    Feasibility <br /> Studies
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                                    Request a comprehensive market research and technical feasibility study for your next project.
                                </p>
                            </div>

                            <div className="relative z-10 space-y-4">
                                <button className="w-full bg-blue-600 text-white py-4 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition-colors">
                                    Request Scoping
                                </button>
                                <p className="text-center text-[10px] text-slate-500 font-bold tracking-widest uppercase text-white opacity-40">
                                    Confidential IP Protection
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ResearchDevelopment;