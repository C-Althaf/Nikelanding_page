const Home=()=>{
    return(
    <main className="main">
        <div className="content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP
                 YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST
                  AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
            </p>
            <div className="shop-btn">
            <a href="https://www.amazon.com" className=" button  btn-white "> Shop Now </a>
                
                <button className="sec-btn">category</button>
            </div>
         <div className="shop">
            <p>Avail for shopping</p>
         </div>
         <div className="shop-img">
         <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">
            <img src="./amazon.png" alt="Amazon" />
        </a>
        <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">
             <img src="./flipkart.png" alt="Flipkart"/>
        </a>
            
          </div>
         </div>
         <div className="brandimg">
            <img src="shoe_image.png" alt="Shoe_image" />
         </div>
        </main>
    );
};
export default Home;