import React from 'react'
import '../Styles/Aboutus.css'
import Navbar from './Navbar'
import arrow from '../svg/arrow.svg'
import Marquee from "react-fast-marquee";
import star from '../svg/star.svg'
import Footer from './Footer';


const Aboutus = () => {
  return (
    <>
      <div className='aboutus'>
        <div className='aboutus1'>

           <div className='ab2'>
                <Navbar/>
                <div className='cmid'>
                <div className='ab01' >About Us</div>
                </div>
         </div>

         <div className='c2'>
         <div className='c21'><a href='/plan'> Plan Your Trip With Kane Smith Travels </a> </div>
            <div className='c22'><a href='/plan'><img src={arrow} className='arrimg'/></a></div>
         </div>
         <hr></hr>

        <div className='ab4'>
            <div className='ab41'>
            <div className='ab42'>ABOUT KANE SMITH</div>
            <div className='ab43'>Your Trusted Partner for Ooty Adventures</div>
       
            <div className='ab5' id='ab5'>
        <div className='ab51'>
            <img src='/img/car2.png'></img>
        </div>
      </div>
            <div className='ab44'>

            Welcome to Kane Smith Travels, where we take pride in being your foremost choice for unparalleled adventures in the captivating realm of Ooty - renowned as one of India's most enchanting destinations.
            <br></br>
            <br></br>
Nestled amidst the scenic Nilgiri Hills of South India, Ooty beckons travelers with its unrivaled beauty and diverse experiences, and Kane Smith Travels stands tall as the pinnacle of exceptional travel services in this breathtaking locale.
<br></br>
<br></br>

With a legacy of expertise and an unwavering passion for travel, we specialize in crafting tailor-made experiences that encapsulate the very essence of Ooty's allure. Be it seeking solace in serene tea estates, embarking on thrilling treks through the verdant hills, or delving into the town's rich cultural heritage, our offerings encompass the full spectrum of Ooty's wonders.
<br></br>
<br></br>

Our seasoned team of travel aficionados possesses an unparalleled understanding of Ooty's nuances, ensuring meticulous planning and flawless execution for every aspect of your journey. From handpicking accommodations that range from cozy hideaways to opulent resorts to arranging exhilarating outdoor escapades such as hiking, wildlife safaris, and tranquil boat rides across picturesque lakes, we aim to elevate your Ooty adventure to unprecedented heights.
<br></br>
<br></br>

At Kane Smith Travels, we are committed to crafting enduring memories and fostering genuine connections with the destination. Let us guide your journey through the wonders of Ooty, creating indelible moments that etch themselves into the fabric of your life.
            </div>
            </div>
        </div>

        
      <div className='ab5' id='ab6'>
        <div className='ab51'>
            <img src='/img/car2.png'></img>
        </div>
      </div>


      <div className='c5' id='abcars'>
<div className='c51' id='abcars2'>

<div className='c051'>
        <div className='c052'>Our Vehicles</div>
        <br></br>
        <div className='c053'> Every Vehicle Tells a Tale</div>
</div>
</div>


<div className='c52' id='abcars1'>
    <div className='c521'>
      
    <div className='c5211'>
    <div className='c056'> <img src='/img/car21.png'></img></div>
    <div className='c057'>
      <div className='c054'>Swift Dzire</div>
      </div>
     </div>


    <div className='c5211'>
    <div className='c056'> <img src='/img/car22.png'></img></div>
    <div>
    <div className='c054'>Toyota Etios</div>
     
</div>
    </div>
 <div className='c5211'>
    <div className='c056'> <img src='/img/car23.png'></img></div>
    <div>
    <div className='c054'>Swift Dzire</div>
     
</div>
    </div>
    <div className='c5211'>
    <div className='c056'> <img src='/img/car24.png'></img></div>
    <div>
    <div className='c054'>Toyota Innova</div>
     
</div>
    </div>
</div>
  

  </div>   
  </div>       
    
    

  <div className='c6'>
 <div className='c051'>
        <div className='c052'>Testimonials</div>
        <br></br>
        <div className='c053'>What Our Guests Say About Ooty with Us</div>
</div>
  <div className='c61'>
    
  <Marquee  >

        <div className='ccc'>
          <img src={star}></img>
          
          <div className='c66'>"Kane Smith Travels offers exceptional cab services. Skilled drivers make the journey enjoyable and safe. A reliable choice for seamless travel experiences, ensuring comfort and trust in every ride."
 </div>
         </div>
        <div className='gap'>ccc</div>
         <div className='ccc'>
          <img src={star}></img>

          <div className='c66'>"Kane Smith Travels impresses with top-notch cab services. Expert drivers navigate smoothly, making the journey comfortable and secure. A trusted option for reliable transportation and a pleasant travel experience."
</div>
         </div>
         <div className='gap'>ccc</div>

         <div className='ccc'>
          <img src={star}></img>

          <div className='c66'>"Experience excellence with Kane Smith Travels. Their cab services are outstanding, with skilled drivers ensuring a safe and enjoyable ride. A reliable choice for quality transportation and a delightful travel experience."</div>
         </div>
         <div className='gap'>ccc</div>


      
</Marquee>
  </div>

</div>
<div className='gap'> 

</div>

<Footer/>

        </div>
      </div>
    </>
  )
}

export default Aboutus