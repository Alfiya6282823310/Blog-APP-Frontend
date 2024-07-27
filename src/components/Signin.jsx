import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
    const navigate=useNavigate()
    const [input, setInput] = useState(
        {
            "email": "",
            "password": ""
        }
    )
    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValue=()=>{
        console.log(input)
        axios.post("http://localhost:8081/signin",input).then(
            (response)=>{
           console.log(response.data)
           if (response.data.status=="incorrect password") {
            alert("incorrect password")
            
           } else if(response.data.status=="invalid email id"){
            alert("invalid email id")
           }
           else{
            let token=response.data.token
            let userid=response.data.userid
            console.log(userid)
            console.log(token)
            sessionStorage.setItem("userid",userid)
            sessionStorage.setItem("token",token)
           }
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }

    return (
        <div>

            <div className="container row col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Email id</label>
                        <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler}/>
                    </div>
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">password</label>
                        <input type="text" className="form-control" name='password' value={input.password} onChange={inputHandler} />
                    </div>
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={readValue}>sign in</button>

                    </div>
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <a href="/signup" className="btn btn-secondary">new users click here</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Signin