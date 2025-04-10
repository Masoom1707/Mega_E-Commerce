import { ButtonGroup } from "@mui/material";
import { useRef, useState } from "react";

const ProductDetailSidebar = () => {
  
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSlideBig = useRef();
  const zoomSlideSmall = useRef();
  const goTo = (index) => {
    setSlideIndex(index);
    zoomSlideBig.current.swiper.slideTo(index);
    zoomSlideSmall.current.swiper.slideTo(index);
  };

  return (
    <div className="product_image_sidebar">
      <div className="productImageFrame" ref={zoomSlideBig}>
        <img src="../public/images/28.jpg" alt="" />
      </div>
      <div className="image_options_container" ref={zoomSlideSmall}>
        <button
          className={`image_option ${slideIndex === 0 ? "active_image" : ""}`}
          onClick={() => goTo(0)}
        >
          <img src="../public/images/12.jpg" alt="" />
        </button>
        <button
          className={`image_option ${slideIndex === 1 ? "active_image" : ""}`}
          onClick={() => goTo(1)}
        ><img src="../public/images/14.jpg" alt="" /></button>
        <button
          className={`image_option ${slideIndex === 2 ? "active_image" : ""}`}
          onClick={() => goTo(2)}
        ><img src="../public/images/15.jpg" alt="" /></button>
        <button
          className={`image_option ${slideIndex === 3 ? "active_image" : ""}`}
          onClick={() => goTo(3)}
        ><img src="../public/images/16.jpg" alt="" /></button>
      </div>
    </div>
  );
};

export default ProductDetailSidebar;
