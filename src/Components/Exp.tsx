import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { AnimatePresence, motion } from "motion/react"


function Experience(){

    const nav = useNavigate();

    const location = useLocation();
    const state = location.state

      const [isVisible, setIsVisible] = useState(false)



      const container: React.CSSProperties = {
       display: "flex",
  flexDirection: "column",
  alignItems: "center", 
  width: "100%",
  minHeight: "300px",
  position: "relative",
  marginTop: "40px" 

   

}

const box: React.CSSProperties = {
    width: "50vw",
    height: "auto",
    backgroundColor: "#0cdcf7",
    borderRadius: "10px",
    position:"absolute",
    top:"90%"
}

const button: React.CSSProperties = {

    width: "20vw",
  backgroundColor: "#0cdcf7",
  borderRadius: "10px",
  padding: "10px 20px",
  color: "#0f1115",
  marginBottom: "20px",
  alignSelf: "center",  
  position:"absolute",
    top: "70%"
 
}

    return(
        <div className="work_div">

                 <div className='icon' onClick={()=>nav(-1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left-square" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
</svg>
</div>
          
            <div className="text-center font-bold">
            

            <h1 className="input_show pt-16">
                
<TypeAnimation sequence={[`Hi ${state.username}, Let's see my Experience......`]}
        wrapper="span"
        cursor={false}
        repeat={1}/>    
                 
                 </h1>

</div>


<div className="bg-[#0cdcf7]/50 p-4 w-1/2 my_exp">

<div>
    <h1 className="text-2xl font-bold">Experience</h1>

    <p className="mt-2">
I am a Frontend Developer with 2.8 years of experience at Tata Consultancy Services, specializing in Angular and TypeScript for building dynamic, scalable, and responsive web applications. I have been actively involved in the development and maintenance of B2B and B2C transaction modules for a leading telecommunication client, delivering high-quality solutions aligned with business needs.    </p>

    </div>

</div>




  <div style={container}>


         <motion.button
                style={button}
                onClick={() => setIsVisible(!isVisible)}
                whileTap={{ y: 1 }}
            >
                {isVisible ? "Close" : "Show Responsibilities"}
            </motion.button>
            <AnimatePresence initial={false}>
                {isVisible ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        style={box}
                        key="box"
                    ><div>
                        <ul className="pt-6">
                          <li>  Developing feature-rich UI components using Angular, TypeScript, and NgRx</li>
                               <li> Writing clean, modular, and maintainable code with TypeScript</li>
                               <li> Using Git for version control and collaborative development</li>
                               <li> Performing data handling and backend communication using basic SQL</li>
                                <li> Debugging and optimizing applications using Browser DevTools</li>
                           <li> Planning and conducting knowledge transfer (KT) sessions for junior team members</li>
                           <li>Creating and maintaining technical documentation for clients to ensure smooth handovers and transparency</li>


                        </ul>
                        </div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
       
        </div>


        </div>
    )
}
export default Experience;