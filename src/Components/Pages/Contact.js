import React, { useState } from 'react'
import '../Styles/Contact.css'
import Navbar from './Navbar'
import Footer from './Footer'
import menu  from '../svg/menu.svg'
import Navbar2 from './Navbar2'
import { Base_url } from '../Link'
import axios from "axios"

const Contact = () => {
  const[Name , setName] = useState("")
  const[Email , setemail] = useState("")
  const[Number , setnumber] = useState("")
  const[Message , setmessage] = useState("")

  const conttactinfo =async()=>{
 try {
  const result = await axios.post(`${Base_url}/api/travelcontact` , {
    Name : Name,
    Number:Number,
    Email : Email,
    Message:Message
   
  })
  alert("Infomation send successfully")
 } catch (error) {
  alert(error.message)
 }

 
  }

  return (
    <>
    <div className='con1'>
        <div className='con2'>
         
       <Navbar2/>
       <div className='con3'>
            <div className='con003'>

            <div className='con0031'>
            <div className='con4'> GET IN TOUCH <br></br>WITH US</div>
    <br></br>
<div className='con5'>Let Kane Smith Travels Be Your Guide
<br></br>
<br></br>
Ooty whispers your name, promising emerald lakes, rolling hills, and the scent of pine-kissed air. But how do you capture its essence, its hidden joys, its whispered secrets? It's simple: get in touch with Kane Smith Travels.
<br></br>
<br></br>

We're not just travel agents. We're Ooty whisperers. For generations, we've breathed its air, known its paths, and felt its pulse. We'll craft your Ooty escape, be it a romantic getaway, a family adventure, or a solo soul-quest.

</div>
            </div>

            <div className='con0032'>
              
              <hr></hr>
              <div className='con6'>
              <div className='con7'>
              <div className='con71'>Contact</div>
              <div className='con72'>Tel.+91 245 151 5151</div>
              <div className='con72'>WhatsApp.+91 245 151 5151</div>
              <div className='con72'>Email: enquiry@kanesmith.com</div>
              
              </div>
              <div className='con8'>
              <div className='con81'>Location</div>
              <div className='con82'>Cursus morbi ullamcorper vulputate sed. Nascetur morbi vel id suspendisse sit.</div>
              
              </div>
              </div>
              
              
              <hr></hr>
                          </div>


                          </div>

            <div className='con0033'>
            <div className="p47">
         <label className="p471">Details</label>
         <div className="p48">
         <input placeholder="Full Name*"  value={Name} onChange={(e)=>setName(e.target.value)} className="p481"  id='p481'></input>
         <input placeholder="Phone*" value={Number} onChange={(e)=>setnumber(e.target.value)} className="p482 "  id='p481'></input>
         </div>
         <input placeholder="Email*" value={Email} onChange={(e)=>setemail(e.target.value)} className="p483"  id='p481'></input>

     </div>


     
   <div className="p49" id='p49'>
     <div className="p491">
       <label className="p4911">Message</label>
       <textarea id="p4912" name="w3review" value={Message} onChange={(e)=>setmessage(e.target.value)} rows="8" cols="50" className="p4912" placeholder="Please Write Your Requests in English."></textarea>
     </div>
   </div>
      
    
    <div className="p50">
       <button className="p501" onClick={conttactinfo}>Enquire Now</button>
    </div>


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

export default Contact