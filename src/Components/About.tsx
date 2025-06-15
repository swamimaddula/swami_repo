import { useLocation, useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { All_Variables } from "../Variables";

function About(){



const location = useLocation();
const state = location.state
const nav = useNavigate();
    return(
        <div className="About">
                 <div className='icon' onClick={()=>nav(-1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left-square" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
</svg>
</div>
            <div className="text-center font-bold">
                {/* <button>
                <i className="bi bi-arrow-left-circle"></i>
                </button> */}

            <h1 className="input_show py-16 bg-red">
                
<TypeAnimation sequence={[`Welcome ${state.username}, Hope you're doing well......`]}
        wrapper="span"
        cursor={false}
        repeat={1}/>    
                 
                 </h1>

</div>
<div className="m-6 text-center circle">
    <div>
<h1  className="input_show_1 font-bold">{All_Variables.About_me}</h1>

                 <p className="mt-5 para">
I am a passionate Frontend Developer with nearly 3 years of experience specializing in Angular and TypeScript. I excel at building responsive, user-friendly, and high-performance web applications. With strong skills in component-based architecture, state management, and RESTful API integration, I deliver clean and maintainable code. I enjoy collaborating with cross-functional teams to create seamless user experiences and continuously improve my technical skills to stay up-to-date with the latest frontend technologies. Currently, I am contributing to impactful projects at TATA Consultancy Services and eager to take on new challenges in frontend development.

</p>

</div>

</div>


        </div>
    );


}
export default About;