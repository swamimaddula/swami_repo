import { useLocation, useNavigate } from "react-router-dom";
import * as motion from "motion/react-client";
import '../App.css';
import { TypeAnimation } from "react-type-animation";


function  Skills_Cert(){

const nav = useNavigate();
const location = useLocation()
const state = location.state


    return(
        <div className="skills_cert bg-cover bg-center bg-no-repeat bg-fixed min-h-screen  overflow-hidden">
                 <div className='icon' onClick={()=>nav(-1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left-square" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
</svg>
</div>


  <div >
            

            <h1 className="mt-60 input_side text-blue-500 py-16 bg-red">
                
<TypeAnimation sequence={[`Hello ${state.username}, Let's,see my skills......`]}
        wrapper="span"
        cursor={false}
        repeat={1}/>    
                 
                 </h1>

</div>

<div>
     <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            // style={box}
            className="motion_div"
        >
            <div className="m-6">

            <h5>Frontend</h5><br></br>
            <p>HTML5 - The standard markup language used to create and structure web pages.</p>
            <p>CSS3 - Used in the frontend to style and visually format HTML elements on a web page.</p>
            <p>ANGULAR /Typescript - A framework for building scalable, component-driven web applications.</p>
            <p>BOOTSTARP -The popular CSS framework for building responsive and mobile-first web interfaces quickly and easily.</p>
            <p>TAILWIND - is a utility-first CSS framework for rapidly building custom, modern user interfaces.</p>
          

            </div>
        </motion.div>


         <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            // style={box}
            className="motion_div_1"
        >
            <div className="m-6">

            <h5>Database</h5><br></br>
            <p>SQL - The standard markup language used to create and structure web pages.</p>

            </div>
        </motion.div>

     <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            // style={box}
            className="motion_div_2"
        >
            <div className="m-6">

            <h5>StateMangement</h5><br></br>
            <p>NGRX - A reactive state management library for Angular based on the Redux pattern using RxJS.</p>

            </div>
        </motion.div>


  <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            // style={box}
            className="motion_div_3"
        >
            <div className="m-6">

            <h5>TOOLS</h5><br></br>
            <p>Postman - A popular API testing and development tool that allows you to build, test, and document RESTful APIs with ease.</p>
            <p>ALM - A process and set of tools used to manage the entire lifecycle of a software application—from planning, development, testing, and deployment to maintenance.</p>
            <p>GIT - A distributed version control system used to track changes in source code and collaborate with multiple developers.</p>
            <p>Browser DevTools - These are built-in tools in web browsers that help developers inspect, debug, and optimize web pages and applications.</p>
            </div>
        </motion.div>



</div>


        </div>
    )


}
export default Skills_Cert;