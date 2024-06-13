import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Viewall = () =>{
const [data,changeData]=useState ([])
const fetchData=()=>{
    axios.post("http://localhost:8069/view").then(
        (response)=>{
            changeData(response.data)
        }
    ).catch()
}
useEffect (()=>{fetchData()},[])
return (
<div>
    <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Username</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">Contact No</th>
                                            <th scope="col">Medicine Name</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Ingrediants</th>
                                            <th scope="col">Category</th>
                                            <th scope="col">Dose</th>
                                            <th scope="col">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map(
                                            (value,index)=>{
                                                return <tr>
                                                <td scope="row">{value.username}</td>
                                                <td>{value.address}</td>
                                                <td>{value.contactno}</td>
                                                <td>{value.medname}</td>
                                                <td>{value.meddescr}</td>
                                                <td>{value.ingre}</td>
                                                <td>{value.category}</td>
                                                <td>{value.dose}</td>
                                                <td>{value.price}</td>
                    
                                            </tr>
                                            }
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
)
}

export default Viewall