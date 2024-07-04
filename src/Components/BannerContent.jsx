import { FaCircleArrowRight } from "react-icons/fa6";
import 'animate.css';
import { Typewriter } from "react-simple-typewriter";


const SliderContent = () => {
    return (
        <div className="container mx-auto">
            <div className="animate__animated animate__slideInLeft">
            <div className="lg:w-3/5 lg:pl-14 pl-10 pr-3">
            

                {/* for react type writer */}
                <div className='App '>
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white" style={{ paddingTop: '2rem', margin: 'auto 0', fontWeight: 'normal' }}>
                    <h2 className="text-2xl font-semibold mb-5 text-white">Welcome</h2>
                        {' '}
                        <span className="font-bold text-3xl md:text-4xl lg:text-5xl text-white poppins">
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['I am Md Ujjal Hossain']}
                                loop={Infinity} // Set loop to Infinity to make it loop indefinitely
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={30}
                                delaySpeed={900} // Adjust the delay speed as needed
                            />
                        </span>
                    </h1>
                </div>
                <p className="text-white py-7 text-[18px] lg:w-[550px] poppins">based in Dhaka, Bangladesh</p>
                <a href="#services">
                    <div className="relative flex">
                        <button className="pl-4 pr-10 py-2 text-white bg-[#00a1ea] hover:bg-[#00a1eaCC] hover:opacity-90 rounded-xl">Hire Me</button>
                        <FaCircleArrowRight className="text-white absolute top-[13px] left-[85px] hover:rotate-90" />
                    </div>
                </a>
            </div>
        </div>
        </div>
    );
};

export default SliderContent;