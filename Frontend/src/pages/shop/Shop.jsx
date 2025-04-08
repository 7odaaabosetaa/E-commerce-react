
import React from 'react';
import hero from "../../Assets/hero_image.png"
import hand from "../../Assets/hand_icon.png"
import arrow from "../../Assets/arrow.png"
import "./Shop.css"

const Shop = () => {
    return (
        <div className='Shop'>
            <div className='hero'>
                <div className="left">
                    <p>new arrivals only </p>
                    <h2>new <img src={hand} alt="" /> collections   <br/>for everyone </h2>
                    <a href=""> latest collections  &nbsp;   <img src={arrow} alt="" srcset="" /></a>
                </div>
                <div className="right">
                    <img src={hero} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Shop;
