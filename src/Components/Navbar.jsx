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

    return (
        <nav className={`navbar pb-4 lg:pb-8 flex justify-between sticky top-0 z-50 transition-all duration-300 ${scrollNav ? 'bg-black' : 'bg-base-400'} ${scrollNav ? 'text-white' : 'text-black'}`}>
            <div className="navbar-start">
                <div className="dropdown block lg:hidden z-50">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${scrollNav ? 'text-white' : 'text-black'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <ScrollLink
                                activeClass="isActive"
                                className={`hover:text-[#00a1ea] ${scrollNav ? 'text-black' : 'text-black'}`}
                                to="banner"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >Home</ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                activeClass="isActive"
                                className={`hover:text-[#00a1ea] mt-1 lg:mt-0 lg:ml-2 ${scrollNav ? 'text-black' : 'text-black'}`}
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >About</ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                activeClass="isActive"
                                className={`hover:text-[#00a1ea] my-1 lg:my-0 lg:mx-2 ${scrollNav ? 'text-black' : 'text-black'}`}
                                to="resume"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >Resume</ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                activeClass="isActive"
                                className={`hover:text-[#00a1ea] my-1 lg:my-0 lg:mx-2 ${scrollNav ? 'text-black' : 'text-black'}`}
                                to="skills"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >Skills</ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                activeClass="isActive"
                                className={`hover:text-[#00a1ea] my-1 lg:my-0 lg:mx-2 ${scrollNav ? 'text-black' : 'text-black'}`}
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >Projects</ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                activeClass="isActive"
                                className={`hover:text-[#00a1ea] my-1 lg:my-0 lg:mx-2 ${scrollNav ? 'text-black' : 'text-black'}`}
                                to="footer"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >Contact Me</ScrollLink>
                        </li>
                    </ul>
                </div>
                <RouterLink to="/">
                    <span className="flex gap-1 items-center">
                        <img src="" alt="" />
                        <h2 className={`lg:text-2xl font-semibold ${scrollNav ? 'text-white' : 'text-black'}`}>Ujjal</h2>
                    </span>
                </RouterLink>
            </div>
            <div className="navbar-center hidden lg:block">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <ScrollLink
                            activeClass="isActive"
                            className={`hover:text-[#00a1ea] ${scrollNav ? 'text-white' : 'text-black'}`}
                            to="banner"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Home</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            activeClass="isActive"
                            className={`hover:text-[#00a1ea] ml-4 ${scrollNav ? 'text-white' : 'text-black'}`}
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >About</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            activeClass="isActive"
                            className={`hover:text-[#00a1ea] ml-4 ${scrollNav ? 'text-white' : 'text-black'}`}
                            to="resume"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Resume</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            activeClass="isActive"
                            className={`hover:text-[#00a1ea] ml-4 ${scrollNav ? 'text-white' : 'text-black'}`}
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Skills</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            activeClass="isActive"
                            className={`hover:text-[#00a1ea] ml-4 ${scrollNav ? 'text-white' : 'text-black'}`}
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Projects</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            activeClass="isActive"
                            className={`hover:text-[#00a1ea] ml-4 ${scrollNav ? 'text-white' : 'text-black'} `}
                            to="footer"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Contact Me</ScrollLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                {/* User authentication logic */}
            </div>
        </nav>
    );
};

export default Navbar;
