import React from 'react';
import {
    Cpu,
    BrainCircuit,
    Eye,
    Workflow,
    TrendingUp,
    CheckCircle2,
    ChevronRight,
    Globe,
    Settings2,
    ScanEye,
    MessageSquare,
    BarChart4,
    ArrowUpRight
} from 'lucide-react';

const ArtificialIntelligence = () => {
    const expertise = [
        {
            title: "Machine Learning Solutions",
            icon: <Cpu className="w-6 h-6 text-blue-600" />,
            description: "We create bespoke machine learning models that transform your data into a strategic asset — designed to perform reliably at scale.",
            bgImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
            applications: ["Demand forecasting and dynamic pricing", "Fraud detection and risk scoring", "Recommendation engines", "Predictive maintenance in industrial systems"]
        },
        {
            title: "Natural Language Processing (NLP)",
            icon: <MessageSquare className="w-6 h-6 text-blue-600" />,
            description: "Language is complex — we make it actionable. Our NLP solutions interpret nuance, context, and intent, enabling sophisticated interfaces and deep text intelligence.",
            bgImage: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=600",
            applications: ["Conversational AI and chatbot interfaces", "Automated document analysis", "Sentiment and opinion tracking", "Internal knowledge assistants"]
        },
        {
            title: "Computer Vision",
            icon: <ScanEye className="w-6 h-6 text-blue-600" />,
            description: "Images and videos contain a depth of untapped intelligence. We design computer vision systems that interpret visual data with precision and respond in real time.",
            bgImage: "https://images.unsplash.com/photo-1527430253228-e92d4fdfde2d?auto=format&fit=crop&q=80&w=600",
            applications: ["Quality control and defect detection", "Facial recognition", "Retail analytics", "Medical imaging analysis"]
        },
        {
            title: "AI-Powered Automation",
            icon: <Settings2 className="w-6 h-6 text-blue-600" />,
            description: "If a task is repetitive, we look for a way to automate it intelligently. We design AI-driven workflows that cut manual effort and reduce errors.",
            bgImage: "https://images.unsplash.com/photo-1518433278988-2b2bb7030928?auto=format&fit=crop&q=80&w=600",
            applications: ["End-to-end process automation", "Intelligent ticket routing", "Workflow optimization", "Data entry and validation automation"]
        },
        {
            title: "Predictive Analytics",
            icon: <BarChart4 className="w-6 h-6 text-blue-600" />,
            description: "Anticipation is a competitive advantage. We design models that learn from historical data to forecast trends, identify risks early, and reveal opportunities.",
            bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
            applications: ["Customer churn prediction", "Sales and revenue forecasting", "Risk modeling", "Market trend analysis and strategic planning"]
        }
    ];

    return (
        <div className="bg-white text-slate-900 font-sans">

            <section className="py-12 md:py-24  bg-[#F4F7FA]">
                <div className="max-w-[1400px] mx-auto px-6">

                    {/* Elite Header Structure */}
                    <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-20 gap-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="h-[1px] w-12 bg-blue-600"></span>
                                <span className="text-blue-600 font-bold text-[11px] tracking-[0.3em] uppercase">
                                    Infrastructure & Capability
                                </span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                                AI Practice <span className="text-slate-400">Domains</span>
                            </h2>
                        </div>
                        <div className="max-w-md lg:text-right">
                            <p className="text-slate-500 leading-relaxed text-sm lg:text-base border-r-0 lg:border-r-4 border-blue-600 lg:pr-8">
                                We architect high-performance neural infrastructures that bridge the gap between abstract data and strategic enterprise outcomes.
                            </p>
                        </div>
                    </div>

                    {/* The "Professional Suite" Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {expertise.map((item, index) => (
                            <div
                                key={index}
                                className="group relative bg-white border border-slate-200 p-6 md:p-10 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
                            >
                                {/* Hover Progress Bar */}
                                {/* <div className="absolute top-0 left-0 h-1 bg-blue-600 w-0 group-hover:w-full transition-all duration-700"></div> */}

                                {/* Top Meta Info */}
                                <div className="flex justify-between items-center mb-10">
                                    <div className="w-14 h-14 bg-slate-50 text-blue-600 flex items-center justify-center rounded-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
                                        {/* Icon from your data */}
                                        <Cpu size={24} />
                                    </div>
                                    <span className="text-4xl font-black text-slate-100 group-hover:text-slate-200 transition-colors pointer-events-none">
                                        0{index + 1}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="space-y-4 mb-8">
                                    <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-500 text-[14px] leading-relaxed line-clamp-3">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Technical Deployment List */}
                                <div className="flex-1">
                                    <div className="bg-slate-50/50 p-1 rounded-sm border border-slate-100">
                                        <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
                                            Primary Deployments
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

                            </div>
                        ))}

                        {/* Pro CTA Block: High Density */}
                        <div className="relative bg-slate-900 p-10 flex flex-col justify-between overflow-hidden shadow-2xl">
                            {/* Background Branding Detail */}
                            <div className="absolute -right-10 -bottom-10 text-[12rem] font-black text-white/[0.03] select-none">
                                AI
                            </div>

                            <div className="relative z-10">
                                <div className="h-12 w-12 bg-blue-600 flex items-center justify-center mb-6">
                                    <ArrowUpRight className="text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                                    Custom <br /> Neural Engineering
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                                    Our solution architects provide 48-hour feasibility reports for bespoke AI infrastructure requirements.
                                </p>
                            </div>

                            <div className="relative z-10 space-y-4">
                                <button className="w-full bg-blue-600 text-white py-4 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition-colors">
                                    Consultation Portal
                                </button>
                                <p className="text-center text-[10px] text-slate-500 font-bold tracking-widest uppercase">
                                    SECURE END-TO-END UPLINK
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ArtificialIntelligence;