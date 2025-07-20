import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './page/Home';
import { Login } from './page/Login';
import {Register} from './page/Register';
import {ClubRegister} from './page/ClubRegister';
import ClubHome from './page/ClubHome';   
import EventsDashboard from './page/Userhome';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/club-register' element={<ClubRegister />} />
      <Route path='/club-home' element={<ClubHome />} />
      <Route path='/events-dashboard' element={<EventsDashboard />} />
    </Routes>
    </>
  )
}

export default App
