import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const View = () => {
    const [data, changeData] = useState([])
    const fetchData=()=>{
        axios.post("http://localhost:8082/view",data).then(
            (response)=>{
            console.log(response.data)
            changeData(response.data)
        }).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <div className="container">
                <Navbar/>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map(
                                (value,index)=>{
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                    <div class="card">
                                        <img src={value.image} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">{value.title}</h5>
                                            <h5 class="card-title">{value.shape}</h5>
                                            <h5 class="card-title">{value.colour}</h5>
                                            <h5 class="card-title">{value.price}</h5>
                                            
                                            <a href="#" class="btn btn-primary">Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View