import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='header'>
        
        <div className='navbar'>
            
            <div className='navbar--logo--div'>
               <img className='navbar--logo' src='https://1.bp.blogspot.com/-5G1s0KCWZ1o/XpkW3a1koBI/AAAAAAAAXjk/2o0m96_3cKUumIENJG1s58pQ13J0Gk5DACLcBGAsYHQ/s1600/PoundedYamandEgusiSoupSwallow.jpg' alt='' />
            </div>
            
            <ul className='navbar--ul'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/menu'>Menu</Link></li>
                <li><Link to='/about'>About Us</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
              
        </div>

    </div>
  )
}
