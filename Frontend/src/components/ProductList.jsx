import Rating from "@mui/material/Rating";
import { NavLink } from "react-router-dom";

import { MdZoomOutMap } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";

const ProductList = () => {
  return (
    <NavLink to="/product-details/77">
      <div className="product_items">
        <div className="image_wrapper">
          <img src="./public/images/18.jpg" alt="product" />
          <div className="icon_list">
            <button>
              <MdZoomOutMap className="product-icon" />
            </button>
            <button>
              <FaRegHeart className="product-icon" />
            </button>
            <button>
              <IoGitCompareOutline className="product-icon" />
            </button>
          </div>
        </div>
        <div className="product_details">
          <h2>Product Name</h2>
          <h4>
            <span className="old_price">$40</span> $20
            <Rating
              style={{ float: "right", fontSize:"13px" }}
              name="size-small"
              defaultValue={4}
              size="small"
              readOnly
            />
          </h4>
        </div>
      </div>
    </NavLink>
  );
};

export default ProductList;
