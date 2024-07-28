import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate()
  const logOut=()=>{
    sessionStorage.clear()
    navigate("/")
    
  }
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Blog App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/create">create post</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/viewall">viewall post</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href='/viewmypost'>my post</a>
        </li>
        <li class="nav-item">
          <button onClick={logOut} className="btn btn-success">Log out</button>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar