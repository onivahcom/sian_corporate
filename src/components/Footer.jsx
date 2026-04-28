import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    Globe,
    Mail,
    MapPin,
    ArrowUpRight,
    ShieldCheck
} from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        Solutions: [
            { name: "Artificial Intelligence", href: "/services/artificial-intelligence" },
            { name: "Software Development", href: "/services/software-development" },
            { name: "Web Applications", href: "/services/web-application-development" },
            { name: "R&D and Training", href: "/services/research-development-training" },
            { name: "Internships", href: "/services/internship-opportunities" }
        ],
        Company: [
            { name: "Home", href: "/" },
            { name: "About Us", href: "/about" },
            { name: "Why Us", href: "/why-us" },
            { name: "Contact Us", href: "/contact-us" },

        ],
        // Support: [
        //     { name: "Contact Sales", href: "/contact-us" },
        //     { name: "Technical Support", href: "#" },
        //     { name: "Documentation", href: "#" },
        //     { name: "API Status", href: "#" }
        // ]
    };

    return (
        <footer className="bg-[#1A202C] text-gray-400 font-sans border-t border-slate-800">
            <div className="max-w-[1280px] mx-auto px-6 pt-20 pb-10">

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Brand Section */}
                    <div className="lg:col-span-4 space-y-8">
                        <div>
                            <div className="flex items-center gap-1 cursor-default select-none mb-6">
                                <span className="text-2xl font-black tracking-tighter text-white">SIAN</span>
                                <span className="text-2xl font-light text-slate-500 tracking-tight ml-0.5 uppercase">NextGen</span>
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full ml-1 mt-2 animate-pulse"></div>
                            </div>
                            <p className="text-sm leading-relaxed max-w-xs">
                                Architecting resilient digital ecosystems through AI-driven
                                engineering and high-performance software delivery.
                            </p>
                        </div>

                        {/* Global Badge */}
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-sm">
                            <Globe size={16} className="text-blue-400" />
                            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                                Global Operations
                            </span>
                        </div>
                    </div>

                    {/* Link Columns */}
                    <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-2 gap-8">
                        {Object.entries(footerLinks).map(([category, links]) => (
                            <div key={category}>
                                <h5 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
                                    {category}
                                </h5>
                                <ul className="space-y-4">
                                    {links.map((link) => (
                                        <li key={link.name}>
                                            <NavLink
                                                to={link.href}
                                                className="text-sm hover:text-blue-400 transition-colors duration-200 flex items-center group"
                                            >
                                                {link.name}
                                                <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100" />
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Contact Detail Section */}
                    <div className="lg:col-span-2 space-y-6">
                        <h5 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Connect</h5>
                        <div className="space-y-4 text-sm">
                            <a href="mailto:contact@siannextgen.com" className="flex items-center gap-3 hover:text-white transition-colors">
                                <Mail size={16} className="text-blue-500" />
                                contact@sian.tech
                            </a>
                            <div className="flex items-start gap-3">
                                <MapPin size={16} className="text-blue-500 shrink-0" />
                                <span className="leading-snug">Technical Hub,<br /> Bangalore, India</span>
                            </div>
                        </div>

                        {/* Social Icons */}
                        {/* <div className="flex items-center gap-4 pt-4">
                            {[Linkedin, Twitter, Github].map((Icon, i) => (
                                <a key={i} href="#" className="w-8 h-8 rounded-sm bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div> */}
                    </div>
                </div>

                {/* Bottom Utility Bar */}
                <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-6 text-[11px] font-bold uppercase tracking-widest">
                        <span className="text-slate-500">© {currentYear} Sian Next Gen Technologies</span>
                        <div className="hidden md:block h-4 w-px bg-slate-700"></div>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-white">Privacy Policy</a>
                            <a href="#" className="hover:text-white">Terms of Service</a>
                            <a href="#" className="hover:text-white">Cookies</a>
                        </div>
                    </div>


                </div>
            </div>
        </footer>
    );
};

export default Footer;