import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import { FaDownload, FaUser, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import 'animate.css';

const About = () => {
    return (
        <div className="container mx-auto pt-24 px-6 lg:px-20" id="about">
            {/* Header */}
            <div className="text-center mb-12 lg:mb-16">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
                    Know <span className="border-b-4 border-[#00a1ea] pb-2 text-[#00a1ea]">Me</span> More
                </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Text Content */}
                <div className="lg:col-span-7">
                    <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-800 leading-tight">
                            I'm <span className="text-[#00a1ea]">Md Ujjal Hossain,</span><br />
                            <span className="text-2xl lg:text-3xl text-slate-600 font-semibold">Front-End Web Developer</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8 poppins">
                            I specialize in React.js and Node.js, crafting responsive web applications that merge functionality with elegant design. With a passion for continuous learning and a focus on UI/UX, I aim to innovate and contribute to projects that redefine user experiences.
                        </p>
                        
                        {/* Quick Achievement Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                            <div className="border-l-4 border-[#00a1ea] pl-4">
                                <h3 className="text-3xl font-bold text-slate-800">4+</h3>
                                <p className="text-gray-500 text-sm">Years Learning</p>
                            </div>
                            <div className="border-l-4 border-[#00a1ea] pl-4">
                                <h3 className="text-3xl font-bold text-slate-800">10+</h3>
                                <p className="text-gray-500 text-sm">Projects Done</p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>

                {/* Info Card */}
                <div className="lg:col-span-5">
                    <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true}>
                        <div className="bg-white p-8 rounded-[2rem] shadow-2xl shadow-blue-100/50 border border-gray-50 relative overflow-hidden group">
                            {/* Decorative Accent */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#00a1ea]/5 rounded-bl-full transition-all group-hover:w-32 group-hover:h-32"></div>

                            <div className="space-y-6 relative z-10">
                                <div className="flex items-center gap-4 group/item">
                                    <div className="p-3 bg-[#00a1ea]/10 rounded-xl text-[#00a1ea] group-hover/item:bg-[#00a1ea] group-hover/item:text-white transition-all">
                                        <FaUser />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Name</p>
                                        <p className="text-slate-800 font-semibold">Md Ujjal Hossain</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group/item">
                                    <div className="p-3 bg-[#00a1ea]/10 rounded-xl text-[#00a1ea] group-hover/item:bg-[#00a1ea] group-hover/item:text-white transition-all">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Email</p>
                                        <a href="mailto:mdujjal.mm67@gmail.com" className="text-slate-800 font-semibold hover:text-[#00a1ea]">mdujjal.mm67@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group/item">
                                    <div className="p-3 bg-[#00a1ea]/10 rounded-xl text-[#00a1ea] group-hover/item:bg-[#00a1ea] group-hover/item:text-white transition-all">
                                        <FaCalendarAlt />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Age</p>
                                        <p className="text-slate-800 font-semibold">26 Years</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group/item">
                                    <div className="p-3 bg-[#00a1ea]/10 rounded-xl text-[#00a1ea] group-hover/item:bg-[#00a1ea] group-hover/item:text-white transition-all">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">From</p>
                                        <p className="text-slate-800 font-semibold">Dhaka, Bangladesh</p>
                                    </div>
                                </div>

                                <div className="pt-6">
                                    <Link to="YOUR_GOOGLE_DRIVE_LINK" target="_blank">
                                        <button className="w-full flex items-center justify-center gap-3 px-6 py-4 text-white bg-[#00a1ea] rounded-2xl shadow-lg shadow-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-bold">
                                            <FaDownload className="animate-bounce" /> Download Resume
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    );
};

export default About;