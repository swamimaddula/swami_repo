import { useLocation, useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { All_Variables } from "../Variables";

function About() {
  const location = useLocation();
  const state = location.state;
  const nav = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 px-4 md:px-10 py-8">
      <div className="mb-4">
        <button
          onClick={() => nav(-1)}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-arrow-left-square"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
            />
          </svg>
        </button>
      </div>

      <div className="text-center font-bold text-lg md:text-2xl mb-10 text-gray-800">
        <h1 className="py-6">
          <TypeAnimation
            sequence={[
              `Welcome ${state?.username || "User"}, Hope you're doing well......`,
            ]}
            wrapper="span"
            cursor={false}
            repeat={1}
          />
        </h1>
      </div>

      <div className="flex justify-center">
        <div className="bg-pink-200 rounded-[60px_0_60px_0] shadow-xl p-6 md:p-10 max-w-4xl w-full text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            {All_Variables.About_me}
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            I am a passionate Frontend Developer with nearly 3 years of
            experience specializing in Angular and TypeScript. I excel at
            building responsive, user-friendly, and high-performance web
            applications. With strong skills in component-based architecture,
            state management, and RESTful API integration, I deliver clean and
            maintainable code. I enjoy collaborating with cross-functional teams
            to create seamless user experiences and continuously improve my
            technical skills to stay up-to-date with the latest frontend
            technologies. Currently, I am contributing to impactful projects at
            TATA Consultancy Services and eager to take on new challenges in
            frontend development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
