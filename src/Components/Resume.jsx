import { FaUniversity, FaBriefcase } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { Zoom } from "react-awesome-reveal";
import 'animate.css';

const Resume = () => {
    return (
        <div className="container mx-auto pt-[120px] px-6 lg:px-10" id="resume">
            {/* Header */}
            <div className="text-center mb-16 lg:mb-24">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
                    My <span className="border-b-4 border-[#00a1ea] pb-2 text-[#00a1ea]">Resume</span> 
                </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* --- Education Section --- */}
                <div>
                    <div className="flex items-center gap-4 mb-12">
                        <div className="bg-[#00a1ea] p-3 rounded-full text-white shadow-lg">
                            <FaGraduationCap className="text-2xl" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-800">Education</h2>
                    </div>

                    <div className="space-y-12 border-l-2 border-gray-200 ml-6 pl-8 relative">
                        {/* Education Card 1 */}
                        <Zoom triggerOnce>
                            <div className="relative group">
                                {/* Timeline Dot */}
                                <div className="absolute -left-[41px] top-0 w-5 h-5 bg-white border-4 border-[#00a1ea] rounded-full group-hover:bg-[#00a1ea] transition-colors duration-300"></div>

                                <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <span className="bg-[#00a1ea]/10 text-[#00a1ea] font-bold py-1 px-4 rounded-full text-sm">2022 - 2026</span>
                                    <span className="text-gray-400 text-sm font-medium italic ml-2">( 4 Years )</span>
                                    <h3 className="text-xl font-bold mt-4 text-slate-800">BSc in Computer Science & Engineering</h3>
                                    <div className="flex items-center gap-2 text-[#00a1ea] font-semibold mt-2 mb-4">
                                        <FaUniversity />
                                        <a href="https://nub.ac.bd" target="_blank" rel="noreferrer" className="hover:underline">Northern University Bangladesh</a>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Gained a solid understanding of programming, algorithms, and software engineering. Engaged in collaborative projects and internships that sharpened problem-solving skills.
                                    </p>
                                </div>
                            </div>
                        </Zoom>

                        {/* Education Card 2 */}
                        <Zoom triggerOnce delay={200}>
                            <div className="relative group">
                                <div className="absolute -left-[41px] top-0 w-5 h-5 bg-white border-4 border-[#00a1ea] rounded-full group-hover:bg-[#00a1ea] transition-colors duration-300"></div>

                                <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <span className="bg-[#00a1ea]/10 text-[#00a1ea] font-bold py-1 px-4 rounded-full text-sm">2016 - 2020</span>
                                    <span className="text-gray-400 text-sm font-medium italic ml-2">( 4 Years )</span>
                                    <h3 className="text-xl font-bold mt-4 text-slate-800">Diploma in Computer Science</h3>
                                    <div className="flex items-center gap-2 text-[#00a1ea] font-semibold mt-2 mb-4">
                                        <FaUniversity />
                                        <a href="https://munshiganj.polytech.gov.bd" target="_blank" rel="noreferrer" className="hover:underline">Munshiganj Polytechnic Institute</a>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Developed practical skills in system analysis and networking. Hands-on projects in databases and web development deepened technical expertise in real-world problem solving.
                                    </p>
                                </div>
                            </div>
                        </Zoom>
                    </div>
                </div>

                {/* --- Experience Section --- */}
                <div>
                    <div className="flex items-center gap-4 mb-12">
                        <div className="bg-[#00a1ea] p-3 rounded-full text-white shadow-lg">
                            <FaBriefcase className="text-2xl" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-800">Experience</h2>
                    </div>

                    <div className="space-y-12 border-l-2 border-gray-200 ml-6 pl-8 relative">
                        {/* Experience Card 1: Tenzen */}
                        <Zoom triggerOnce delay={400}>
                            <div className="relative group">
                                <div className="absolute -left-[41px] top-0 w-5 h-5 bg-white border-4 border-[#00a1ea] rounded-full group-hover:bg-[#00a1ea] transition-colors duration-300"></div>

                                <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <div className="flex items-center gap-3">
                                        <span className="bg-[#00a1ea]/10 text-[#00a1ea] font-bold py-1 px-4 rounded-full text-sm">
                                            2023 - Present
                                        </span>
                                        <span className="text-gray-400 text-sm font-medium italic">
                                            ( 2.5 Years + )
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold mt-4 text-slate-800">Senior Executive, Web & IT Department</h3>

                                    <div className="flex items-center gap-2 text-[#00a1ea] font-semibold mt-2 mb-4">
                                        <FaBriefcase />
                                        <span>Tenzen</span>
                                    </div>

                                    <p className="text-gray-600 leading-relaxed">
                                        Leading the development of high-performance web solutions and IT infrastructure.
                                        Implementing modern web standards and growth initiatives to ensure
                                        seamless user experiences.
                                    </p>
                                </div>
                            </div>
                        </Zoom>

                        {/* Experience Card 2: Leatherace */}
                        <Zoom triggerOnce>
                            <div className="relative group">
                                <div className="absolute -left-[41px] top-0 w-5 h-5 bg-white border-4 border-[#00a1ea] rounded-full group-hover:bg-[#00a1ea] transition-colors duration-300"></div>

                                <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <span className="bg-[#00a1ea]/10 text-[#00a1ea] font-bold py-1 px-4 rounded-full text-sm">2021 - 2021</span>
                                    <span className="text-gray-400 text-sm font-medium italic ml-2">( 9 months )</span>
                                    <h3 className="text-xl font-bold mt-4 text-slate-800">Web Designer</h3>
                                    <div className="flex items-center gap-2 text-[#00a1ea] font-semibold mt-2 mb-4">
                                        <FaBriefcase />
                                        <a href="https://www.leatheracebd.com" target="_blank" rel="noreferrer" className="hover:underline">Leather Ace</a>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Creating visually appealing, user-friendly responsive websites. Implementing modern HTML/CSS/JS practices to ensure cross-browser compatibility and brand alignment.
                                    </p>
                                </div>
                            </div>
                        </Zoom>

                        {/* Experience Card 3: creativeit */}
                        <Zoom triggerOnce delay={200}>
                            <div className="relative group">
                                <div className="absolute -left-[41px] top-0 w-5 h-5 bg-white border-4 border-[#00a1ea] rounded-full group-hover:bg-[#00a1ea] transition-colors duration-300"></div>

                                <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <span className="bg-[#00a1ea]/10 text-[#00a1ea] font-bold py-1 px-4 rounded-full text-sm">2020 - 2020</span>
                                    <span className="text-gray-400 text-sm font-medium italic ml-2">( 3 months )</span>
                                    <h3 className="text-xl font-bold mt-4 text-slate-800">Responsive Web Design Intern</h3>
                                    <div className="flex items-center gap-2 text-[#00a1ea] font-semibold mt-2 mb-4">
                                        <FaBriefcase />
                                        <a href="https://www.creativeitinstitute.com" target="_blank" rel="noreferrer" className="hover:underline">Creative IT Institute</a>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Focused on designing responsive interfaces and engaging user experiences. Enhanced core web design skills through real-world client-style projects.
                                    </p>
                                </div>
                            </div>
                        </Zoom>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Resume;