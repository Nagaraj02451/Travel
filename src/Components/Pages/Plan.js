import React, { useState,useReducer } from "react";
import '../Styles/Plan.css'
import Navbar2 from './Navbar2'
import { Base_url } from '../Link'
import axios from "axios"

const Plan = () => {
 const [count,setcount]=useState(0);
 const [countTwo,setcountTwo]=useState(0);
 const[Name , setName] = useState("")
 const[Email , setemail] = useState("")
 const[Number , setnumber] = useState("")
 const[Message , setmessage] = useState("")

 const conttactinfo =async()=>{
try {
 const result = await axios.post(`${Base_url}/api/travelenquiry` , {
   Name : Name,
   Number:Number,
   Email : Email,
   Message:Message,
   Adult:count,
   Child:countTwo
  
 })
 alert("Infomation send successfully")
} catch (error) {
 alert(error.message)
}


 }


 const increment =()=>{
  setcount((count)=>
   count + 1
  )
  // adult(count + 1)
  }
  
  const decrement =()=>{
  setcount(count-1)
  if(count === 0){
    setcount(0)
    // alert("Only 3 Members allowed")
  }
  // adult(count -1)
}


const incrementTwo =()=>{
  setcountTwo((countTwo)=>
   count + 1
  )
  // adult(count + 1)
  }
  
  const decrementTwo =()=>{
  setcountTwo(countTwo-1)
  if(count === 0){
    setcount(0)
    // alert("Only 3 Members allowed")
  }
  // adult(count -1)
}

  return (
    <>
    <div className='p1'>
        <div className='p2'>
        <Navbar2/>
        <div className='p01'>
         

             <div className="p3">
                <div className="p31"><img src='/img/5.png'></img></div>
             </div>

             <div className="p4">
                <div  className="p41" >

                  <div  className="p42">
                  <div className="p421">Plan A Trip</div>
                  <div className="p422">Lorem ipsum dolor sit amet consectetur. Viverra eu quis nisi sed proin amet quam at. Sed id sit rutrum ac orci eu facilisi dui volutpat.</div>

                  </div>

                  <div  className="p43">
                    <div className="p431">
                          <label className="p4311">NUMBER OF TRAVELLERs</label>

                           <div className="p432">
                             <div className="p44">
                              <div className='p45'>
                              <div className="adubtn01">
                     <div className="adubtn">
                      
                          <div className='adubtn1' onClick={decrement} >-</div>
                         <div className='ct1'>{count}</div>
                         <div className='adubtn2'   onClick={increment} >+</div>
                          
                     </div>
                         <div className="adu1">Adults</div>
                      </div>
                    
                       <br></br>

                       <div className="adubtn02">
                       <div className="chbtn"> 
                           <div className='chbtn1' onClick={decrementTwo}>-</div>
                          <div className='ct2'>{countTwo}</div>
                          <div className='chbtn2'  onClick={incrementTwo}  >+</div>
                     </div>
                         <div className="adu2">Children 5-11 yrs</div>
                       </div>
      


</div>
</div>
                        
                       </div>
                       

                    <div className="p46">
                      <div className="p47">
                          <label className="p471">Details</label>
                          <div className="p48">
                          <input placeholder="Full Name*" value={Name} onChange={(e)=>setName(e.target.value)} className="p481"></input>
                          <input placeholder="Phone*" value={Number} onChange={(e)=>setnumber(e.target.value)} className="p482"></input>
                          </div>
                          <input placeholder="Email*" value={Email} onChange={(e)=>setemail(e.target.value)} className="p483"></input>

                      </div>
                    </div>


                    <div className="p49">
                      <div className="p491">
                        <label className="p4911">Message</label>
                        <textarea id="w3review" name="w3review" value={Message} onChange={(e)=>setmessage(e.target.value)} rows="8" cols="50" className="p4912" placeholder="Please Write Your Requests in English."></textarea>
                      </div>
                    </div>
                       
                     
                     <div className="p50">
                        <button className="p501"  onClick={conttactinfo}>Enquire Now</button>
                     </div>

                     <br></br>
                     <br></br>
                     <br></br>
                    </div>
      
                  </div>

                </div>
             </div>
        </div>

        </div>
    </div>
    
    </>
  )
}

export default Plan