import React, { createContext, useEffect, useState} from "react";
import axios from "axios"

export const StoreContext =  createContext(null);

const StoreContextProvider = (props) =>{


    const [cartItems,setCartItems] = useState({});
    const url = "http://localhost:5000"

    const [token,setToken] = useState("");

    const [serviceList,setServiceList] = useState([]);
    


const addcart =  async(itemId)=>{
    if(!cartItems[itemId]){
        setCartItems((prev)=>({...prev,[itemId]:1}))
    }

    if(token){
        await axios.post(url+'/cart/add',{itemId},{headers:{token}})
    }

}

 const removecart =  async(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

    if(token){
        await axios.post(url+'/cart/remove',{itemId},{headers:{token}})
    }
 }

 

  const fetchdata = async () =>{

    const response = await axios.get(url+"/item/list");
    setServiceList(response.data.data);



  }

  const loadcartdata = async(token) =>{
    const response = await axios.post(url+'/Cart/get',{},{headers:{token}});
    setCartItems(response.data.cartData)


  }

 useEffect(()=>{

   

    async function loadData(){
        await fetchdata();

        if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"));

            await loadcartdata(localStorage.getItem('token'));
        }
    }
    loadData();

 },[])

 

    



    const contextValue = {
        serviceList,
        cartItems,
        setCartItems,
        addcart,
        removecart,
        url,
        token,
        setToken
        

    }

    return (

        <StoreContext.Provider value ={contextValue}>
            {props.children}

        </StoreContext.Provider>
    )
}

export default StoreContextProvider;
