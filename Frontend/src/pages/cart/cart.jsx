import React from 'react';
import "./cart.css";
import { useContext } from 'react';
import shopContext from "../../componants/context/context";
import allProducts from "../../Assets/all_product";

function CartItems (){
        const {cart} = useContext(shopContext);
        
        

    return (
        cart.map((e)=>{
            let item = {}
                    allProducts.map((i)=>{
                        if (i.id == e ){
                            item = i
                        }})
                    return(
                        <div className='cartItem'>
                            {item.new_price}
                            {item.name}
                            
                            <img src={item.image} alt="" srcset="" />

                        </div>
                    )
                })
        
    )
}

function Cart (){
const {cart} = useContext(shopContext);
console.log(cart);
    return (
        <div className='cart'>
            {cart.length > 0 ? <CartItems/>:"" }
        </div>
    );
}

export default Cart;
