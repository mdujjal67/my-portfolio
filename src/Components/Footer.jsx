
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-[100px]">
            <div className="container mx-auto flex justify-between items-center px-4">
                <p>&copy; 2024 Md Ujjal Hossain. All rights reserved.</p>
                <div className="flex gap-4">
                    <a href="https://github.com/mdujjal67" target="_blank"  className="text-gray-300 hover:text-gray-400 transition duration-300">
                        <FaGithub className='scale-125'/>
                    </a>
                    <a href="https://www.linkedin.com/in/md-ujjal-hossain-developer" target="_blank"  className="text-gray-300 hover:text-gray-400 transition duration-300">
                        <FaLinkedin className='scale-125'/>
                    </a>
                    <a href="https://www.facebook.com/Eng.MdUjjalHossain" target="_blank"  className="text-gray-300 hover:text-gray-400 transition duration-300">
                        <FaFacebook className='scale-125'/>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
