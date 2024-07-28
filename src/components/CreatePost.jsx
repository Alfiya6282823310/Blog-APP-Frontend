import axios from 'axios'
import React, { useState } from 'react'

const CreatePost = () => {
  const [input, setInput] = useState(
    { "message":"", "userId": sessionStorage.getItem("userid") }
  )
  const inputHandler = (event) => {
    setInput({ ...input, [event.target.name]:event.target.value })
  }
  const token=sessionStorage.getItem("token")
  const readValue = () => {
    console.log((input))
    axios.post("http://localhost:8081/create",input,{
      headers:{"token":token,"Content-Type":"application/json"}
  }).then(
    (response)=>{
if (response.data.status=="success") {
  alert("posted successfully")
} else {
  alert("something went wrong!!!")
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
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">post a message</label>
                <textarea name="message" id="" className="form-control" value={input.message} onChange={inputHandler}></textarea>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={readValue}>post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePost