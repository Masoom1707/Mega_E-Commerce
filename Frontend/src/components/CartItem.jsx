import {IoCloseCircleSharp} from 'react-icons/io5'
import {GoTriangleDown} from 'react-icons/go'

import Rating from "@mui/material/Rating";

import {NavLink} from 'react-router-dom'
import { useState } from 'react';

const CartItem = (props) => {

    // for opening of dropdown and selecting the values
    const [sizeDrodown, setSizeDropdown] = useState(false)
    const [selectSize, setSelectSize] = useState(props.size)
    const handleSizeDropClick = (e) => {
        setSizeDropdown(e.currentTarget)
        setSizeDropdown(!sizeDrodown)
    }
    const handleSizeClose = (e) => {
        setSelectSize(e.target.value)
        setSizeDropdown(!sizeDrodown)
    }

    // state handeling for the quantity
    const [quantity, setQuantity] = useState(1)
    const handleDec = () => {
      if(quantity > 1) setQuantity(quantity - 1)
    }


  return (
    <div className="cart_list_section">
<div className="leftside">
  <NavLink to='/product-details/77'>
  <div className="img_container">
    <img src="./public/Images/10.jpg" alt="" />
  </div>
  </NavLink>
</div>
<div className="rightside">
<IoCloseCircleSharp style={{float:"right", fontSize:"1.4vw", cursor:"pointer"}} />
  <h6>Levis</h6>
  <NavLink to='/product-details/77'><h5>Pure Cotton Slim Fit Geometric Printed Casual Shirt</h5></NavLink>
  <Rating name="size-small" defaultValue={4} style={{fontSize:"12px"}} size="small" readOnly />
  <div className="qty_size">

    <button onClick={handleSizeDropClick}>Size: {selectSize} <GoTriangleDown />
    {sizeDrodown && (
        <div className="dropdown">
        <button onClick={handleSizeClose} value='S'>S</button>
        <button onClick={handleSizeClose} value='M'>M</button>
        <button onClick={handleSizeClose} value='L'>L</button>
        <button onClick={handleSizeClose} value='XL'>XL</button>
        <button onClick={handleSizeClose} value='XXL'>XXL</button>
    </div>
    )}
    </button>

    <div className='inc_dec'>
      <button className='red' onClick={handleDec}>-</button>
      <h5>{quantity}</h5>
      <button className='green' onClick={() => setQuantity(quantity + 1)}>+</button>
    </div>

  </div>


  <div className="price">
      <h5>$1,499</h5>
      <h5 className="highPrice">$1,999</h5>
  </div>
</div>
</div>
  )
}

export default CartItem