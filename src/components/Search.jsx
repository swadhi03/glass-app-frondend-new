import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Search = () => {
    const [data, changeData] = useState(
        {
            "title": ""
        }
    )
    const [result, changeResult] = useState([])
    const inputHandler = (event) => {
        changeData({ ...data, [event.target.name]: event.target.value })
    }

    const deleteGlasses = (id) => {
        let input = { "_id": id }
        axios.post("http://localhost:8082/delete", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Deleted Successfully")
                }
                else {
                    alert("Failed")
                }
            }
        ).catch().finally()
    }


    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8082/search", data).then(
            (response) => {
                console.log(response.data)
                changeResult(response.data)
            }
        ).catch(
            (error) => {
                alert(error)
            }
        ).finally()
    }
    return (
        <div>
            <div className="container">
                <Navbar />
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Title</label>
                            <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>Search</button>
                        </div>
                    </div>
                    <div className="row">
                        {result.map(
                            (value,index) => {
                                return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3"> 
                                <div class="card">
                                    <img src={value.image} class="card-img-top" alt="..."/>
                                        <div class="card-body">
                                            <h5>{index}</h5>
                                            <h5 class="card-title">{value.title}</h5>
                                            <h5 class="card-title">{value.shape}</h5>
                                            <h5 class="card-title">{value.colour}</h5>
                                            <h5 class="card-title">{value.price}</h5>
                                            
                                            <a href="#" class="btn btn-danger" onClick={()=>{deleteGlasses(value._id)}}>Delete</a>
                                        </div>
                                </div>
                            </div>
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search