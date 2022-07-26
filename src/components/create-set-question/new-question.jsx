import {useState} from 'react';
import axios from 'axios';
import React from 'react';


const NewQuestion= () =>{
    const [questionText,setQuestionText] =useState('');
    const [a,setA] = useState('');
    const [b,setB] = useState('');
    const [c,setC] = useState('');
    const [d,setD] = useState('');

   const newQuestionAdd=(e)=>{
        e.preventDefault();

        // const data ={
        //   name: name,
        //   price: price,
        //   description: description,
        //   qty: qty,
        //   userId: userId,
        // }

        const data = new FormData();
        data.append("questionText", questionText);
        data.append("a", a);
        data.append("b", b);
        data.append("c", c);
        data.append("d", d);

        const config ={
            headers:{
                Authorization: "Bearer " + localStorage.getItem("ticket"),
            }
        }

        axios.post("http://localhost:90/product/insert",data, config)
        
        .then(response=>{
            console.log(response)
        })
        .catch(e=>{
            console.log(e)
        })

   }

  
   
   return(
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <h1>Add Product</h1>
                {userId}
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type='text' className="form-control" onChange={(e)=>{setName(e.target.value)}}/>
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input type='text' className="form-control" onChange={(e)=>{setPrice(e.target.value)}}/>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input type='text' className="form-control" onChange={(e)=>{setDescription(e.target.value)}}/>
                    </div>
                    <div className="form-group">
                        <label>Qty</label>
                        <input type='text' className="form-control" onChange={(e)=>{setQty(e.target.value)}}/>
                    </div>
                    <div className='form-group'>
                        <label>Product Image</label>
                        <input type='file' className="form-control" onChange={(e)=>{setImage(e.target.files[0])}}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" onClick={ProductAdd}/>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
);
}


export default Product;