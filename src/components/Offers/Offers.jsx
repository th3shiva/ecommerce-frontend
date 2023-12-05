import React from 'react'
import './Offers.css'
import exclusive from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <h1>ONLY ON BEST SELLERS</h1>
        <button>Check Now</button>
        </div>
        <div className="offers-right">
        <img src={exclusive}/>
        
        </div>
    </div>
  )
}

export default Offers