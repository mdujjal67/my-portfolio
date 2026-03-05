import { FaCircleArrowRight } from "react-icons/fa6";
import 'animate.css';
import { Typewriter } from "react-simple-typewriter";

const SliderContent = () => {
    return (
        <div className="w-full">
            <div className="animate__animated animate__fadeInLeft lg:pl-20 pl-10 pr-5 pt-48 lg:pb-24">

                {/* Subtle Greeting */}
                <p className="text-[#00a1ea] font-bold tracking-widest uppercase text-sm mb-3">
                    Welcome to my portfolio
                </p>

                {/* Main Heading - Fixed nested tags */}
                <div className="min-h-[100px] lg:min-h-[120px]">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-extrabold leading-tight">
                        I am <span className="text-[#00a1ea]">
                            <Typewriter
                                words={['Md Ujjal Hossain', 'a Front-End Developer', 'a React Enthusiast']}
                                loop={Infinity}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </span>
                    </h1>
                </div>

                {/* Subtext with your exact Dhaka location */}
                <p className="text-gray-300 py-6 text-lg lg:text-xl max-w-[550px] leading-relaxed poppins">
                    A dedicated Web Developer based in <span className="text-white font-medium">Dhaka, Bangladesh</span>, passionate about building digital experiences.
                </p>

                {/* Professional Call to Action */}
                <a href="#contact" className="inline-block mt-4">
                    <button className="group relative flex items-center justify-start px-14 py-4 text-white bg-[#00a1ea] rounded-full font-bold transition-all duration-500 hover:bg-slate-900 shadow-lg shadow-[#00a1ea]/20 overflow-hidden">
                        <span className="relative z-10 poppins">
                            Hire Me
                        </span>
                        <div className="absolute right-5 flex items-center justify-center overflow-hidden w-10 h-10">
                            <FaCircleArrowRight
                                className="text-xl transition-all duration-1000 ease-in-out translate-x-0 opacity-100 group-hover:translate-x-14 group-hover:opacity-0"
                            />
                        </div>
                    </button>
                </a>
            </div>
        </div>
    );
};

export default SliderContent;