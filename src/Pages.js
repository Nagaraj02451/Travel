import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Loadingpage from './Components/Pages/Loadingpage';
import Navbar from './Components/Pages/Navbar';
import Navbar2 from './Components/Pages/Navbar2';
import Footer from './Components/Pages/Footer';
import Aboutus from './Components/Pages/Aboutus';
import Packages from './Components/Pages/Packages';
import Plan from './Components/Pages/Plan';
import Contact from './Components/Pages/Contact';
import Menu from './Components/Pages/Menu';



const Pages = () => {
  return (
 <>
<BrowserRouter>
   <Routes>
      
      <Route path='/navbar' element={<Navbar/>}></Route>
      <Route path='/navbar2' element={<Navbar2/>}></Route>
      <Route path='/footer' element={<Footer/>}></Route>
      <Route path='/menu' element={<Menu/>} ></Route>

      <Route path='/' element={<Loadingpage/>}></Route>
      <Route path='/aboutus' element={<Aboutus/>}></Route>
      <Route path='/packages' element={<Packages/>}></Route>
      <Route path='/plan' element={<Plan/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
   </Routes>
</BrowserRouter>
 </>
  )
}

export default Pages