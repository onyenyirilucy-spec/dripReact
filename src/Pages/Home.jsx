import React from "react";
import clothImg from "../assets/cloth.jpg";
import jacketImg from "../assets/jacket.jpg"
import shoesImg from "../assets/shoes.jpg"

function Home(){
    return(
        <div className="drip-contaner">
            <div className="drip-body">
                <h1>Welcome to Drip by G</h1>
                <h4>Shop the latest sneakers and fashion trends</h4>
                <button className="shop">shop Now</button>
            </div>
            
            <div className="products">
                <div className="column">
                <h2>Featured Product</h2>
                <hr />
                </div>

                <div className="pic">
                    <div className="product-card">
                        <img src={clothImg} alt="cloth"/>
                        <p className="text">Classic Shirts</p>
                        <p className="price">$50</p>
                        <button className="add">Add Cart</button>
                    </div>

                    <div className="product-card">
                        <img src={jacketImg} alt="jacket"/>
                        <p className="text">Denim Jacket</p>
                        <p className="price">$70</p>
                        <button className="add">Add Cart</button>
                    </div>

                    <div className="product-card">
                        <img src={shoesImg} alt="shoes"/>
                        <p className="text">street Sneakers</p>
                        <p className="price">$100</p>
                        <button className="add">Add Cart</button>
                    </div>
                </div>
            </div>
               <footer>
                <div className="footer_holder">
                    <article>
                        <h2>About Us</h2>
                        <p>Drip by G is a modern fashion </p>
                        <p>Brand offering </p>
                        <p>Premium sneakers,</p>
                        <p>Streetwears</p>
                        <p>Accessories.</p>
                        <p> We combine comfort,</p>
                        <p>Class, and creativity </p>
                        <p>To give you the perfect look</p>
                    </article>
                    <article>
                        <h2>CONTACT INFO</h2>
                        <p> Phone:+234 9032 758 506</p>
                        <p>Email:Onyenyirilucy@gmail.com</p>
                        <p>Address: Lagos, Nigeria</p>
                    </article>
                    <article>
                        <h2>Follow Us</h2>
                    </article>
                </div>
            </footer>

            <footer className="next_footer">All well resvered in 2025 by drip G. All rights</footer>
        </div>
    )
}

export default Home;