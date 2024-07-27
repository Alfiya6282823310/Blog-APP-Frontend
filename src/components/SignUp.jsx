import { paste } from '@testing-library/user-event/dist/paste'
import axios from 'axios'
import React, { useState } from 'react'

const SignUp = () => {
    const [input, setInput] = new useState(
        {
            "name": "",
            "phone": "",
            "email": "",
            "password": "",
            "cnfpass": ""
        }
    )
    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        if (input.password == input.cnfpass) {
            let newInput = {
                "name": input.name,
                "phone": input.phone,
                "email": input.email,
                "password": input.password
            }
            axios.post("http://localhost:8081/signup", newInput).then(
                (response) => {
                    console.log(response.data)
                    if (response.data.status == "success") {
                        alert("Registered successfully")
                        setInput({
                            "name": "",
                            "phone": "",
                            "email": "",
                            "password": "",
                            "cnfpass": ""
                        })
                    } else {
                        alert("email id already exists")
                        setInput({
                            "name": "",
                            "phone": "",
                            "email": "",
                            "password": "",
                            "cnfpass": ""
                        })
                    }
                }
            ).catch(
                (error) => {
                    console.log(error)
                }
            )
        } else {
            alert("passowrd and conform password mismatch")
        }
    }
    return (
        <div>
            <div className="container row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Name:</label>
                        <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Phone Number</label>
                        <input type="number" className="form-control" name='phone' value={input.phone} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Email-id</label>
                        <input type="email" className="form-control" name='email' value={input.email} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">password</label>
                        <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Conform Password</label>
                        <input type="password" className="form-control" name='cnfpass' value={input.cnfpass} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button onClick={readValue} className="btn btn-success">sign up</button>
                    </div>
                    <p><a>Already have an account?</a></p>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <a href="" className="btn btn-primary">sign in</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp