import React from 'react';
import {
    Smartphone,
    Settings,
    Cloud,
    ShieldCheck,
    CheckCircle2,
    ArrowUpRight,
    Globe
} from 'lucide-react';

const SoftwareDevelopment = () => {
    const expertise = [
        {
            title: "Web & Mobile Applications",
            icon: <Smartphone size={24} />,
            description: "From sleek web platforms to powerful mobile apps, we create digital experiences that are fast, secure, and intuitive.",
            applications: ["Enterprise web platforms", "Progressive web apps (PWAs)", "iOS and Android mobile apps", "Internal productivity tools"]
        },
        {
            title: "Enterprise Software Solutions",
            icon: <Settings size={24} />,
            description: "We build software that integrates deeply into your business ecosystem, streamlining workflows for maximum efficiency.",
            applications: ["ERP and CRM systems", "Workflow automation tools", "Data management platforms", "Legacy system modernization"]
        },
        {
            title: "Cloud-Native Development",
            icon: <Cloud size={24} />,
            description: "Leverage the power of the cloud to scale effortlessly. We design architectures optimized for performance and resilience.",
            applications: ["SaaS platforms", "Cloud-based analytics", "Microservices architecture", "Scalable APIs"]
        },
        {
            title: "Security & Compliance",
            icon: <ShieldCheck size={24} />,
            description: "Security is built-in, not bolted on. We follow global compliance standards to protect your data and maintain trust.",
            applications: ["Data encryption", "GDPR, HIPAA, SOC 2", "Secure authentication", "Continuous monitoring"]
        }
    ];

    return (
        <div className="bg-white text-slate-900 font-sans">

            {/* Expertise Domains Grid */}
            <section className="py-12 md:py-24  bg-[#F4F7FA]">
                <div className="max-w-[1400px] mx-auto px-6">

                    <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-20 gap-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="h-[1px] w-12 bg-blue-600"></span>
                                <span className="text-blue-600 font-bold text-[11px] tracking-[0.3em] uppercase">
                                    Infrastructure & Capability
                                </span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                                Development <span className="text-slate-400">Practices</span>
                            </h2>
                        </div>
                        <div className="max-w-md lg:text-right">
                            <p className="text-slate-500 leading-relaxed text-sm lg:text-base border-r-0 lg:border-r-4 border-blue-600 lg:pr-8">
                                Specialized engineering squads for full-cycle product development and system modernization.
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

                                {/* Core Info */}
                                <div className="space-y-4 mb-8">
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-500 text-[14px] leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Deployment Specs Box */}
                                <div className="flex-1">
                                    <div className="bg-slate-50/50 p-6 rounded-sm border border-slate-100">
                                        <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
                                            Primary Deliverables
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

                                {/* Interaction Footer */}
                                <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between">
                                    <button className="flex items-center gap-2 text-[11px] font-black text-slate-900 uppercase tracking-widest hover:text-blue-600 transition-colors group/btn">
                                        View Architecture
                                        <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                    </button>
                                    <span className="text-[10px] font-mono text-slate-300 uppercase">
                                        Stack_v1.0
                                    </span>
                                </div>
                            </div>
                        ))}

                        {/* Professional CTA Anchor */}
                        <div className="relative bg-slate-900 p-10 flex flex-col justify-between overflow-hidden">
                            <div className="absolute -right-10 -bottom-10 text-[12rem] font-black text-white/[0.03] select-none uppercase">
                                Dev
                            </div>

                            <div className="relative z-10">
                                <div className="h-12 w-12 bg-blue-600 flex items-center justify-center mb-6">
                                    <ArrowUpRight className="text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                                    Custom <br /> System Integration
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                                    Modernize your legacy systems with our 48-hour architectural feasibility assessment.
                                </p>
                            </div>

                            <div className="relative z-10 space-y-4">
                                <button className="w-full bg-blue-600 text-white py-4 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition-colors">
                                    Consult an Architect
                                </button>
                                <p className="text-center text-[10px] text-slate-500 font-bold tracking-widest uppercase">
                                    High-Availability Support
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SoftwareDevelopment;