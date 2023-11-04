import React from 'react'

const FC = () => {
    const heading = [
        {
          //
          name: " cake & milk",
         
        },
        {
          name: "Coffee & tea",
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
      ];
      const product = [
        {
            img : "/images/cat-1 - Copy.png",
            name: "Organic Kiwi",
            item : "28"
        
          },
        {
            img : "/images/cat-2 - Copy.png",
            name: "Peach",
            item : "14"
        
          },
        {
            img : "/images/cat-3 - Copy.png",
            name: "Snack",
            item : "56"
        
          },
        {
            img : "/images/cat-4 - Copy.png",
            name: "Red Apple",
            item : "$54"
        
          },
        {
            img : "/images/cat-5 - Copy.png",
            name: "Vegetables",
            item : "72"
        
          },
        {
            img : "/images/cat-11 - Copy.png",
            name: "Bandy blandy",
            item : "90"
        
          },
        {
            img : "/images/cat-12 - Copy.png",
            name: "Strawberry",
            item : "36"
        
          },
        {
            img : "/images/cat-13 - Copy.png",
            name: "Custard",
            item : "34"
        
          },
        {
            img : "/images/cat-9 - Copy.png",
            name: "Headphone",
            item : "13"
        
          },
        {
            img : "/images/cat-14 - Copy.png",
            name: "Tea",
            item : "14"
        
          }
          
    ];
const banner =[
    {
    img:"",
},
  {
     img:"",
 },
     {
     img:"",
 },
]

  return (
    <>
           
      <div className="Featheading container">
        <h1>Featured Category</h1>
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

      <div className="featProd container">
        {product.map((item)=>
        { return(
            <>
            <div className="FtProdbx">
        <img src={item.img} alt="randomimage"/>
        <h5>{item.name}</h5>
        <h6>{item.item} item</h6>

        </div>
            </>
        );
            
        })}
      </div>

      <div className="banner container">
      {banner.map((Listitem) => {
            return (
              <>
                <div className="bannerBx">
            <div className="bnImg">
                <img src="/images/banner-1 - Copy.png" alt="" />
            </div>
            <div className="Txt">
            <h3>Everyday Fresh  Clean with Our Products</h3>
            <a href="#"><button>Shop Now <span><i class="fa-solid fa-arrow-right"></i></span></button></a>
            </div>
        </div>
              </>
            );
          })}
        
    </div>
    </>
  )
}

export default FC
