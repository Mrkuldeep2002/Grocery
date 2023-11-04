import React from 'react'

import Header from "../comman/header/header";


//  import Nav from "./components/bpage/Nav";
import Footer from "../comman/footer/footer";
import Products from "./products/products";
import FC from "./featuredCat/FC";
import Bestseller from "./bestseller/bestseller";
import DOD from "./DealOD/DOD";
import News from "../comman/newsletter/news";


const Home = () => {
  return (
    <div>
      <Header />
      <News />
      <FC />
      <Products />
      <Bestseller />
      <DOD />
      <News />
      <Footer />
    </div>
  )
}

export default Home
