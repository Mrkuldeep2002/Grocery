import React from "react";
import Items from "../../data";

const Bestseller = () => {

  return (
    <>
      <div className="bSH container">
        <h1>Best Seller</h1>
      </div>

      <div className="BsS container">
        <div className="BsS1">
          <div className="S1img">
            <img src="/images/banner-4.png" alt="bannerimg" />
          </div>
          <div className="Txt">
            <h1>Bring nature into your home</h1>
            <button>
              Shop Now
              <span>
                <i class="fa-solid fa-arrow-right"></i>
              </span>
            </button>
          </div>
        </div>
        <div className="BsS2">
          {Items.slice(0,4).map((items) => {
            return (
              <>
                <div className="Bsitem">
                  <div className="itembox-in">
                    <a href="#">
                      <img src={items.img} alt="imagew" />
                    </a>
                    <div className="proddetail">
                      <h6>{items.type}</h6>
                      <h4>{items.name}</h4>
                      <div className="rating">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                        <span>(4.0)</span>
                      </div>
                      <h3>Nest Food</h3>

                      <div className="price">
                        <h1>$70</h1>
                        <h3>$80</h3>
                      </div>
                      <div className="Bsbtn">
                        
                      <button className="cart-btn"><span><i class="fa-solid fa-cart-shopping"></i></span>Add To Cart</button>
                      <button className="wish-btn"><i class="fa-solid fa-heart"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Bestseller;
