import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import '../App.css';
import '../index.css';
import { Link, Route, Router, useLocation, useNavigate } from 'react-router-dom';
import { All_Variables } from '../Variables';

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
        <h1 className='name text-xs md:text-xl'>{All_Variables.Name}</h1>
      </div>
      <div className="sub_sub_1 font-bold text-white text-center">
      <button onClick={()=>nav('/About',{state:{username:state.userName}})} className='name text-xs md:text-xl'>
            {All_Variables.About_me}
          </button>  
            <div className="h-1 mb-4 w-full mx-auto  bg-gray-400 rounded-full" />

           </div>
           

<div className="sub_sub_1 font-bold text-white text-center">
    <button onClick={()=>nav('/Education',{state:{username:state.userName}})}  className='name text-xs md:text-xl' >
            {All_Variables.Education_head}
          </button>  
            <div className="h-1 mb-4 w-full mx-auto  bg-gray-400 rounded-full" />

           </div>



           <div className="sub_sub_1 font-bold text-white text-center">
    <button onClick={()=>nav('/Skills_Cert',{state:{username:state.userName}})} className='name text-xs md:text-xl' >
            {All_Variables.skill_cert}
          </button>  
            <div className="h-1 mb-4 w-full mx-auto bg-gray-400 rounded-full" />

           </div>


           <div className="sub_sub_1 font-bold text-white text-center">
    <button onClick={()=>nav('/Experience',{state:{username:state.userName}})}  className='name text-xs md:text-xl' >
            {All_Variables.work_Experience}
          </button>  
            <div className="h-1 mb-4 w-full mx-auto bg-gray-400 rounded-full" />

           </div>

          </div>

          
      </div>



  
           
    </div>





  );
}



 

export default Home;
