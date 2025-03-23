import ProductList from "../components/ProductList";
import ProductListSidebar from "../components/ProductListSidebar";
import "../css/productList.css";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';

const ProductListingPage = () => {
  return (
    <section>
      <div className="product_list_container">
        <ProductListSidebar />

        <div className="right_sidebar_container">
          <div className="right_sidebar_sort">
            <h4>Sort By:</h4>
            <div className="sort_dropdown">
              masoom
            </div>
          </div>
        <div className="product_right_sidebar">
          <ProductList />
          <ProductList />
          <ProductList />
          <ProductList />
          <ProductList />
          <ProductList />
          <ProductList />
          <ProductList />
        </div>
        <div className="pagination">
        <Pagination count={10} showFirstButton showLastButton />
        </div>
        </div>
        
      </div>
    </section>
  );
};

export default ProductListingPage;
