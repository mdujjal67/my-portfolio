import { Link } from "react-router-dom";
import 'animate.css';
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
    return (
        <div className="container mx-auto pt-[100px]" id="about">
            <h1 className="text-4xl  text-center font-bold mb-20">Know <span className="border-b-2 border-[#00a1ea] ">Me</span> More</h1>
            <div className="flex gap-6 items-center px-10">

                <div className="w-2/3">
                    <ScrollAnimation animateIn="animate__fadeInLeft">
                        <h1 className="text-3xl font- mb-8">I'm <span className="text-[#00a1ea] ">Md Ujjal Hossain,</span> a Front-End Web Developer</h1>
                        <p className="text-gray-500 poppins">I'm specializing in React.js and Node.js. I excel in crafting responsive web applications that combine functionality with elegant design. With a passion for continuous learning and a focus on UI/UX, I aspire to innovate and contribute to projects that redefine user experiences. <br /> <br />
                            My goal is to leverage my skills to create impactful digital solutions that resonate with users worldwide. Explore my portfolio to see examples of my work or connect with me to discuss how we can collaborate on your next project.</p>
                    </ScrollAnimation>
                </div>


                <div className="w-1/3 text-gray-600  px-10 ">
                    <ScrollAnimation animateIn="animate__fadeInRight">
                        <p><span className="font-semibold text-xl">Name:</span> Md Ujjal Hossain</p>
                        <hr className="my-3" />
                        <p><span className="font-semibold text-xl">Email:</span> <span className="text-[#00a1ea]">mdujjal.mm67@gmail.com</span></p>
                        <hr className="my-3" />
                        <p><span className="font-semibold text-xl">Age:</span> 26</p>
                        <hr className="my-3" />
                        <p><span className="font-semibold text-xl">From:</span> Dhaka, Bangladesh</p>
                        <hr className="my-3" />
                        <div className="">
                            <Link to="https://drive.usercontent.google.com/u/0/uc?id=1UCBn4cAIHq4R_C99IeuHKGrpGSptVuvn&export=download">
                                <button className="px-4 py-3 text-white bg-[#00a1ea] hover:bg-gray-200 hover:text-gray-700 hover:opacity-90 rounded-xl transition duration-300 ease-in-out font-semibold">Download Resume</button>
                            </Link>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    );
};

export default About;