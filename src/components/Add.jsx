import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Add = () => {
    const [data, changeData] = useState(
        [{
            "medname":"",
        "meddescr":"",
        "ingre":"",
        "category":"",
        "dose":"",
        "price":"",
        "username":"",
        "address":"",
        "contactno":""
        }]
    )

    const inputHandler = (event) => {
        changeData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8069/add", data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Successfully added")
                } else {
                    alert("Error")
                }
            }).catch()
    }
  return (
    <div>
         <div className="container">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="row">
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Username</label>
                                    <input type="text" className="form-control" name="username" value={data.username} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">Address</label>
                                    <textarea className="form-control" name="address" value={data.address} onChange={inputHandler}></textarea>
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Contact No</label>
                                    <input type="text" className="form-control" name="contactno" value={data.contactno} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Medicine Name</label>
                                    <input type="text" className="form-control" name="medname" value={data.medname} onChange={inputHandler}/>
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">Description</label>
                                    <input type="text" className="form-control" name="meddescr" value={data.meddescr} onChange={inputHandler}/>
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Ingrediants</label>
                                    <input type="text" className="form-control" name="ingre" value={data.ingre} onChange={inputHandler}/>
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Category</label>
                                    <select className="form-control" name="category" value={data.category} onChange={inputHandler}>
                                        <option value="-Select-">-Select-</option>
                                        <option value="alcohol+">alcohol</option>
                                        <option value="opioids">opioids</option>
                                        <option value="benzodiazepines">benzodiazepines</option>
                                        <option value="cannabinoiods">cannabinoiods</option>
                                        <option value="barbiturates">barbiturates</option>
                                        <option value="hallucinogens">hallucinogens</option>
                                    </select>
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Dose</label>
                                    <input type="text" className="form-control" name="dose" value={data.dose} onChange={inputHandler}/>
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Price</label>
                                    <input type="text" className="form-control" name="price" value={data.price} onChange={inputHandler}/>
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br>
                                    <button className="btn btn-primary" onClick={readValue}>Register</button>
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <center><Link to='/'>Back to Login</Link></center>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Add