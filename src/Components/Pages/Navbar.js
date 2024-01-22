import React from 'react'
import '../Styles/Navbar.css'
import menu  from '../svg/menu.svg'

const Navbar = () => {
  return (
  <>
  <nav>
    <div className='nav1'>
            <div className='nav01'> <a href='/'>Kane Smith Travels</a></div>      
            <div className='nav02'>
                <div className='nav021'>
                <a href='/contact'>+91 6382 684 233</a></div>
                <div className='nav022'>
                  <a href='/menu'> <button className='menubtn'>Menu</button></a>
                  </div>
            </div>
            <div className='nav03'>
            <a href='/menu'><img src={menu}></img></a>
                {/* <button className='menubtn1' ><img src={menu}></img></button> */}
            </div>

    </div>
  </nav>
  </>

  )
}

export default Navbar