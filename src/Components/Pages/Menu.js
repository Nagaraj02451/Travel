import React from 'react'
import menu1  from '../svg/menu1.svg'
import '../Styles/Menu.css'
import fb from '../svg/fb.svg'
import insta from '../svg/insta.svg'
import xx from  '../svg/xx.svg'
import Navbar2 from './Navbar2'

const Menu = () => {
  return (
    <div className='m1'>
        <div className='m2'>
        <nav className='navnav'>
    <div className='nav1'>
            <div className='nav01aa'> <a href='/' className='menulogo'>Kane Smith Travels</a></div>      
            <div className='nav02a'>
                <div className='nav021'>
                <a href='/contact'>+91 425 515 1515</a></div>
                <div className='nav022a'>
                  <a href='/menu'> <button className='menubtna'>Menu</button></a>
                  </div>
            </div>
            <div className='nav03a ' id='nav03a'>
            <a href='/' className='menu1'><img src={menu1}></img></a>
                {/* <button className='menubtn1' ><img src={menu}></img></button> */}
            </div>

    </div>
  </nav>
   
            <div className='m3'>

            <div className="m31">
                <div className="m311"><img src='/img/menu1.png'></img></div>
             </div>
             
            <div className='m32'>
            <div className="mini01">
              <hr></hr>
                <div className="mini011"><a href='/plan'>Plan A Trip</a></div>
                <hr></hr>


             </div>
              <div className='m321'>
              <div className='m323'><a href='/aboutus'>About</a></div>
              <br></br>
              <div className='m323'><a href='/packages'>Package</a></div>
              <br></br>

              <div className='m323'><a href='/contact'>Contact</a></div>
              </div>
               <div className='m322'>
                   
               <div  className='fluslogoa'>
                <div className='flusa'>Follow Us </div>
                {/* <br></br> */}
                <div className='fluslogo1a'>
                <img src={fb}></img><img src={xx}></img><img src={insta}></img>
                    
                </div>
                </div>

              
              
           <div className='f33a' id='con111'>
            <div className='f331a'>Contact</div>
           {/* <br></br> */}

            <div className='f332a'>Tel.+91 245 151 5151</div>
        

            <div className='f332a'>WhatsApp.+91 245 151 5151</div>
          

            <div className='f332a'>Email: enquiry@kanesmith.com</div>
           </div>

               </div>
             </div>

            </div>
                 

        </div>
    </div>
  )
}

export default Menu