import React, { useEffect, useState } from 'react';
import {
    ChevronRight,
    Menu,
    X,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Header1 = () => {

    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Why Us', href: '/why-us' },
        { name: 'Contact', href: '/contact-us' },
    ];


    return (
        <>
            {/* Main Nav */}
            <nav className="border-b border-gray-100 sticky top-0 bg-blue-50 z-50 shadow-sm">
                <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center space-x-15">
                        <NavLink to="/" className="flex flex-col leading-none group select-none outline-none">
                            {/* Primary Brand - SIAN */}
                            <div className="flex items-baseline gap-1">
                                <span className="text-2xl md:text-2xl font-black  text-[#157AFB]">
                                    SIAN NEXTGEN
                                </span>
                            </div>

                            {/* Sub-label - Technologies */}
                            <span className="text-[9px] font-mono font-bold tracking-[0.45em] text-slate-400 uppercase ml-0.5 mt-0.5">
                                Technologies
                            </span>
                        </NavLink>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex space-x-8 text-[15px] font-medium text-gray-700">

                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.href}
                                    className={({ isActive }) =>
                                        `transition-colors text-gray-500 font-bold duration-200 border-b-2 border-transparent pb-1 ${isActive
                                            ? "text-gray-900 font-bold border-blue-600"
                                            : "hover:text-blue-600 hover:border-blue-600"
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        {/* Desktop CTA */}
                        <button className="hidden sm:block bg-[#157AFB] text-white px-5 py-2 text-sm font-semibold rounded-[4px] hover:bg-blue-700 transition">
                            GET STARTED
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsOpen(true)}
                            className="lg:hidden p-2 text-gray-600 hover:bg-gray-50 rounded-md"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </nav >

            {/* --- MOBILE DRAWER OVERLAY --- */}
            {/* Backdrop */}
            {
                isOpen && (
                    <div
                        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] lg:hidden"
                        onClick={() => setIsOpen(false)}
                    />
                )
            }

            {/* Drawer Panel */}
            <div className={`fixed top-0 right-0 h-full w-[280px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full">

                    {/* Drawer Header */}
                    <div className="flex items-center justify-between px-6 h-16 border-b border-gray-100">
                        <span className="text-xl font-black tracking-tighter text-[#157AFB]">SIAN</span>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 text-gray-400 hover:text-gray-600"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Drawer Links */}
                    <div className="flex-1 px-4 py-6 space-y-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-between w-full p-3 text-base font-semibold text-gray-700 rounded-[4px] hover:bg-blue-50 hover:text-blue-600 transition-all group"
                            >
                                {link.name}
                                <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                        ))}
                    </div>

                    {/* Drawer Footer CTA */}
                    <div className="p-6 border-t border-gray-100">
                        <button className="w-full bg-[#157AFB] text-white py-3 rounded-[4px] font-bold shadow-lg shadow-blue-100">
                            GET STARTED
                        </button>
                        <p className="text-center text-[11px] text-gray-400 mt-4 uppercase tracking-widest font-bold">
                            Secure Enterprise Portal
                        </p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Header1