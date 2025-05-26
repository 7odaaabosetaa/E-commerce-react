import { createContext, useState } from "react";
import all_product from "../../Assets/all_product";



const ShopContext = createContext();


function getDefaultCart(){
        let cart = {}
        for (let index = 0; index < all_product.length+1; index++) {
            cart[index] = 0;
        }
        return cart
    }
    

export function  ShopProvider ({children}){
    
    const [cartItems,setCartItem] = useState(getDefaultCart());
    // const [totalPrice,setTotalPrice] = useState()

    function addToCart (itemId){
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))

    }
    function removeFromCart (itemId){
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    function getItemsNumber(){
        let cartItemsNumber  = 0;
        all_product.map((e)=>{
            if(cartItems[e.id] >0){
                cartItemsNumber = cartItemsNumber + cartItems[e.id] ;
        }})
            return cartItemsNumber;
    }

    function getTotalPrice(){
        let  total = 0;
        all_product.map((e)=>{
            if(cartItems[e.id] >0){
               total = total + e.new_price * cartItems[e.id] 
            }
            })
            return total;
    }
    function getSubTotalPrice(){
        let  total = 0;
        all_product.map((e)=>{
            if(cartItems[e.id] >0){
               total = total + e.old_price * cartItems[e.id] 
            }
            })
            return total;
    }



    return (
    <ShopContext.Provider value={{cartItems,addToCart,removeFromCart,getItemsNumber,getTotalPrice,getSubTotalPrice}}>
        {children}
    </ShopContext.Provider>
    );
}

export default ShopContext;