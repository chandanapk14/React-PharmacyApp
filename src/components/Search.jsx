import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from './Navbar'

const Search = () => {
    const [data, changeData] = useState(
        {
            "medname": ""
        }
    )

    const [result, setResult] = useState([])

    const inputHandler = (event) => {
        changeData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8069/search", data).then(
            (response) => {
                setResult(response.data)
            }
        ).catch()
    }
    //delete handling event
    const deleteUser = (id) => {
        let input = { "_id": id }
        axios.post("http://localhost:8069/delete", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("successfully  updated")
                }
                else {
                    alert("Error in deletion")
                }
            }
        ).catch().finally()
    }
    return (
        <div>
            <Navbar/><br></br>
            <h3 align="center">SEARCH MEDICINE</h3><br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Medicine Name</label>
                                <input type="text" className="form-control" name="medname" value={data.medname} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br></br>
                                <center><button className="btn btn-primary" onClick={readValue}>SEARCH</button></center>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <center><Link to='/'>Back to Login</Link></center>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <table class="table table-bordered">
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
                            {result.map(
                                (value, index) => {
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
                                        <td><button className="btn btn-danger" onClick={() => { deleteUser(value._id) }}>DELETE</button></td>
                                    </tr>
                                }
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Search