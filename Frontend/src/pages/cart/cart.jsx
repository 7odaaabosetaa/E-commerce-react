import React, { useState } from 'react';
import "./cart.css";
import { useContext } from 'react';
import shopContext from "../../componants/context/context";
import allProducts from "../../Assets/all_product";
import removeIcon from "../../Assets/cart_cross_icon.png"
import { Link } from 'react-router-dom';
import FooterShop from '../../componants/Footer';




function Cart (){

    const {cartItems,removeFromCart} = useContext(shopContext);
    return (
        <div className='cart'>
            <div className="cartitems">
                <div className="cartitems-format-main">
                    <p>products</p>
                    <p className='title'>title</p>
                    <p>price</p>
                    <p>Quintity</p>
                    <p>total</p>
                    <p>remove</p>
                </div>
                <hr />
                
               {allProducts.map((e)=>{
                if(cartItems[e.id] >0){
                    return <div>
                       <div className='cartitem'>
                        <img src={e.image} className='itemimg' alt="" />
                        <p className='title'>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className='quintity' onClick={()=>{}}>{cartItems[e.id]}</button>
                        <p>{e.new_price*cartItems[e.id]} </p>
                            <img className='remove' src={removeIcon} alt="" onClick={()=>{removeFromCart(e.id)}}/>
                    </div>
                    <hr />
                </div>

                }

                })}

            </div>
            <div className='details'>
                <div className="total">
                    <h2>Cart total</h2>
                    <p> <span>subtotal</span> <span>$70</span></p>
                    <p> <span>shipping fee</span> <span>free</span></p>
                    <p className='totalprice'> <h4>total</h4> <span>$70</span></p>
                    <button> Peoceed to checkout</button>
                </div>
                <div className="promocode">
                    <p>if you have promo code, Enter it here</p>
                    <div>
                        <input type="text" name="" placeholder='Promocode' />
                        <button type="submit"> submit</button>
                    </div>
                </div>

            </div>
<FooterShop/>
        </div>
    );
}

export default Cart;
