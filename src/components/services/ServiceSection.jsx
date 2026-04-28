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
            icon: <Cpu className="w-6 h-6 text-blue-600" />,
            imageUrl: 'https://media.istockphoto.com/id/2252678503/photo/multimodal-ai-technology-concept-with-digital-blocks-representing-artificial-intelligence.jpg?b=1&s=612x612&w=0&k=20&c=cqJKU6oBlAq9sHZ6_ATu6kttWRnj9fPDj9H7iy2W2n0='
        },
        {
            title: 'Software Development',
            description: 'Scalable architecture design and full-cycle product engineering.',
            slug: 'software-development',
            icon: <Code2 className="w-6 h-6 text-blue-600" />,
            imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800'
        },
        {
            title: 'Web Application Development',
            description: 'Robust, secure, and performant web systems for global operations.',
            slug: 'web-application-development',
            icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
            imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
        },
        {
            title: 'R&D and Training',
            description: 'Dedicated innovation labs focused on emerging tech and talent.',
            slug: 'research-development-training',
            icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
            imageUrl: 'https://images.pexels.com/photos/5999086/pexels-photo-5999086.jpeg'
        },
        {
            title: 'Internship Opportunities',
            description: 'Structured corporate programs for upcoming technical talent.',
            slug: 'internship-opportunities',
            icon: <Users className="w-6 h-6 text-blue-600" />,
            imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800'
        }
    ];

    return (
        <section id="services" className="py-20 bg-[#F9FBFF]">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="mb-12 border-l-4 border-blue-600 pl-6">
                    <h2 className="text-3xl font-bold text-slate-900">Comprehensive Services</h2>
                    <p className="text-gray-500 mt-2">End-to-end technical capabilities for the modern enterprise.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 bg-gray-100 border border-gray-200">
                    {services.map((item, idx) => (
                        <NavLink
                            to={`/services/${item.slug}`}
                            key={idx}
                            className="bg-white group border-gray-100 block overflow-hidden transition-all duration-300 hover:bg-gray-100"
                        >
                            {/* Service Image Section */}
                            <div className="h-55 overflow-hidden relative">
                                <img
                                    src={item.imageUrl}
                                    alt={item.title}
                                    className="w-full h-full object-cover rounded-md"
                                />
                                <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-transparent transition-colors duration-300"></div>
                            </div>

                            {/* Content Section */}
                            <div className="px-5 md:px-10 py-10 md:py-5">
                                <div className="bg-blue-50 w-12 h-12 rounded flex items-center justify-center mb-6  group-hover:text-white transition-colors duration-300">
                                    {/* Wrapping icon to ensure color transition works with lucide */}
                                    <div >
                                        {item.icon}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>

                                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2">
                                    {item.description}
                                </p>

                                {/* Learn More Link */}
                                <div className="text-blue-600 text-sm font-bold flex items-center md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform md:translate-x-[-10px] md:group-hover:translate-x-0">
                                    LEARN MORE <ArrowRight size={14} className="ml-2" />
                                </div>
                            </div>
                        </NavLink>
                    ))}

                    {/* CTA Block remains identical for UI consistency */}
                    <div className="bg-[#094a9e] p-10 flex flex-col justify-center text-white min-h-[400px]">
                        <h3 className="text-2xl font-bold mb-4">Need a custom solution?</h3>
                        <p className="text-blue-100 text-sm mb-8 opacity-90 leading-relaxed">
                            Our engineering team is ready to review your project parameters and provide a feasibility report.
                        </p>
                        <button className="border-2 border-white/30 hover:border-white hover:bg-white/10 px-6 py-3 rounded-sm text-sm font-bold transition-all w-fit">
                            TALK TO AN EXPERT
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;