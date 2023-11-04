import React from 'react'

const Welcome = () => {
  return (
    <>
     <div className="welcome-main container">
        <div className="welcome-left">
          <img src="/images/girl.png" alt="girlimage"/>
          </div>    
        <div className="welcome-right">
          <h1>Welcome to Nest</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dicta iste magnam sint harum reprehenderit, eos ea eaque non explicabo et. Architecto qui maiores asperiores non numquam voluptates, a distinctio, temporibus atque natus sint. Incidunt</p> 
          <br />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate doloremque laborum veniam ducimus eius animi et, dignissimos voluptatem a enim consectetur vel porro delectus ratione possimus, nulla accusantium quas expedita? Voluptatem quibusdam debitis consequuntur voluptates ipsum itaque vero exercitationem, minus repudiandae cumque incidunt. Ratione, ipsam.
          </p>
          <div className="imgsec">
          <img src="/images/about-3.png" alt="foodimg"/>
          <img src="/images/about-4.png" alt="foodimg"/>
          <img src="/images/about-4 (1).png" alt="foodimg"/>
          </div>
        </div>
    </div> 
    </>
  )
}

export default Welcome
