import React from 'react'
import { Link } from 'react-router-dom'

const Nav2 = () => {
    const navlist = [
        {
        name:"Home",
        url:"/"
         },
        {
        name:"About us",
        url:"/about"
         },
        {
        name:"Menu"
         },
        {
        name:"Vendor"
         },
        {
        name:"Contact"
         },
        {
        name:"Pages"
         },
        {
        name:"Account"
         },
    ]
  return (
    <nav className='container nav2'>
        <button>BROWSE ALL CATEGORIES</button>
      
    <ul>{
      navlist.map((Listitem)=>{
          return<>
          <li><Link to={Listitem.url}>{Listitem.name}</Link></li>            
          </>
      })
      }
             </ul>

      <div className='CC'>
        <i class="fa-solid fa-headphones fa-2xl"></i>
        <p>
            <h3>1800180365</h3>
            <h4>24/7 Customers Support</h4>
        </p>
      </div>

    </nav>
  )
}

export default Nav2
