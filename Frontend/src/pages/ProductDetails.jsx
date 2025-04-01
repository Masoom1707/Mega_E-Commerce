import ProductDetailInfo from '../components/Product_Detail_Info'
import ProductDetailSidebar from '../components/productDetailSidebar'

import '../css/product_detail_sidebar.css'

const ProductDetails = () => {
  return (
    <div className="product_detail_container">
        <ProductDetailSidebar />
        <ProductDetailInfo />
    </div>
  )
}

export default ProductDetails