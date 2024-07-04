import Marquee from "react-fast-marquee";
import html from "../assets/html_logo.png"
import css from "../assets/css-logo.png"
import javaScript from "../assets/js_logo.png"
import reactJs from "../assets/react_js.png"
import nodeJs from "../assets/node_js.png"
import bootstrap from "../assets/boostrap_logo.png"
import tailwind from "../assets/tailwind-logo.png"
import vsCode from "../assets/vs_code.png"
import expressJs from "../assets/express-js.png"
import mongoDb from "../assets/Mongodb-logo.png"

const Skills = () => {
    return (
        <div className="container mx-auto pt-[100px]" id="skills">
            <h1 className="text-4xl  text-center font-bold mb-20 "><span className="border-b-2 border-[#00a1ea]">Skills</span></h1>
            <p className="mt-10 lg:mx-10 mx-auto text-center">I specialize in front-end development with strong skills in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React.js. I also have a solid understanding of backend languages like Node.js, Express.js, and MongoDB, enabling me to create comprehensive web solutions with a focus on elegant design and seamless functionality.</p>

            <Marquee speed={150} className="mt-10">
                <img src={html} alt="skills-logo" className="w-32 lg:w-60 mx-3"/>
                <img src={css} alt="skills-logo" className="w-32 lg:w-24 mr-10"/>
                <img src={javaScript} alt="skills-logo" className="w-32 lg:w-38 mx-3"/>
                <img src={reactJs} alt="skills-logo" className="w-32 lg:w-38 mx-3"/>
                <img src={bootstrap} alt="skills-logo" className="w-32 lg:w-38 mx-3"/>
                <img src={tailwind} alt="skills-logo" className="w-32 lg:w-38 mx-3"/>
                <img src={vsCode} alt="skills-logo" className="w-32 lg:w-38 mx-3"/>
                <img src={nodeJs} alt="skills-logo" className="w-32 lg:w-38 mx-3"/>
                <img src={expressJs} alt="skills-logo" className="w-32 lg:w-38 mx-3"/>
                <img src={mongoDb} alt="skills-logo" className="w-32 lg:w-38 mx-3"/>
            </Marquee>
        </div>
    );
};

export default Skills;