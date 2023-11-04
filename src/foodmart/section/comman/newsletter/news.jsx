import React from "react";

const News = () => {
  return (
    <>
      <div className="newsmain">
        <div className="newsimg">
          <img src="/images/bgvegetable.jpg" alt="" />
        </div>
        <div className="newstxt">
          <h1>Stay home & get your daily needs from our shop</h1>
          <h3>Start You'r Daily Shopping with Nest Mart</h3>
          <form class="form">
            <span><i class="fa-solid fa-paper-plane"></i></span>
          <input type="email" placeholder="Enter your email adress"/>
          <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default News;
