import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    ShieldCheck, Sparkles,
    Terminal,
} from 'lucide-react';
const ApplicationForm = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://server.fillout.com/embed/v1/";
        script.async = true;
        document.body.appendChild(script);
        return () => { document.body.removeChild(script); };
    }, []);


    return (
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
                            className="relative z-10 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#03081a] shadow-2xl overflow-hidden"
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
    );
};

export default ApplicationForm;