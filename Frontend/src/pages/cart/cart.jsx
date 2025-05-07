import React, { useState } from 'react';
import "./cart.css";
import { useContext } from 'react';
import shopContext from "../../componants/context/context";
import allProducts from "../../Assets/all_product";
import removeIcon from "../../Assets/cart_cross_icon.png"




function Cart (){

    const {cartItems,removeFromCart} = useContext(shopContext);


    return (
        <div className='cart'>
            <div className="cartitems">
                <div className="cartitems-format-main">
                    <p>products</p>
                    <p>title</p>
                    <p>price</p>
                    <p>Quintity</p>
                    <p>total</p>
                    <p>remove</p>
                </div>
                <hr />
                
               {allProducts.map((e)=>{
                if(cartItems[e.id] >0){
                    return <div>
                       <div className='item'>
                        <img src={e.image} className='itemimg' alt="" />
                        <p>e.name</p>
                        <p>${e.new_price}</p>
                        <button className='quintity'>{cartItems[e.id]}</button>
                        <p>{e.new_price*cartItems[e.id]} </p>
                            <img src={removeIcon} alt="" onClick={()=>{removeFromCart(e.id)}}/>
                        
                    </div>
                    <hr />
                </div>

                }

                })}

            </div>

        </div>
    );
}

export default Cart;
