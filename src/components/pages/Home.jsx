import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="home">
      <div className='home--div'>
        <div className='home--container'>
            <h1>Food Corner</h1>
            <p className='nig--recipe'>NIGERIA RECIPES</p>
            <Link to='/menu'>
            <button className='home--btn'>Order Now</button>
            </Link>

        </div>
      </div>
    </div>
  )
}
