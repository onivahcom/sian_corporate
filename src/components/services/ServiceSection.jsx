import {
    ArrowRight,
    ShieldCheck,
    BarChart3,
    Users,
    Code2,
    Cpu,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const ServiceSection = () => {
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


    return (
        <section id="services" className="py-20 bg-[#F9FBFF]">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="mb-12 border-l-4 border-blue-600 pl-6">
                    <h2 className="text-3xl font-bold">Comprehensive Services</h2>
                    <p className="text-gray-500 mt-2">End-to-end technical capabilities for the modern enterprise.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-gray-200 border border-gray-200">
                    {services.map((item, idx) => (
                        <NavLink
                            to={`/services/${item.slug}`}
                            key={idx}
                            className="bg-white p-10 hover:bg-gray-100 transition-all duration-300 group border-r border-b border-gray-100 last:border-r-0 block"
                        >
                            <div className="bg-blue-50 w-12 h-12 rounded flex items-center justify-center mb-6 ">
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>

                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                {item.description}
                            </p>

                            <div className="md:hidden text-blue-600 text-sm font-bold flex items-center ">
                                LEARN MORE <ArrowRight size={14} className="ml-2" />
                            </div>

                            <div className="text-blue-600 text-sm font-bold flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                LEARN MORE <ArrowRight size={14} className="ml-2" />
                            </div>
                        </NavLink>
                    ))}
                    <div className="bg-[#094a9e] p-10 flex flex-col justify-center text-white">
                        <h3 className="text-xl font-bold mb-4">Need a custom solution?</h3>
                        <button className="border-2 border-white/30 hover:border-white px-6 py-2 rounded text-sm font-bold transition">
                            TALK TO AN EXPERT
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;