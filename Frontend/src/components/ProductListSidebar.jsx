import RangeSlider from 'react-range-slider-input'
import 'react-range-slider-input/dist/style.css'

const ProductListSidebar = () => {
  return (
    <div className="product_left_sidebar">
      <h3>Shop By Filters</h3>
      <div className="scroll_filter">
        <div>
          <input type="checkbox" id="filter" />
          <label htmlFor="filter">Kurta Men</label>
        </div>

        <div>
          <input type="checkbox" id="filter1" />
          <label htmlFor="filter1">Top Wear</label>
        </div>

        <div>
          <input type="checkbox" id="filter2" />
          <label htmlFor="filter2">Bottom Wear</label>
        </div>

        <div>
          <input type="checkbox" id="filter3" />
          <label htmlFor="filter3">T-shirts</label>
        </div>

        <div>
          <input type="checkbox" id="filter4" />
          <label htmlFor="filter4">Checked Shirt</label>
        </div>
      </div>

      <div className="scroll_filter">
        <h3>Availability</h3>
        <div>
          <input type="checkbox" id="avail" />
          <label htmlFor="avail">Available</label>
        </div>
        <div>
          <input type="checkbox" id="Instock" />
          <label htmlFor="Instock">In Stock</label>
        </div>
        <div>
          <input type="checkbox" id="NA" />
          <label htmlFor="NA">Not - Available</label>
        </div>
      </div>

      <div className="scroll_filter">
        <h3>Size</h3>
        <div>
          <input type="checkbox" id="S" />
          <label htmlFor="S">Small</label>
        </div>
        <div>
          <input type="checkbox" id="M" />
          <label htmlFor="M">Medium</label>
        </div>
        <div>
          <input type="checkbox" id="L" />
          <label htmlFor="L">Large</label>
        </div>
        <div>
          <input type="checkbox" id="XL" />
          <label htmlFor="XL">XL</label>
        </div>
        <div>
          <input type="checkbox" id="XXL" />
          <label htmlFor="XXL">XXL</label>
        </div>
      </div>

      <div className="scroll_filter">
        <h3>Price Rnage</h3>
        <div>
            <RangeSlider />
        </div>
        <div className="price_range">
            <p>From:-<span>Rs 99</span></p>
            <p>To:-<span>Rs 9999</span></p>
        </div>
       
    </div>

    </div>
  );
};

export default ProductListSidebar;
