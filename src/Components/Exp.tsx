import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { AnimatePresence, motion } from "motion/react";

function Experience() {
    const nav = useNavigate();
    const location = useLocation();
    const state = location.state;
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="work_div min-h-screen px-4 py-8 bg-cover bg-no-repeat bg-fixed overflow-x-hidden">
            <div className="icon cursor-pointer mb-6" onClick={() => nav(-1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                    className="bi bi-arrow-left-square" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                        d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                </svg>
            </div>

            <h1 className="text-center font-bold text-lg md:text-2xl mb-10">
                <TypeAnimation
                    sequence={[`Hi ${state.username}, Let's see my Experience......`]}
                    wrapper="span"
                    cursor={false}
                    repeat={1}
                />
            </h1>

            <div className="bg-[#0cdcf7]/50 rounded-xl p-6 w-full max-w-3xl mx-auto shadow-lg mb-6">
                <h2 className="text-xl font-bold mb-2">Experience</h2>
                <p className="text-sm md:text-base">
                    I am a Frontend Developer with 3 years of experience at Tata Consultancy Services, specializing in Angular and TypeScript for building dynamic, scalable, and responsive web applications. I have been actively involved in the development and maintenance of B2B and B2C transaction modules for a leading telecommunication client, delivering high-quality solutions aligned with business needs.
                </p>
            </div>

            <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
                <motion.button
                    onClick={() => setIsVisible(!isVisible)}
                    whileTap={{ y: 1 }}
                    className="bg-[#0cdcf7] text-black rounded-md px-6 py-2 text-sm md:text-base mb-4 shadow-md"
                >
                    {isVisible ? "Close" : "Show Responsibilities"}
                </motion.button>

                <AnimatePresence>
                    {isVisible && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="bg-[#0cdcf7] w-full rounded-xl p-6 shadow-lg"
                        >
                            <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                                <li>Developing feature-rich UI components using Angular, TypeScript, and NgRx</li>
                                <li>Writing clean, modular, and maintainable code with TypeScript</li>
                                <li>Using Git for version control and collaborative development</li>
                                <li>Performing data handling and backend communication using basic SQL</li>
                                <li>Debugging and optimizing applications using Browser DevTools</li>
                                <li>Planning and conducting KT sessions for junior team members</li>
                                <li>Creating and maintaining technical documentation for smooth handovers</li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default Experience;
