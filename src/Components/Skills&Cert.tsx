import { useLocation, useNavigate } from "react-router-dom";
import * as motion from "motion/react-client";
import '../App.css';
import { TypeAnimation } from "react-type-animation";

function Skills_Cert() {
    const nav = useNavigate();
    const location = useLocation();
    const state = location.state;

    return (
        <div className="skills_cert bg-cover bg-center bg-no-repeat bg-fixed min-h-screen overflow-auto px-4 md:px-16 py-8">
            <div className="icon cursor-pointer mb-6" onClick={() => nav(-1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                    className="bi bi-arrow-left-square" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                        d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                </svg>
            </div>

            <h1 className="text-blue-500 text-center mb-10">
                <TypeAnimation
                    className="text-base md:text-2xl"
                    sequence={[`Hello ${state.username}, Let's see my skills......`]}
                    wrapper="span"
                    cursor={false}
                    repeat={1}
                />
            </h1>

            <div className="flex flex-col gap-6">
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-teal-200 rounded-xl shadow-lg p-6 w-full"
                >
                    <h5 className="font-semibold text-lg mb-4">Frontend</h5>
                    <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                        <li>HTML5 - Used to create and structure web pages.</li>
                        <li>CSS3 - For styling and formatting HTML elements.</li>
                        <li>Angular / TypeScript - Scalable, component-driven apps.</li>
                        <li>Bootstrap - Framework for responsive UIs.</li>
                        <li>Tailwind - Utility-first CSS framework.</li>
                    </ul>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-indigo-300 rounded-xl shadow-lg p-6 w-full"
                >
                    <h5 className="font-semibold text-lg mb-4">Database</h5>
                    <p className="text-sm md:text-base">SQL - A domain-specific language used to manage and manipulate relational databases.</p>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-pink-300 rounded-xl shadow-lg p-6 w-full"
                >
                    <h5 className="font-semibold text-lg mb-4">State Management</h5>
                    <p className="text-sm md:text-base">NGRX - Reactive state management for Angular using Redux & RxJS.</p>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-violet-300 rounded-xl shadow-lg p-6 w-full"
                >
                    <h5 className="font-semibold text-lg mb-4">Tools</h5>
                    <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                        <li>Postman - For testing RESTful APIs.</li>
                        <li>ALM - Application Lifecycle Management tools.</li>
                        <li>GIT - Distributed version control system.</li>
                        <li>Browser DevTools - Inspect/debug web pages.</li>
                    </ul>
                </motion.div>
            </div>
        </div>
    );
}

export default Skills_Cert;
