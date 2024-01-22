import React from 'react'
import '../Styles/Loadingpage.css'
import Navbar from './Navbar'
import arrow from '../svg/arrow.svg'
import star from '../svg/star.svg'
import circle from '../svg/circle.svg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Marquee from "react-fast-marquee";
import Footer from './Footer'



const Loadingpage = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 500 },
          items: 1.5
        },
        desktop: {
          breakpoint: { max: 500, min: 0 },
          items: 1
        },
       

        }
     
  return (
   <>
   <div className='fullpage'>
    <div className='fullpage1'>


         <div className='c1'>
             <Navbar/>
             <div className='cmid'>
            
             <div className='c11'>Create memories that last a lifetime. Your Ooty adventure awaits.</div>
            <br></br>
            <a href='/plan'><div className='c12'><div className='c121'> Plan A Trip</div></div></a>
             </div>
         </div>



         <div className='c2'>
             <div className='c21'><a href='/plan'> Plan Your Trip With Kane Smith Travels </a> </div>
            <div className='c22'><a href='/plan'><img src={arrow} className='arrimg'/></a></div>
         </div>
         <hr></hr>


         <div className='c3'>
                 <div className='c31'>

        <div className='c031'>
        <div className='c032'>Explore Nilgiris</div>
        <br></br>
        <div className='c033'>Your Nilgiris journey starts here.</div>
        
        </div>
         <Carousel responsive={responsive} className='kopkopkopkop'>

<div className='slide1' id='p2'>
    <div className='c03' >
    <div className='c32'  id='c31'><div className='c321'><a href='https://wa.me/916382684233'>Plan A Trip</a></div></div>
     </div>
     <div className='c33'>
     <div className='c34'> Ooty</div>
     <br></br>
     <div className='c35'>Dhoddabetta Peak, Tea Factory & Museum, Ooty Lake, Thread Garden, Rose Garden, Arboretum, Choco Story, Science Museum(stone house), Botanical Garden, Rose Garden, Stephen Church ( 200) years oldest church and Much More.</div>
     </div>
</div>   
<div className='slide1' id='p3'>
    <div className='c03' >
    <div className='c32' id='c32'><div className='c321'><a href='https://wa.me/916382684233'>Plan A Trip</a></div></div>
     </div>
     <div className='c33'>
     <div className='c34'> Coonoor</div>
     <br></br>
     <div className='c35'>Ketty Valley View, Madras regimental outer view ( army museum must visit), Sims Park, 2500 acres of tea estate view, Lambs Rock, Dolphin Nose Viewpoint, MRC outer view, Sleeping Lady & Catherine waterfalls views</div>
     </div>
</div>
  <div className='slide1'   id='p4'>
    <div className='c03'>
    <div className='c32'  id='c32'><div className='c321'><a href='https://wa.me/916382684233'>Plan A Trip</a></div></div>
     </div>
     <div className='c33'>
     <div className='c34'> Customised Pack</div>
     <br></br>
     <div className='c35'>
                <ul>
                <li>Ooty - coonoor Package</li>
                <li>Ooty - Pykara Package</li>
                <li>Pykara - Mudhumalai Package</li>
                </ul>
     </div>
     </div>
</div> 
 <div className='slide1'  id='p5'>
    <div className='c03'>
    <div className='c32'  id='c32'><div className='c321'><a href='https://wa.me/916382684233'>Plan A Trip</a></div></div>
     </div>
     <div className='c33'>
     <div className='c34'>Mudumalai Wildlife</div>
     <br></br>
     <div className='c35'>Mudumalai Wildlife Tiger Reserve forest, Khallatti Waterfalls, Masinagudi, Moyar dam, Tiger and Elephant crossing spots</div>
     </div>
</div>  
<div className='slide1'  id='p6'>
    <div className='c03'>
    <div className='c32'  id='c32'><div className='c321'><a href='https://wa.me/916382684233'>Plan A Trip</a></div></div>
     </div>
     <div className='c33'>
     <div className='c34'> Avalanche</div>
     <br></br>
     <div className='c35'>Avalanche Lake Outer, Government Jeep Safari, Emerald Outer View, Triple Museum, Karnataka Garden.</div>
     </div>
</div>    
<div className='slide1'  id='p7'>
    <div className='c03'>
    <div className='c32'  id='c32'><div className='c321'><a href='https://wa.me/916382684233'>Plan A Trip</a></div></div>
     </div>
     <div className='c33'>
     <div className='c34'> Kodaikanal sights</div>
     <br></br>
     <div className='c35'>Silver Falls, Government Museum, Coaker's Walk, Rose Garden, Pillar's Rock, Green Valley Viewpoint, Boat House & Lake, Bryant Park, Vinayagar Temple, Pine Forest, Guna Cave.</div>
     </div>
</div>  

<div className='slide1'  id='p8'>
    <div className='c03'>
    <div className='c32'  id='c32'><div className='c321'><a href='https://wa.me/916382684233'>Plan A Trip</a></div></div>
     </div>
     <div className='c33'>
     <div className='c34'>Mysore</div>
     <br></br>
     <div className='c35'>Chamundeshwari Temple, Sandalwood Factory, Fish Aquarium, Mysore Zoo, St. Philomena's Church, Mysore Palace, Brindavan Gardens with water lighting.


</div>
     </div>
</div>  
</Carousel>
</div>
         </div>               
    


<div className='c4'>
    <div className='c41'>

     <div className='c041'>
        <div className='c042'>ABOUT KANE SMITH</div>
        <br></br>
        <div className='c043'>Your Trusted Partner for Ooty Adventures.</div>
        </div>

        <div className='c42'>
    
                 
              <div className='c43'>
                <div className='c431'>
                    <div className='c43412'><img src='/img/car1.png'></img></div></div>
                <div className='c432'>
                   <div className='c4321'> Welcome to Kane Smith Travels, where we take pride in being your foremost choice for unparalleled adventures in the captivating realm of Ooty - renowned as one of India's most enchanting destinations.
                   <br></br>
                   <br></br>
Nestled amidst the scenic Nilgiri Hills of South India, Ooty beckons travelers with its unrivaled beauty and diverse experiences, and Kane Smith Travels stands tall as the pinnacle of exceptional travel services in this breathtaking locale..</div>
                 <br></br>
                  <br></br>

              <div className='c4322'><div className='c43221'>Read More</div></div>
                </div>
              </div>
              
      
   
        </div>
      

    </div>
</div>     

    
 
<div className='c5'>
<div className='c51'>

<div className='c051'>
        <div className='c052'>Ready-Made Ooty Adventures</div>
        <br></br>
        <div className='c053'>Explore our most popular packages, designed for different interests and travel styles.</div>
</div>
</div>


<div className='c52'>
    <div className='c521'>
      
    <div className='c5211'>
    <div className='c056'> <img src='/img/adv1.png'></img></div>
    <div className='c057'>
      <div className='c054'>Honeymoon Bliss</div>
      <div className='c055'>Romantic getaways with scenic views and luxurious stays.</div>
      </div>
     </div>


    <div className='c5211'>
    <div className='c056'> <img src='/img/adv2.png'></img></div>
    <div  className='c057'>
    <div className='c054'>Family Fun</div>
      <div className='c055'>Exciting activities and 
kid-friendly attractions for unforgettable memories.</div>
</div>
    </div>
 <div className='c5211'>
    <div className='c056'> <img src='/img/adv3.png'></img></div>
    <div  className='c057'>
    <div className='c054'>Adventure Seeker</div>
      <div className='c055'>Trekking, mountain biking, and exploring hidden corners of Ooty.</div>
</div>
    </div>
    <div className='c5211'>
    <div className='c056'> <img src='/img/adv4.png'></img></div>
    <div  className='c057'>
    <div className='c054'>Nature Lover</div>
      <div className='c055'>Explore stunning landscapes, waterfalls, and diverse flora and fauna.</div>
</div>
    </div>
</div>
  

  </div> 



</div>

<div className='c53'>
<div className='c531'><div className='c532'>
  <a href='/packages'>
  Find your perfect Ooty package now!
  </a>
 </div></div>

</div>


<div className='c7'>
  <div className='c71'>

    <div className='c711'>
        <div className='c7111'>What We Can Help You With</div>
        <div className='c7112'>Your Ooty journey, made seamless.</div>
    </div>

    <div className='c712'>
         <div className='c7122'>

         <div className='c7121'>
             <div className='c713'><img src='/img/clogo1.png'></img></div>
             <br></br>
             <div className='c714'>Cab Services</div>
           </div>
           <div className='c7121'>
             <div className='c713'><img src='/img/clogo2.png'></img></div>
             <br></br>

             <div className='c714'>Ooty Tour Packages</div>
           </div>
           <div className='c7121'>
             <div className='c713'><img src='/img/clogo3.png'></img></div>
             <br></br>

             <div className='c714'>Ooty Sightseeing</div>
           </div>
           <div className='c7121'>
             <div className='c713'><img src='/img/clogo4.png'></img></div>
             <br></br>

             <div className='c714'>Food & Accommodation</div>
           </div>

         </div>
          </div>
          <div className='c715'>
          <div className='c716'><div className='c717'><a href='/contact'>Contact us Today!</a></div></div>

</div>
       

  </div>
</div>
<br></br>
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

          <div  className='c66'>"Experience excellence with Kane Smith Travels. Their cab services are outstanding, with skilled drivers ensuring a safe and enjoyable ride. A reliable choice for quality transportation and a delightful travel experience." </div>
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

export default Loadingpage