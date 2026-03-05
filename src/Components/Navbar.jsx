import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 50) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNav);
        return () => {
            window.removeEventListener("scroll", changeNav);
        };
    }, []);

    const navLinks = [
        { name: "Home", to: "banner" },
        { name: "About", to: "about" },
        { name: "Resume", to: "resume" },
        { name: "Skills", to: "skills" },
        { name: "Projects", to: "projects" },
        { name: "Contact", to: "contact" },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 
            ${scrollNav 
                ? 'bg-white/90 backdrop-blur-md shadow-lg py-5' 
                : 'bg-gradient-to-b from-black/90 via-black/40 to-transparent py-7'}`}>
            
            <div className="container mx-auto flex justify-between items-center px-6 lg:px-20">
                
                {/* Logo Section */}
<div className="flex items-center cursor-pointer">
    <ScrollLink 
        to="banner" // This matches the 'to' value of your Home link
        href="/"
        spy={true} 
        smooth={true} 
        offset={-70} 
        duration={500} 
        className="group"
    >
        <h2 className={`text-2xl lg:text-3xl font-bold tracking-tighter transition-colors duration-300 poppins
            ${scrollNav ? 'text-slate-900' : 'text-white'}`}>
            Ujjal<span className="text-[#00a1ea]">.</span>
        </h2>
    </ScrollLink>
</div>

                {/* Desktop Navigation */}
                <div className="hidden lg:block">
                    <ul className="flex items-center gap-10">
                        {navLinks.map((link) => (
                            <li key={link.to}>
                                <ScrollLink
                                    to={link.to}
                                    spy={true}
                                    smooth={true}
                                    offset={-40}
                                    duration={500}
                                    activeClass="text-[#00a1ea] after:scale-x-100"
                                    className={`relative cursor-pointer font-semibold poppins text-sm uppercase tracking-[0.15em] transition-all duration-300 
                                        after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-[#00a1ea] after:scale-x-0 after:transition-transform after:duration-500 after:ease-smooth hover:after:scale-x-100
                                        ${scrollNav ? 'text-slate-700 hover:text-[#00a1ea]' : 'text-white hover:text-[#00a1ea]'}`}
                                >
                                    {link.name}
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Dropdown */}
                <div className="lg:hidden">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className={`btn btn-ghost btn-circle ${scrollNav ? 'text-slate-900' : 'text-white'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-4 z-[1] p-4 shadow-2xl bg-white rounded-2xl w-64 border border-gray-100">
                            {navLinks.map((link) => (
                                <li key={link.to} className="py-1">
                                    <ScrollLink 
                                        to={link.to} 
                                        spy={true} 
                                        smooth={true} 
                                        offset={-70} 
                                        duration={500} 
                                        className="text-slate-800 font-bold poppins hover:text-[#00a1ea] active:bg-blue-50"
                                    >
                                        {link.name}
                                    </ScrollLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;