import axios from 'axios'
import React, { useState } from 'react'

const Add = () => {
    const [data,changeData]=useState(
        {
            "title":"",
            "shape":"",
            "colour":"",
            "price":"",
            "image":""
        }
    )
    const inputHandler=(event)=>{
        changeData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8082/add",data).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success")
                    {
                        alert("success")
                    }
                else{
                    alert("error")
                }
            }
        ).catch().finally()
    }
  return (
    <div>
        <div className="container">
            <Navbar/>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Title</label>
                            <input type="text" className="form-label" name='title' value={data.title} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Shape</label>
                            <input type="text" className="form-label" name='shape' value={data.shape} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Colour</label>
                            <input type="text" className="form-label" name='colour' value={data.colour} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Price</label>
                            <input type="text" className="form-label" name='price' value={data.price} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Image</label>
                            <input type="file" className="form-label" name='image' value={data.image} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add