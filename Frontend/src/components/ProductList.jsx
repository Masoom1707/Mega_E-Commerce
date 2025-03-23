import  Rating  from '@mui/material/Rating'
import React from 'react'
import { NavLink } from 'react-router-dom'

import {MdZoomOutMap} from 'react-icons/md'
import {FaRegHeart} from 'react-icons/fa'
import {IoGitCompareOutline} from 'react-icons/io5'


const ProductList = () => {
  return (
    <NavLink>
      <div className="product_items">
        <div className="image_wrapper">
            <img src="./public/images/15.jpg" alt="product" />
            <div className="icon_list">
              <button><MdZoomOutMap className='product-icon' /></button>
              <button><FaRegHeart className='product-icon' /></button>
              <button><IoGitCompareOutline className='product-icon' /></button>
            </div>
        </div>
        <div className="product_details">
          <h2>Product Name</h2>
          <h4> <span className='old_price'>$40</span> $20</h4>
          <Rating name='size-small' defaultValue={4} size='small' readOnly />
          <button className='cart'>Add to Cart</button>
        </div>
    </div>
    </NavLink>
  )
}

export default ProductList