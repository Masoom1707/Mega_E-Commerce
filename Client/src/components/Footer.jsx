import React from 'react'
import '../css/footer.css'

import{LiaShippingFastSolid} from 'react-icons/lia'
import{PiKeyReturnLight} from 'react-icons/pi'
import{BsWallet2} from 'react-icons/bs'
import{BiSupport} from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaRegCopyright, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
        <div className="upperFooter">
            <div className="footerIconDiv">
                <LiaShippingFastSolid className='footerIcon' />
                <h3>Free Shipping</h3>
                <p>For order above 999</p>
            </div>
            <div className="footerIconDiv">
                <PiKeyReturnLight className='footerIcon' />
                <h3>Easy Return</h3>
                <p>For an Exchange Product</p>
            </div>
            <div className="footerIconDiv">
                <BsWallet2 className='footerIcon' />
                <h3>Secure Payment</h3>
                <p>CoD or Online Payment</p>
            </div>
            <div className="footerIconDiv">
                <BiSupport className='footerIcon' />
                <h3>Support 24/7</h3>
                <p>Contact us anytime</p>
            </div>
        </div>
        <div className="lowerFooter">
            <div className="lowerDiv">
                <h2>Contact Us</h2>
                <p>Level-Up shop Belgachhia Kolkata, India</p>
                <p className='email'>Youremain@example.com</p>
                <h3 className='call'>(+91) 9876-543-210</h3>
            </div>
            <div className="lowerDiv">
            <h2>Products</h2>
            <NavLink>Price Drop</NavLink>
            <NavLink>New Products</NavLink>
            <NavLink>Best Sales</NavLink>
            <NavLink>Contact Us</NavLink>
            <NavLink>About Us</NavLink>
            <NavLink>Store Gallery</NavLink>
            </div>
            <div className="lowerDiv">
            <h2>Subscribe</h2>
            <p>Subscribe to our newsletter to get news about the special offers</p>
            <input className='emailSend' type="email" placeholder='Your E-mail Address' />
            <button>Subscribe</button>
            <input type="checkbox" id='term&codn' />
            <label htmlFor="term&codn">I agree to the terms and conditions and the privacy policy</label>
            </div>
        </div>
        <div className="socialMedia">
            <div className="icons">
                <NavLink><FaFacebook className='socialIcon' /></NavLink>
                <NavLink><FaWhatsapp className='socialIcon' /></NavLink>
                <NavLink><FaInstagram className='socialIcon' /></NavLink>
                <NavLink><FaTwitter className='socialIcon' /></NavLink>
                
            </div>
            <div className="copyright">
                <FaRegCopyright style={{fontSize:"12px"}} />
                <span> 2025 - Level-Up.com</span>
            </div>
        </div>
    </div>
  )
}

export default Footer