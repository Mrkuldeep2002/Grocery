import React from 'react'

const Performance = () => {
    const history = [{
        title: "Who we are",
        detail : "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in."
    },
    {title: "Our history",
    detail : "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in."}
    ,{title: "Our mission",
    detail : "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in."}];
  return (
    <>
    <div className="performance container">
        <div className="perimg">
        <img src="/images/performace1.png" alt="performance"/>
        </div>
        <div className="pertxt">
            <h3>Our Performance</h3>
            <h1>Your Partner for e-commerce grocery solution</h1>
            <p>Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        
    </div>


    <div className="history container">
        {history.map((item)=>{
            return(
                <>
                <div className="history-box">
                        <h1>{item.title}</h1>
                        <p>{item.detail}</p>
                        </div>
                </>
            )
        })}
       
    </div>
    </>
  )
}

export default Performance
