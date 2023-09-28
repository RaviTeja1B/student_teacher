import './App.css'
// import Sidebar from './components/Sidebar'
// import {  Routes, Route, useNavigate } from 'react-router-dom'
// import Home from './components/Pages/Home'
// import Dashboard from './components/Pages/Dashboard'
// import Students from './components/Pages/Students'
// import ManageStudents from './components/Pages/ManageStudents'
// import Teachers from './components/Pages/Teachers'
// import ManageTeachers from './components/Pages/ManageTeachers'
// import { useState } from 'react'
// import Navbar from './components/Navbar'

import React,{useState} from 'react';
import AuthContext from './context/AuthContext';
import Navigation from './components/Navigation';



function App() {



  const [auth,setAuth]=useState(false);






  return (
    <><div className='Header'>
          <a href = 'https://github.com/' target = '_blank' alt='header' >Ravi</a>
   </div>
   <div className="App">
      <header className="App-header">

        <AuthContext.Provider value={{
          isLoggedIn: auth,
          setLoggedIn:(value)=>{
            setAuth(value);
          }
        }}>
          <Navigation />
        </AuthContext.Provider>

      </header>
    </div>

    
</>

  )
}

export default App