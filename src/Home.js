import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
                <div className="home__row">
                    <Product 
                        id="11"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={19.9}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                        rating={5}
                    />
                    <Product 
                        id="22"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={299.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                        rating={3}
                    />  
                </div>                    
                <div className="home__row">
                    <Product 
                        id="33"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={200.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                        rating={4}
                    />
                    <Product 
                        id="44"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={99.99}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                        rating={5}
                    />
                    <Product 
                        id="55"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                        rating={5}
                    />
                </div>
                <div className="home__row">
                <Product 
                    id="55"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                    price={1111.98}
                    image="https://images-eu.ssl-images-amazon.com/images/I/81vlA84pg6L._AC_UL160_.jpg"
                    rating={5}
                />                    
                </div>
            </div>
        </div>
    )
}

export default Home;
