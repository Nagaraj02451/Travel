import React from 'react'
import '../Styles/Footer.css'
import fb from '../svg/fb.svg'
import insta from '../svg/insta.svg'
import xx from  '../svg/xx.svg'
 
const Footer = () => {
  return (
    <div className='f1'>
        <div className='f2'>

           <div className='f3'>
            
           <div className='f31'>
            <div  className='f311'>Kane Smith Travels</div>
            <br></br>
            <div  className='f312'>Welcome to Kane Smith Travels, your ultimate destination for unparalleled adventures in Ooty. With our expertise and passion for travel, we curate tailored experiences that capture the essence of Ooty's beauty.

</div>
            <br></br>
             <div  className='f313'>
              
              <img src={fb}></img>
              <img src={xx}></img>
             <a href='https://www.instagram.com/kane_smith_travals162628?igsh=MTZ6NW82amZxd201OA=='><img src={insta}/>
              </a>
              </div>
           </div>

           <div className='f32'>
            
            <div className='f321'>Menu</div>
            <br></br>

            <div className='f322'>About</div>
            <br></br>

            <div className='f322'>Packages</div>
            <br></br>

            <div className='f322'>Contact</div>

           </div>

           <div className='f33'>
            <div className='f331'>Contact</div>
            <br></br>

            <div className='f332'><a>Tel.+91 6382 684 233</a></div>
            <br></br>

            <div className='f332' ><a href='https://wa.me/916382684233'>WhatsApp.+91 6382 684 233</a></div>
            <br></br>

            <div className='f332'><a href=''>Email: enquiry@kanesmith.com</a></div>
           </div>

           <div className='f34'>
           <div className='f341'><div className='f342'><a href='/plan'>Plan A Trip</a></div></div>

           </div>

            </div >

            <hr className='hr'></hr>
            
            <div className='f4'>
             <div  className='f41'>©2023</div>
             <div  className='f41'>Site map</div>

            </div>

        </div>
    </div>
  )
}

export default Footer