import Rating from "@mui/material/Rating";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";

const ProductDetailInfo = () => {

  const [quantity, setQuantity] = useState(1);
  const handleIncQuantity = () => setQuantity(quantity + 1);
  const handleDecQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const [addCart, setAddCart] = useState(false);
  const handleCart = () => setAddCart(true);

  const [sizeSelect,setSizeSelected] = useState(null)

  return (
    <div className="product_info_detail">
      <h1>ChickenKari Women Kurta | Women Kurta Under 2000 | Special Price Offer | Eid Special</h1>
      <Rating name="size-small" defaultValue={4} size="small" readOnly />
      <div className="product_detail-price_container">
        <h3>$1200</h3>
        <h5>
          M.R.P:- <span>$1599</span>
        </h5>
        <p>Inclusive of all taxes</p>
      </div>
      <div className="discription">
        <div className="stock">
          <h5>in stock</h5>
        </div>
        <h4>About Product</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae,
          aliquid aliquam voluptatum quia labore ut dolor laudantium dolorem
          reprehenderit nam sunt facere, illo eveniet iure recusandae molestias
          nemo. Amet, mollitia. Exercitationem sit reprehenderit accusamus neque
          tempora aliquid amet nihil, hic enim deserunt vel inventore
          distinctio, voluptatibus porro ut sunt impedit!
        </p>
      </div>
      <div className="sizes">
        <button className={sizeSelect == 0 ? 'activeSize' : ''} onClick={() => setSizeSelected(0)}>S</button>
        <button className={sizeSelect == 1 ? 'activeSize' : ''} onClick={() => setSizeSelected(1)}>M</button>
        <button className={sizeSelect == 2 ? 'activeSize' : ''} onClick={() => setSizeSelected(2)}>L</button>
        <button className={sizeSelect == 3 ? 'activeSize' : ''} onClick={() => setSizeSelected(3)}>XL</button>
        <button className={sizeSelect == 4 ? 'activeSize' : ''} onClick={() => setSizeSelected(4)}>XXL</button>
      </div>
      <div className="quantity-container">
        <div className="quantity">
          <button onClick={handleDecQuantity}>-</button>
          <p>{quantity}</p>
          <button onClick={handleIncQuantity}>+</button>
        </div>
        <button className="product_detail_cart" onClick={handleCart}>
          <LuShoppingCart style={{ fontSize: "1vw" }} />
          {addCart ? "Item Added" : "Add to Cart"}
        </button>
        <FaRegHeart style={{ fontSize: "1vw", cursor: "pointer" }} />
      </div>
      
    </div>
  );
};

export default ProductDetailInfo;
