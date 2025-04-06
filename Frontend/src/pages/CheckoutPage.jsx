import '../css/checkoutPage.css'

const CheckoutPage = () => {
  return (
    <section className="checkout_page">
       <div className="left_checkout_sidebar">
        <form action="">
        <h2>Billing Details</h2>
            <div className="halfInp">
                <input type="text" placeholder='Full Name' />
                <input type="text" placeholder='Email' />
            </div>
            <h4>Street address</h4>
            <input type="text" placeholder='House No and Street Name' />
            <input type="text" placeholder='Appartment Name / Local Area'/>
            <div className="halfInp">
                <input type="text" placeholder='Town / City' />
                <input type="text" placeholder='State' />
            </div>
            <h4>Postcode / Zip</h4>
            <input type="text" placeholder='Zip Code' />
            <div className="halfInp">
                <input type="text" placeholder='Phone Number' />
                <input type="text" placeholder='Alternate Number' />
            </div>
        </form>
    </div>

    <div className="checkout_right_sidebar">
      <div className="inner_righ_checkout">
        <h2>Your Order</h2>
        <h3>Product <span>Subtotal</span></h3>
        <div className="product_container">

        <div className="product_div">
          <div className="checkout_img_container">
            <img src="./public/Images/14.jpg" alt="" />
          </div>
          <div className="title">
            <h3>Chicken kari kurta | under 999</h3>
            <p>Qty: 1</p>
            <span>$4,000</span>
          </div>
        </div>

        <div className="product_div">
          <div className="checkout_img_container">
            <img src="./public/Images/16.jpg" alt="" />
          </div>
          <div className="title">
            <h3>Chicken kari kurta | under 999</h3>
            <p>Qty: 1</p>
            <span>$4,000</span>
          </div>
        </div>
        <div className="product_div">
          <div className="checkout_img_container">
            <img src="./public/Images/15.jpg" alt="" />
          </div>
          <div className="title">
            <h3>Chicken kari kurta | under 999</h3>
            <p>Qty: 1</p>
            <span>$4,000</span>
          </div>
        </div>

        <div className="product_div">
          <div className="checkout_img_container">
            <img src="./public/Images/17.jpg" alt="" />
          </div>
          <div className="title">
            <h3>Chicken kari kurta | under 999</h3>
            <p>Qty: 1</p>
            <span>$4,000</span>
          </div>
        </div>
        <div className="product_div">
          <div className="checkout_img_container">
            <img src="./public/Images/18.jpg" alt="" />
          </div>
          <div className="title">
            <h3>Chicken kari kurta | under 999</h3>
            <p>Qty: 1</p>
            <span>$4,000</span>
          </div>
        </div>

        <div className="product_div">
          <div className="checkout_img_container">
            <img src="./public/Images/19.jpg" alt="" />
          </div>
          <div className="title">
            <h3>Chicken kari kurta | under 999</h3>
            <p>Qty: 1</p>
            <span>$4,000</span>
          </div>
        </div>
        <div className="product_div">
          <div className="checkout_img_container">
            <img src="./public/Images/14.jpg" alt="" />
          </div>
          <div className="title">
            <h3>Chicken kari kurta | under 999</h3>
            <p>Qty: 1</p>
            <span>$4,000</span>
          </div>
        </div>

        <div className="product_div">
          <div className="checkout_img_container">
            <img src="./public/Images/16.jpg" alt="" />
          </div>
          <div className="title">
            <h3>Chicken kari kurta | under 999</h3>
            <p>Qty: 1</p>
            <span>$4,000</span>
          </div>
        </div>

        </div>
        <button>Proceed to pay</button>
      </div>
    </div>
    </section>
  )
}

export default CheckoutPage