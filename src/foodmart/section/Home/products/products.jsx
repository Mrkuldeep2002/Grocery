import React, { useState } from "react";
import Items from "../../data";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

const Products = () => {
  const { addItem, inCart ,updateItemQuantity,cartTotal} = useCart();
  let [quantity,setquantity]= useState(1);
  
  const heading = [
    {
      //
      name: " All",
    },
    {
      name: "Milk & Dairies",
    },
    {
      name: "Coffe & Teas",
    },
    {
      name: "Pet Foods",
    },
    {
      name: "Fruits",
    },
    {
      name: "Vegetables",
    },
    {
      name: "Meat",
    },
  ];
  return (
    <>
      <div className="popularproduct container">
        <h1>Popular products</h1>
        <ul>
          {heading.map((Listitem) => {
            return (
              <>
                <li>{Listitem.name}</li>
              </>
            );
          })}
        </ul>
      </div>

      <div className="proditems container">
        {Items.map((items) => {
          return (
            <>
              <div className="itembox-out" key={items.id}>
                <div className="itembox-in">
                  
                  <Link to={`/details/${items.id}`}>
                    <img src={items.img} alt="imagew" />
                    </Link>
                
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
                      <div>
                        <h1>{items.price}</h1>
                        <h3>{items.oldprice}</h3>
                      </div>
                      <div className="Qty">
                        <button onClick={()=>updateItemQuantity(setquantity=quantity+1)} className="idbtn +btn">+</button>
                        <span>{quantity}</span>
                        <button onClick={()=>updateItemQuantity(setquantity=quantity-1)} className="idbtn -btn">-</button>
                      </div>
                      <button
                        onClick={() => {
                          addItem(items);
                        }}
                        className="cart-btn"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Products;
