import { useState } from 'react'
import './App.css'
import Home from './component/home';
import Login from './component/Priyanshu2/login';
import Register from './component/Priyanshu2/register';
import CourseComponent from './component/Aditya/CourseComponent';
import SingleCourse from './component/Aditya/SingleCourse';
import Blogs from './component/Aditya/Blogs';
import About from './component/Aditya/About';
import Test from './component/Aditya/Test';
import {Routes, Route} from 'react-router-dom';

function App() {
  
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/courses' element={<CourseComponent/>}/>
      <Route path="/course/:id" element={<SingleCourse />} />
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/test' element={<Test/>}/>
    </Routes>
    </>
  )
}

export default App
