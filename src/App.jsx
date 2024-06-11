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
import Awards from './component/Aditya/Awards';
import {Routes, Route} from 'react-router-dom';
import PurchasedCoursesPage from './component/AsthaYadav/purchasedCoursesPage';
import PaymentForm from './component/Nousheen/paymentForm';
import HelpPage from './component/Nousheen/helpPage';
import CourseDetail from './component/Aditya/courseDetail';
import AsthaRegister from './component/AsthaYadav/registration';

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
      {/* <Route path='/test' element={<Test/>}/> */}
      {/* <Route path='/awards' element={<Awards/>}/> */}
      <Route path='/PurchasedCoursesPage' element={<PurchasedCoursesPage/>}/>
      {/* <Route path='/PurchasedComponent' element={<PurchasedComponent/>}/> */}
      <Route path='/PaymentForm' element={<PaymentForm/>}/>
      <Route path='/HelpPage' element={<HelpPage/>}/>
      <Route path='/Cdetail/:id' element={<CourseDetail/>}/>
      <Route path='/AsthaRegister' element={<AsthaRegister/>}/>
    </Routes>
    </>
  )
}

export default App
