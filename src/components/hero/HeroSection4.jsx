import { ChevronRight } from "lucide-react";

const HeroSection4 = () => {
    return (
        <header className="relative py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center">
                    <span className="inline-block py-1 px-3 mb-6 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">
                        Innovation Meets Execution
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight text-slate-900">
                        High-Performance Solutions <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                            For Modern Enterprises.
                        </span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                        We architect, develop, and deploy intelligent technology that scales with your ambition.
                        Join 200+ companies transforming their digital workflow.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
                            Launch Your Project <ChevronRight size={20} />
                        </button>
                        <button className="bg-white text-slate-700 border border-slate-200 px-10 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all">
                            View Solutions
                        </button>
                    </div>
                </div>
            </div>
            {/* Background Decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 opacity-10">
                <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400 rounded-full blur-[120px]"></div>
            </div>
        </header>
    )
}

export default HeroSection4;