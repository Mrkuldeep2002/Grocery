import React from 'react'
import { useCart } from 'react-use-cart';
import Header from '../comman/header/header';
import QrCodeTotal from '../Home/Qrpayment';

const Cart = () => {
    const { items , removeItem, quantity ,updateItemQuantity,cartTotal} = useCart();
    
  return (
    <>
    <Header/>
        {
        items.map((items)=>{
            return(
                <>
                    <div className="itembox-out">
          <div className="itembox-in">
            <a href="#">
              <img src={items.img} alt="imagew" />
            </a>
            <div className="proddetail">
              <h6>{items.type}</h6>
              <h4>{items.name}</h4>
           
              <h3>Nest Food</h3>

              <div className="price">
                <div>
                  <h1>₹{items.price * items.quantity}</h1>
                  <h3>₹{items.oldprice}</h3>
                </div>
                <div className="Qty">
                <button onClick={()=>{updateItemQuantity(items.id,items.quantity+1)}}>+</button>
                <span>{items.quantity}</span>
                  <button onClick={()=>updateItemQuantity(items.id,items.quantity-1)}>-</button>
                </div>
                <button onClick={() =>{removeItem(items.id)} }>remove</button>
              </div>
            </div>
          </div>
        </div>
                    </>
            )
        })
    }
    
    <h1>total price = {cartTotal}</h1>
    <QrCodeTotal/>
    </>
  )
}

export default Cart
