import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import '../App.css';
import '../index.css';
import { Link, Route, Router, useLocation, useNavigate } from 'react-router-dom';

function Home() {






  const [popup,setPopup] = useState(false)
const nav = useNavigate();
const [name,setName] = useState('')

const location = useLocation();
  const state = location.state




  return (
    
 
    <div  className="Portfolio_main_div flex justify-end">


           <div className='icon' onClick={()=>nav(-1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left-square" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
</svg>
</div>
<div className=' bg-orange-400 w-2/5 h-full sub_main_div'>

<div className='sub_text'>

      <div className="sub_sub font-bold text-white text-center">
        <h1 className='name text-xs md:text-xl'>VENKATA RAMANA SWAMI MADDULA</h1>
      </div>
      <div className="sub_sub_1 font-bold text-white text-center">
    {/* <button onClick={()=>setPopup(true)} className='name' > */}
      <button onClick={()=>nav('/About',{state:{username:state.userName}})} className='name text-xs md:text-xl'>
            About Me
          </button>  
            <div className="h-1 mb-4 w-full mx-auto  bg-gray-400 rounded-full" />

           </div>
           

<div className="sub_sub_1 font-bold text-white text-center">
    <button onClick={()=>nav('/Education',{state:{username:state.userName}})}  className='name text-xs md:text-xl' >
            Educational Background
          </button>  
            <div className="h-1 mb-4 w-full mx-auto  bg-gray-400 rounded-full" />

           </div>



           <div className="sub_sub_1 font-bold text-white text-center">
    <button onClick={()=>nav('/Skills_Cert',{state:{username:state.userName}})} className='name text-xs md:text-xl' >
            skills & Certifications
          </button>  
            <div className="h-1 mb-4 w-full mx-auto bg-gray-400 rounded-full" />

           </div>


           <div className="sub_sub_1 font-bold text-white text-center">
    <button onClick={()=>nav('/Experience',{state:{username:state.userName}})}  className='name text-xs md:text-xl' >
            work Experience
          </button>  
            <div className="h-1 mb-4 w-full mx-auto bg-gray-400 rounded-full" />

           </div>

          </div>

          
      </div>
{/* {popup && <AboutPopup popupValue={()=>setPopup(false)}/>} */}



  
           
    </div>





  );
}

// interface props{
//   popupValue: ()=> void;

// }

// function AboutPopup({popupValue}:props){

// const [name,setName]= useState('')
// const nav = useNavigate();
//  const GotoAbout =()=>{
// nav('/',{state:{username:name}})
//  }


//   return(
//       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//               <div className="bg-white p-6 rounded-xl shadow-xl w-96 relative">
//                 <button onClick={()=>popupValue()} className='absolute right-4'>x</button>
//             <h1 className='mt-5'>Hi....</h1>
//             <p>Please enter Your Details</p>
//             <input   className=" my-5 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               type='text' placeholder='Please enter you name ' onChange={(e)=>setName(e.target.value)}/>
//             <div >
//             <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200" onClick={GotoAbout}>Let's Go...</button>
//             </div>
// </div>
// </div>
//   );
// }



 

export default Home;
