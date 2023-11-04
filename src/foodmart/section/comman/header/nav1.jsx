import React from 'react'
import { Link } from 'react-router-dom'

const Nav1 = () => {
  return (
    <nav className='container'>
      <div className="logo">
        <img src="/images/logo.312c90ddea629dd64ff6fc506a5f3e6c.svg" alt="logo" />
      </div>

      <div className='search-tab'>
        <select id="Categories">
            <option value="default">All Categories</option>
            <option value="fruits">fruits</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Dairy">Dairy</option>
        </select>
        <input type="text" placeholder='search items....' />
        <button className='btnL'><i class="fa-solid fa-magnifying-glass"></i></button>
      
    </div>
    

      <ul>
        <li><i class="fa-solid fa-recycle"></i>Compare</li>
        <li><i class="fa-solid fa-heart"></i>Wishlist</li>
        <li><i class="fa-solid fa-cart-shopping"></i><Link to="/cart"> cart</Link></li>
        <li><i class="fa-solid fa-user"></i>Account</li>
      </ul>

    </nav>
  )
}

export default Nav1
