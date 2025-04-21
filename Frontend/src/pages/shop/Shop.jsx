
import React from 'react';
import hero from "../../Assets/hero_image.png"
import hand from "../../Assets/hand_icon.png"
import arrow from "../../Assets/arrow.png"
import girl from "../../Assets/exclusive_image.png"
import "./Shop.css"
import Item from '../../componants/item';
import data_product from '../../Assets/data';
import Panar from '../../componants/panar';
import new_collections from '../../Assets/new_collections';
import FooterShop from "../../componants/Footer";
import { useContext } from 'react';
import ShopContext from '../../componants/context/context';


const Shop = () => {
    const {item} = useContext(ShopContext);
    console.log(item)


    return (
        <div className='Shop'>
            <div className='hero'>
                <div className="left">
                    <p>new arrivals only </p>
                    <h2>new <img src={hand} alt="" /> collections   <br />for everyone </h2>
                    <a href=""> latest collections  &nbsp;   <img src={arrow} alt="" srcset="" /></a>
                </div>
                <div className="right">
                    <img src={hero} alt="" />
                </div>
            </div>
            <div className="paddingsection">Populer in wemon </div>
            <div className="items">
                {data_product.map((item) => {
                    return <Item img={item.image} info={item.name} newPrice={item.new_price} oldPrice={item.old_price} />
                })}
            </div>
            {/* paner section */}
            <Panar img={girl} />
            <div className="paddingsection">new  collections </div>
            <div className="items">
                {new_collections.map((item) => {
                    return <Item img={item.image} info={item.name} newPrice={item.new_price} oldPrice={item.old_price} />
                })}
            </div>
            <div className="subscribe">
                <h3>get exclusive offers on ypur email</h3>
                <p>subscribe to our newsletter and stay updated</p>
                <div>
                    <input type="email" name="" id="" placeholder='Your emil id' />
                    <button className='button_link'> subscribe</button>
                </div>
            </div>
           <FooterShop/>
        </div>
    );
}

export default Shop;
