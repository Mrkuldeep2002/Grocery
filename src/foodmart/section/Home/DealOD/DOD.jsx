import React from "react";

const DOD = () => {
    const deals = [{
        img : "/images/banner-5 - Copy.png"
    }
    ,{
        img : "/images/banner-6 - Copy.png"
        
    },{ img : "/images/banner-7 - Copy.png"},{ img : "/images/banner-8 - Copy.png"}];
  return (
    <div className="container">
      <div className="DOD-H">
        <h1>Deal of the Day</h1>
      </div>

      <div className="deals-section">
        {deals.map((item)=>{
            return(<>
            
                <div className="deals-box">
                  <div className="dealsimg">
                    <img src={item.img} alt="dealoftheDay" />
                  </div>
                  <div className="deals-count">
                    <div className="countdown">
                      <ul>
                        <li>1060<span>Days</span></li>
                        <li>7<span>Hours</span></li>
                        <li>20 <span>Mins</span></li>
                        <li>34<span>sec</span></li>
                      </ul>
                    </div>
        
                    <div className="details">
                   <h4>Seed of change organic ,quinao brown</h4>
                   <div className="rating"><i className="fa-solid fa-star"></i>
                   <i className="fa-solid fa-star"></i>
                   <i className="fa-solid fa-star"></i>
                   <i className="fa-solid fa-star"></i>
                   <i className="fa-solid fa-star-half-stroke"></i>
                   <span>(4.0)</span>
                   </div>
                   <h3>By<span>Nest Food</span></h3>
                   <div className="price">
                    <h1>$50</h1>
                    <h3>$80</h3>
                    <button className="cart-btn"><span><i className="fa-solid fa-cart-shopping"></i></span>Add</button>
                              </div></div>
                    
                  </div>
                </div>
                    </>);

        })}
      </div>
    </div>
  );
};

export default DOD;
