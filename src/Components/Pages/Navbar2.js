import React from 'react'
import '../Styles/Navbar2.css'
import menu  from '../svg/menu.svg'

const Navbar2 = () => {
  return (
  <>
  <nav>
    <div className='nav1a'>
            <div className='nav01aa'> <a href='/'>Kane Smith Travels</a></div>      
            <div className='nav02a'>
                <div className='nav021a'>
                <a href='/contact'>+91 6382 684 233</a></div>
                <div className='nav022a'>
                  <a href='/menu'> <button className='menubtna'>Menu</button></a>
                  </div>
            </div>
            <div className='nav03a'>
            <a href='/packages'><img src={menu}></img></a>
                {/* <button className='menubtn1' ><img src={menu}></img></button> */}
            </div>

    </div>
  </nav>
  </>

  )
}

export default Navbar2