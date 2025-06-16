import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import { Link, Route,HashRouter as Router, Routes, useNavigate } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Popup from './Components/Popup';
import Skills_Cert from './Components/Skills&Cert';
import Education from './Components/Education';
import Experience from './Components/Exp';



function App() {
return (
<div>
<Router>
  <Routes>
    <Route path='/' element={<Popup/>}/>
        <Route path='/Home' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
      <Route path='/Skills_Cert' element={<Skills_Cert/>}/>
        <Route path='/Education' element={<Education/>}/>
          <Route path='/Experience' element={<Experience/>}/>

  </Routes>
</Router>
{/* <footer className='bg-white'>
  <p>swami :
  <a className='text-blue-700' href="mailto:hege@example.com">Swamimaddula9@gmail.com</a></p>
</footer> */}

</div>

  );
}


export default App;
