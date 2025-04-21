import { createContext } from "react";


const ShopContext = createContext();

export function  ShopProvider ({children}){
    
    return (<ShopContext.Provider value={{ item : 4567890}}>{children}</ShopContext.Provider>);
}

export default ShopContext;