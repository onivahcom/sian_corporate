import React from 'react';
import {
    Laptop,
    Users2,
    CheckCircle2,
    ArrowUpRight,
    Globe,
    Settings,
    School,
    TrendingUp,
    GraduationCap
} from 'lucide-react';

const InternshipOpportunities = () => {
    const benefits = [
        {
            title: "Hands‑On Professional Experience",
            icon: <Laptop size={24} />,
            description: "Work directly on real tasks and projects, giving you solid context for how software, AI, and web solutions are built and delivered in a professional environment.",
            applications: [
                "Real-world project contribution",
                "Live deployment cycles",
                "Professional dev environments",
                "Enterprise-grade tooling"
            ]
        },
        {
            title: "Skill Development with Mentorship",
            icon: <Users2 size={24} />,
            description: "Learn industry‑standard technologies and workflows from experienced mentors — gaining insights that go far beyond textbooks.",
            applications: [
                "1-on-1 mentor pairing",
                "Career guidance sessions",
                "Code review participation",
                "Architectural deep-dives"
            ]
        }
    ];

    const programFeatures = [
        { title: "Project‑Driven Learning", text: "Meaningful tasks with clear goals contributing to real solutions.", icon: <Settings size={16} /> },
        { title: "Mentor Support", text: "Guidance and career insight from experienced team members.", icon: <Users2 size={16} /> },
        { title: "Skill Workshops", text: "Strengthen coding practices, tools, and professional soft skills.", icon: <School size={16} /> },
        { title: "Flexible Paths", text: "Opportunities across AI, Web, R&D, and Product Support.", icon: <TrendingUp size={16} /> }
    ];

    return (
        <div className="bg-white text-slate-900 font-sans">


            {/* Program Foundations Grid */}
            <section className="py-12 md:py-24  bg-[#F4F7FA]">
                <div className="max-w-[1400px] mx-auto px-6">

                    {/* Grid Title */}
                    <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-20 gap-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="h-[1px] w-12 bg-blue-600"></span>
                                <span className="text-blue-600 font-bold text-[11px] tracking-[0.3em] uppercase">
                                    Talent Development
                                </span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                                Shape the Future <span className="text-slate-400">Through Innovation</span>
                            </h2>
                        </div>
                        <div className="max-w-md lg:text-right">
                            <p className="text-slate-500 leading-relaxed text-sm lg:text-base border-r-0 lg:border-r-4 border-blue-600 lg:pr-8">
                                Our internship program isn't about watching from the sidelines. It's about full immersion into technical excellence, mentorship, and real-world project delivery.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((item, index) => (
                            <div
                                key={index}
                                className="group relative bg-white border border-slate-200 p-8 md:p-10 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
                            >
                                <div className="absolute top-0 left-0 h-1 bg-blue-600 w-0 group-hover:w-full transition-all duration-700"></div>

                                <div className="flex justify-between items-center mb-10">
                                    <div className="w-14 h-14 bg-slate-50 text-blue-600 flex items-center justify-center rounded-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                        {item.icon}
                                    </div>
                                    <span className="text-4xl font-black text-slate-100 pointer-events-none uppercase">
                                        P0{index + 1}
                                    </span>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-500 text-[14px] leading-relaxed line-clamp-3">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="flex-1">
                                    <div className="bg-slate-50/50 p-6 rounded-sm border border-slate-100 mb-6">
                                        <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
                                            Training Objectives:
                                        </span>
                                        <ul className="space-y-3">
                                            {item.applications.map((app, i) => (
                                                <li key={i} className="flex items-start gap-3 text-[12px] font-bold text-slate-700 leading-tight">
                                                    <CheckCircle2 size={14} className="text-blue-600 shrink-0 mt-0.5" />
                                                    {app}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between">
                                    <button className="flex items-center gap-2 text-[11px] font-black text-slate-900 uppercase tracking-widest hover:text-blue-600 transition-colors group/btn">
                                        Apply Now
                                        <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                    </button>
                                    <span className="text-[10px] font-mono text-slate-300 uppercase">
                                        Intern_V4
                                    </span>
                                </div>
                            </div>
                        ))}

                        {/* Program Features Summary Block */}
                        <div className="relative bg-white border border-slate-200 p-8 md:p-10 flex flex-col justify-between">
                            <div>
                                <span className="block text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-6">
                                    Why Join Us
                                </span>
                                <div className="space-y-6">
                                    {programFeatures.map((feat, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                                {feat.icon}
                                            </div>
                                            <div>
                                                <h4 className="text-[13px] font-bold text-slate-900">{feat.title}</h4>
                                                <p className="text-[11px] text-slate-500 leading-relaxed">{feat.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button className="mt-8 w-full bg-slate-900 text-white py-4 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-blue-600 transition-colors">
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Final CTA Anchor */}
            <section className="bg-slate-900 py-20 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 flex items-center justify-center">
                    <GraduationCap size={400} className="text-white" />
                </div>
                <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10">
                    <div className="mb-8 md:mb-0">
                        <h2 className="text-3xl font-bold mb-2">Kickstart your technical career.</h2>
                        <p className="text-slate-400">Applications are currently open for our Q3/Q4 engineering cohorts.</p>
                    </div>
                    <button className="bg-blue-600 px-10 py-4 font-bold rounded-[4px] hover:bg-blue-700 transition flex items-center gap-2 group uppercase text-xs tracking-widest">
                        Submit Application <ArrowUpRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default InternshipOpportunities;