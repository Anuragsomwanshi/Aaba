import React, { createContext, useEffect, useState} from "react";
import { services } from "../../assets/assets";

export const StoreContext =  createContext(null);

const StoreContextProvider = (props) =>{


    const [cartItems,setCartItems] = useState({});
    


const addcart = (itemId)=>{
    if(!cartItems[itemId]){
        setCartItems((prev)=>({...prev,[itemId]:1}))
    }

}

 const removecart =  (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
 }

 

 useEffect(()=>{

    console.log(cartItems)

 },[cartItems])

 

    



    const contextValue = {
        services,
        cartItems,
        setCartItems,
        addcart,
        removecart,
        

    }

    return (

        <StoreContext.Provider value ={contextValue}>
            {props.children}

        </StoreContext.Provider>
    )
}

export default StoreContextProvider;