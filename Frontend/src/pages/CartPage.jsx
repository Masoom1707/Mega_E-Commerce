import "../css/cart_container.css";
import Rating from "@mui/material/Rating";
import {IoCloseCircleSharp} from 'react-icons/io5'

const CartPage = () => {
  return (
    <div className="Cart_container">
      <div className="cart_right_side">
        <h2><span>4</span> Items in your cart</h2>

        <div className="cart_list_section">
          <div className="leftside">
            <div className="img_container">
              <img src="./public/Images/13.jpg" alt="" />
            </div>
          </div>
          <div className="rightside">
        <IoCloseCircleSharp style={{float:"right", fontSize:"1.4vw", cursor:"pointer"}} />
            <h5>Levis</h5>
            <h4>Pure Cotton Slim Fit Geometric Printed Casual Shirt</h4>
            <Rating name="size-small" defaultValue={4} size="small" readOnly />
            <div className="qty_size">
              <button>Size: S</button>
              <button>Qty: 1</button>
            </div>
            <div className="price">
                <h5>$1,499</h5>
                <h5 className="highPrice">$1,999</h5>
            </div>
          </div>
        </div>

      


      </div>
      <div className="cart_left_side">raza</div>
    </div>
  );
};

export default CartPage;
