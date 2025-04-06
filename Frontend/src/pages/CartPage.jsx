import "../css/cart_container.css";
import {BsFillBagCheckFill} from 'react-icons/bs'


import CartItem from "../components/CartItem";
import { NavLink } from "react-router-dom";

const CartPage = () => {
  return (
    <div className="Cart_container">
      <div className="cart_right_side">
        <h2><span>4</span> Items in your cart</h2>

        <CartItem size='S' />
        <CartItem size='M' />
        <CartItem size='XL' />

      </div>
      <div className="cart_left_side">
        <div className="price_breakout_section">
          <h4>Price details (2 Items)</h4>
          <div className="price_div">
            <p>Total MRP <span>3,744</span></p>
            <p>Discount on MRP <span className="free">2,744</span></p>
            <p>Coupon Discount <span className="coupon">No Coupon</span></p>
            <p>Platform Fee <span className="free">FREE</span></p>
            <p>Shipping Fee <span className="free">FREE</span></p>
          </div>
          <h3>Total Amount <span>$1,744</span></h3>
          <NavLink to='/checkout'><BsFillBagCheckFill style={{fontSize:"2.3vh"}} /> Checkout</NavLink>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
