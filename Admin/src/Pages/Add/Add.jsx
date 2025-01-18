import React, {  useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

const Add = () => {

  const url = 'http://localhost:5000'

const [img, setImg] = useState(false);
const [data ,setData] = useState({
  name:"",
  price:"",
  category:"Haircut",
});

const onChangeHandler = (event)=>{

  const name = event.target.name;
  const value = event.target.value;
  setData(data=>({...data,[name]:value}))


}

const onsubmit = async(event)=>{

  event.preventDefault();

  const formdata = new FormData();
  formdata.append("name",data.name);
  formdata.append("category",data.category);
  formdata.append("price",Number(data.price));
  formdata.append("image",img);

  const response = await axios.post(`${url}/item/add`,formdata);

  if(response.data.success){

    setData({
      name:"",
      price:"",
      category:"Haircut",
    })

    setImg(false);
    toast.success(response.data.msg);
    



  }
  else{

    toast.error(response.data.msg);

  }

}



  return (
    <div className='add-serv'>

      <form  className='form-col' onSubmit={onsubmit} >

        <div className="addimgupload form-col">

          <p>upload image</p>
          <label htmlFor="image">
            <img src={img?URL.createObjectURL(img): assets.upload} className='uploadimg' alt="" />
          </label>
          <input onChange={(e)=>setImg(e.target.files[0])} type="file" id='image' hidden required />

        </div>

        <div className="add-sername form-col">
          <p>service name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='type here' />

        </div>

        <div className="add-sercategory-price">

          <div className="add-sercategory form-col">
            <p>Service category</p>

            <select  onChange={onChangeHandler} name="category" >
              <option value="Haircut">Haircut</option>
              <option value="Beardcut">Beardcut</option>
              <option value="Shaving">Shaving</option>
              <option value="Hair_Treatment">Hair_Treatment</option>
              <option value="Facial and Skincare">Facial and skincare</option>
             
            </select>
          </div>

          <div className="serprice form-col">
            <p>Service price</p>
            <input  onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='₹20' />
          </div>
        </div>
        <button type='submit' className='addbtn'>ADD</button>




      </form>


      
    </div>
  )
}

export default Add