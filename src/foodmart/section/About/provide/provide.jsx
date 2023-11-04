import React from 'react'

const Provide = () => {
    const price_data= [{
        img:"/images/1.svg"
    },
    {img:"/images/2.svg"},{img:"/images/3.svg"},{img:"/images/4.svg"},{img:"/images/5.svg"},{img:"/images/6.svg"}];
  return (
    <>
      <div className="provide-heading container">
      <h1>What We Provide?</h1>
      </div>

      <div className="provide-price container">
        {price_data.map((item)=>{
            return(
                <>
                <div className="price-box">
                  <div class="imgsection"><img src={item.img} alt="bestprice"/></div>
                 <h1>Best Price & Offers</h1>
        
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident nulla placeat optio fugit repellendus odio officiis delectus nam iure porro.</p>
                    <a href=""><h3>Read More</h3></a>
                </div>
                
                </>
            );
        })}

      </div>
    </>
  )
}

export default Provide
