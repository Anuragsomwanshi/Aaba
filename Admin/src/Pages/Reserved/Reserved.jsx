import React from 'react'
import './Reserved.css'
import axios from 'axios'

import { useState } from 'react'
import { toast } from 'react-toastify'
import { useEffect } from 'react'

const Reserved = ({url}) =>{

    const [reserved,setReserved] = useState([]);

    const fetchAllservice = async()=>{
        const response = await axios.get(url+"/reserved/list");
        if(response.data.success){

            setReserved(response.data.data);
            console.log(response.data.data);
        }

        else{
            toast.error("Error");

        }

    }

    useEffect(()=>{

        fetchAllservice();

    },[])




  return (
    <div>Reserved</div>
  )
}

export default Reserved