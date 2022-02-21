import React from 'react'

import './Footer.css'

function Footer() {
    return (
        <div className='footer__container'>
            <div className="footer__content">
                <div>
                    <div className="footer__heading">
                        <p>POPULAR LOCATIONS</p>
                    </div>

                    <div className="list">
                        <ul>
                            <li>Kolkata</li>
                            <li>Mumbai</li>
                            <li>Chennai</li>
                            <li>Pune</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div className="footer__heading">
                        <p>ABOUT US</p>
                    </div>

                    <div className="list">
                        <ul>
                            <li>About OLX Group</li>
                            <li>Careers</li>
                            <li>Contact Us</li>
                            <li>OLXPeople</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div className="footer__heading">
                        <p>OLX</p>
                    </div>
                    <div className="list">
                        <ul>
                            <li>Help</li>
                            <li>Sitemap</li>
                            <li>Legal & Privacy information</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer">
                <p className='footer__p1'> <span>Other Countries </span> Pakistan - South Africa - Indonesia</p>
                <p className='footer__p2'>Free classifieds in India. © 2006-2022 OLX</p>
            </div>
        </div>
    )
}

export default Footer