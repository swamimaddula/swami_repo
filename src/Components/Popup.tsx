import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Popup(){
        const [popup,setPopup] = useState(false);
        useEffect(()=>{
  setPopup(true);
})

return(
    
    <div  className="Portfolio_main_div flex justify-end">
{popup && <Apppopup poptrue={()=> setPopup(false)}/>}



    </div>
);
}




interface voidpop{
   poptrue:()=>void;

}

function Apppopup({poptrue}:voidpop){
  const [name,setName] = useState('Bro')

  const Goto=()=>{
    
  }

  const nav = useNavigate();
  return(
     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
           <div className='icon' onClick={()=>nav(-1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left-square" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
</svg>
</div>
                    <div className=" bg-white p-6 rounded-xl shadow-xl w-96 relative">
<h1 className='my-6'>Hello.....</h1>
<p className='my-2'>Can i know your name</p>
<input type='text' onChange={(e)=>setName(e.target.value)} className=" my-5 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder='Input your name '/>

<div>

     <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200" onClick={()=>{nav('/Home',{state:{userName:name}})}}>Let's Go...</button>

</div>
</div>

    </div>
  );

}

export default Popup;