import { useState } from "react";
import ProductDetailInfo from "../components/Product_Detail_Info";
import ProductDetailSidebar from "../components/productDetailSidebar";

import  Rating  from '@mui/material/Rating'
import "../css/product_detail_sidebar.css";

const ProductDetails = () => {
  const [activeDetail, setActiveDetail] = useState(0);

  return (
    <>
      <div className="product_detail_container">
        <ProductDetailSidebar />
        <ProductDetailInfo />
      </div>
      <div className="more_detail_review">
        <div className="info-review_buttons">
          <button
            className={activeDetail == 0 ? "col-purple" : ""}
            onClick={() => setActiveDetail(0)}
          >
            More Details
          </button>
          <button
            className={activeDetail == 1 ? "col-purple" : ""}
            onClick={() => setActiveDetail(1)}
          >
            Reviews
          </button>
        </div>
        <div className="detail_box">
          {activeDetail == 0 && (
            <table>
              <thead className="header_table">
                <tr>
                  <th scope="col">Product Name</th>
                  <th scope="col">Colour</th>
                  <th scope="col">Category</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Apple</th>
                  <td>Silver</td>
                  <td>red</td>
                  <td>159000</td>
                </tr>

                <tr>
                  <th>Apple</th>
                  <td>Silver</td>
                  <td>red</td>
                  <td>159000</td>
                </tr>

                <tr>
                  <th>Apple</th>
                  <td>Silver</td>
                  <td>red</td>
                  <td>159000</td>
                </tr>

                <tr>
                  <th>Apple</th>
                  <td>Silver</td>
                  <td>red</td>
                  <td>159000</td>
                </tr>
              </tbody>
            </table>
          )}
          {activeDetail == 1 && (
            <>
              <h3>Customer Question and Answer</h3>
              <div className="reviw_box">
                <div className="review_list">

                  <div className="review_person">
                    <div className="profile_container">
                      <div className="review_profile"></div>
                    </div>
                    <div className="review_info">
                      <h4>Masoom</h4>
                      <h6>2024-12-02</h6>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis quod fugiat molestiae accusamus id incidunt
                        perspiciatis alias eius iure! Quae corporis possimus
                        nulla suscipit repellat temporibus aperiam laboriosam
                        alias fuga.mamf oaldf jaldkjo
                      </p>
                      <Rating
                        name="size-small"
                        className="review-rating"
                        defaultValue={4}
                        size="small"
                        readOnly
                      />
                    </div>
                    
                  </div>

                  <div className="review_person">
                    <div className="profile_container">
                      <div className="review_profile"></div>
                    </div>
                    <div className="review_info">
                      <h4>Masoom</h4>
                      <h6>2024-12-02</h6>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis quod fugiat molestiae accusamus id incidunt
                        perspiciatis alias eius iure! Quae corporis possimus
                        nulla suscipit repellat temporibus aperiam laboriosam
                        alias fuga.mamf oaldf jaldkjo
                      </p>
                      <Rating
                        name="size-small"
                        className="review-rating"
                        defaultValue={4}
                        size="small"
                        readOnly
                      />
                    </div>
                    
                  </div>

                  
                  

                </div>
                <div className="review_add">
                  <h3>Add a review message</h3>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Write your review"
                  ></textarea>
                  <Rating />
                  <button>Submit Review</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
