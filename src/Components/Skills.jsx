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
    const skillsData = [
        { img: html, name: "HTML5" },
        { img: css, name: "CSS3" },
        { img: javaScript, name: "JavaScript" },
        { img: reactJs, name: "React" },
        { img: tailwind, name: "Tailwind" },
        { img: bootstrap, name: "Bootstrap" },
        { img: nodeJs, name: "Node.js" },
        { img: expressJs, name: "Express.js" },
        { img: mongoDb, name: "MongoDB" },
        { img: vsCode, name: "VS Code" },
    ];

    return (
        <div className="container mx-auto pt-[120px] px-4" id="skills">
            {/* Header Section */}
            <div className="max-w-3xl mx-auto text-center mb-16">
                <div className="text-center mb-16 lg:mb-24">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
                    Technical <span className="border-b-4 border-[#00a1ea] pb-2 text-[#00a1ea]">Skills</span> 
                </h1>
            </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                    I specialize in building full-stack applications with a focus on 
                    <span className="text-[#00a1ea] font-semibold"> Frontend Excellence </span> 
                    and scalable backend logic. Here are the core technologies I use to bring ideas to life.
                </p>
            </div>

            {/* Professional Grid Layout */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-10">
                {skillsData.map((skill, index) => (
                    <div 
                        key={index} 
                        className="group bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center text-center"
                    >
                        <div className="w-16 h-16 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                            <img src={skill.img} alt={skill.name} className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all" />
                        </div>
                        <h3 className="font-bold text-gray-700 group-hover:text-[#00a1ea] transition-colors">{skill.name}</h3>
                    </div>
                ))}
            </div>

            {/* Decorative Fast Marquee at the bottom for visual flair */}
            <div className="bg-slate-900 py-10 rounded-3xl overflow-hidden shadow-2xl">
                <p className="text-center text-gray-400 text-sm mb-6 uppercase tracking-widest">Continuous Learning & Tools</p>
                <Marquee speed={60} gradient={true} gradientColor={[15, 23, 42]} gradientWidth={100}>
                    {skillsData.concat(skillsData).map((skill, index) => (
                        <div key={index} className="flex items-center gap-4 mx-12">
                            <img src={skill.img} alt="logo" className="w-10 h-10 object-contain brightness-0 invert opacity-60" />
                            <span className="text-white/40 font-bold text-xl uppercase tracking-tighter">{skill.name}</span>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default Skills;