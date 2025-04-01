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
      <div className="productImageFrame" ref={zoomSlideBig}></div>
      <div className="image_options_container" ref={zoomSlideSmall}>
        <button
          className={`image_option ${slideIndex === 0 ? "active_image" : ""}`}
          onClick={() => goTo(0)}
        ></button>
        <button
          className={`image_option ${slideIndex === 1 ? "active_image" : ""}`}
          onClick={() => goTo(1)}
        ></button>
        <button
          className={`image_option ${slideIndex === 2 ? "active_image" : ""}`}
          onClick={() => goTo(2)}
        ></button>
        <button
          className={`image_option ${slideIndex === 3 ? "active_image" : ""}`}
          onClick={() => goTo(3)}
        ></button>
      </div>
    </div>
  );
};

export default ProductDetailSidebar;
