import { Zoom } from "react-awesome-reveal";
import { FaGithub, FaExternalLinkAlt, FaServer } from "react-icons/fa";
import havenVista from "../assets/Haven Vista Home.png";
import eduTaskHub from "../assets/EduTaskHub Home.png";
import workTrackPro from "../assets/WorkTrackPro Home.png";

const Projects = () => {
    const projectData = [
        {
            name: "React Haven Vista",
            image: havenVista,
            description: "A premium responsive web app for exploring and booking vacation rentals with seamless navigation and efficient state management.",
            features: ["Responsive Design", "Intuitive Booking", "Real-time Updates"],
            tech: ["React.js", "Firebase", "Axios", "Tailwind"],
            live: "https://haven-vista.web.app",
            client: "https://github.com/mdujjal67/react-haven-vista-project"
        },
        {
            name: "Edu-Task-Hub",
            image: eduTaskHub,
            description: "A centralized platform for managing coursework, submissions, and collaborative projects between students and educators.",
            features: ["Task Management", "Collaborative Tools", "Submission Tracking"],
            tech: ["MongoDB", "Express", "React", "Node.js"],
            live: "https://edutaskhub-80dcb.web.app",
            client: "https://github.com/mdujjal67/EduTaskHub-project-client",
            server: "https://github.com/mdujjal67/EduTaskHub-project-server"
        },
        {
            name: "Work-Track-Pro",
            image: workTrackPro,
            description: "A versatile management tool designed to streamline team collaboration and project scheduling for efficient workflows.",
            features: ["Workflow Management", "Team Tracking", "Schedule Planning"],
            tech: ["MERN Stack", "Firebase", "Tailwind CSS"],
            live: "https://worktrackpro-67.web.app",
            client: "https://github.com/mdujjal67/work-track-pro-client",
            server: "https://github.com/mdujjal67/work-track-pro-server"
        }
    ];

    return (
        <div className="container mx-auto pt-[100px]" id="projects">
            <div className="text-center mb-16 lg:mb-24">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
                    Selected <span className="border-b-4 border-[#00a1ea] pb-2 text-[#00a1ea]">Project</span> 
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
                {projectData.map((project, index) => (
                    <Zoom key={index}>
                        <div className="group bg-white shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden flex flex-col h-full border border-gray-100">
                            {/* Image with Hover Effect */}
                            <div className="overflow-hidden h-60">
                                <img 
                                    src={project.image} 
                                    alt={project.name} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-grow flex flex-col">
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.name}</h3>
                                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Tech Pills */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-[#00a1ea] px-2 py-1 rounded">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Footer Links */}
                                <div className="mt-auto pt-6 border-t border-gray-100 flex flex-wrap gap-4">
                                    <a href={project.live} target="_blank" rel="noreferrer" 
                                       className="flex items-center gap-2 text-sm font-bold text-white bg-[#00a1ea] px-4 py-2 rounded-lg hover:bg-[#0081bc] transition-colors">
                                        <FaExternalLinkAlt /> Live
                                    </a>
                                    <a href={project.client} target="_blank" rel="noreferrer" 
                                       className="flex items-center gap-2 text-sm font-bold text-gray-700 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                                        <FaGithub /> Client
                                    </a>
                                    {project.server && (
                                        <a href={project.server} target="_blank" rel="noreferrer" 
                                           className="flex items-center gap-2 text-sm font-bold text-gray-700 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                                            <FaServer /> Server
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Zoom>
                ))}
            </div>
        </div>
    );
};

export default Projects;