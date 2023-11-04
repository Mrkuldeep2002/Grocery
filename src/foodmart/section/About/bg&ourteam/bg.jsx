import React from 'react'

const Bg = () => {
    const navlist = [
    
    
    {
     },
    {
     },
    {
     },
    {
     },
    {
     },
]
  return (
    <div className="bgimg">
        <ul className='container'>{
      navlist.map((Listitem)=>{
          return<>
          <li>
          <h1>0+</h1>
          <h2>Glorious years</h2>
        </li>            
          </>
      })
      }
             </ul>
    </div>
  )
}

export default Bg
