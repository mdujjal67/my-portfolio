import { FaUniversity } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import 'animate.css';
import { Zoom } from "react-awesome-reveal";



const Resume = () => {
    return (
        <div className="container mx-auto pt-[100px]" id="resume">
            <h1 className="text-4xl  text-center font-bold mb-20 "><span className="border-b-2 border-[#00a1ea]">Resume</span></h1>

            <div className="flex items-center gap-10 px-10 animate__animated animate__animate__fadeInUp">
                <div className="w-1/2">
                    <h2 className="text-3xl font-semibold mb-10">My Education</h2>
                    {/* card-01 */}
                    <Zoom>
                        <div className="shadow-xl p-6  rounded-md  bg-gray-100">
                            <span className="bg-[#00a1ea] py-1 px-3 rounded-xl text-white">2021-2025</span>
                            <div className="flex items-center gap-3 mt-4">
                                <FaGraduationCap className="text-xl" />
                                <p>BSc in Computer Science & Engineering</p>
                                <p></p>
                            </div>
                            <div className="flex items-center gap-3 my-3">
                                <FaUniversity className="text-xl" />
                                <p className="text-[#00a1ea]">Northern University Bangladesh</p>
                            </div>
                            <p>Throughout my BSc in Computer Science & Engineering, I gained a solid understanding of programming, algorithms, software engineering, and web development. Engaging in collaborative projects and internships sharpened my problem-solving skills and deepened my passion for innovation in CS.</p>
                        </div>
                    </Zoom>
                    {/* card-02 */}
                    <Zoom>
                        <div className="shadow-xl p-6 mt-8 rounded-md bg-gray-100">
                            <span className="bg-[#00a1ea] py-1 px-3 rounded-xl text-white">2016-2020</span>
                            <div className="flex items-center gap-3 mt-4">
                                <FaGraduationCap className="text-xl" />
                                <p>Diploma Engineering in Computer Science </p>
                                <p></p>
                            </div>
                            <div className="flex items-center gap-3 my-3">
                                <FaUniversity className="text-xl" />
                                <p className="text-[#00a1ea]">Munshiganj Polytechnic Institute</p>
                            </div>
                            <p>Studying Diploma in Computer Science, I learned practical skills in programming, system analysis, and software development. Hands-on projects in networking, databases, and web development deepened my technical expertise and passion for solving real-world problems with technology..</p>
                        </div>
                    </Zoom>
                </div>
                <div className="w-1/2">
                    <h2 className="text-3xl font-semibold mb-10">My Experience</h2>
                    {/* card-01 */}
                    <Zoom>
                        <div className="shadow-xl p-6  rounded-md  bg-gray-100">
                            <span className="bg-[#00a1ea] py-1 px-3 rounded-xl text-white">2020-2020</span>
                            <div className="flex items-center gap-3 mt-4">
                                <FaGraduationCap className="text-xl" />
                                <p>Intern as Responsive Web Designer</p>
                                <p></p>
                            </div>
                            <div className="flex items-center gap-3 my-3">
                                <FaUniversity className="text-xl" />
                                <a href="https://www.creativeitinstitute.com" target="_blank" >
                                    <p className="text-[#00a1ea]">Creative IT Institute</p>
                                </a>
                            </div>
                            <p>As an Intern at Creative IT Institute, I designed and developed responsive websites. I focused on user-friendly interfaces, ensuring compatibility across devices using HTML, CSS, and JavaScript. This experience enhanced my web design skills and passion for creating engaging web experiences.</p>
                        </div>
                    </Zoom>
                    {/* card-02 */}
                    <Zoom>
                        <div className="shadow-xl p-6 mt-8 rounded-md bg-gray-100">
                            <span className="bg-[#00a1ea] py-1 px-3 rounded-xl text-white">2021-2021</span>
                            <div className="flex items-center gap-3 mt-4">
                                <FaGraduationCap className="text-xl" />
                                <p>Web Designer </p>
                                <p></p>
                            </div>
                            <div className="flex items-center gap-3 my-3">
                                <FaUniversity className="text-xl" />
                                <a href="https://www.leatheracebd.com" target="_blank" >
                                    <p className="text-[#00a1ea]">CLeather Ace</p>
                                </a>
                            </div>
                            <p>As a Web Designer at Leather Ace Company, I created visually appealing, user-friendly, and responsive websites. I used HTML, CSS, and JavaScript to ensure compatibility across devices and browsers, enhancing the user experience and aligning web design with the company's branding and marketing strategies.</p>
                        </div>
                    </Zoom>
                </div>
            </div>
        </div>
    );
};

export default Resume;