import React from 'react'

import './Banner.css'
import Arrow from '../../Assets/Arrow'

function Banner() {
  return (
    <div className='banner__container'>
        <div className="banner__child">
            <div className="menu__bar">
                <div className="category__menu">
                    <span>ALL CATEGORIES</span>
                    <Arrow />
                </div>

                <div className="other__options">
                    <span>Cars</span>
                    <span>Motorcycles</span>
                    <span>Mobile Phones</span>
                    <span className='options__hide'>For Sale: Houses & Apartments</span>
                    <span className='options__hide1'>Scooters</span>
                </div>
            </div>

            <div className="banner">
                <img src="../../../Images/banner.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Banner