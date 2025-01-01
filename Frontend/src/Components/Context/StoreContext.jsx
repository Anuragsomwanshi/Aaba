import React, { createContext, useState} from "react";
import { services } from "../../assets/assets";

export const StoreContext =  createContext(null);

const StoreContextProvider = (props) =>{

    const [category, setCategory] = useState('All');
    



    const contextValue = {
        services,
        category,
        setCategory

    }

    return (

        <StoreContext.Provider value ={contextValue}>
            {props.children}

        </StoreContext.Provider>
    )
}

export default StoreContextProvider;