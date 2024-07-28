import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
    <Link class="navbar-brand" to="#">Blog App</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/create">create post</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/viewall">viewall post</Link>
        </li>
        
        <li class="nav-item">
          <Link class="nav-link" to='/viewmypost'>my post</Link>
        </li>
        <li class="nav-item">
          <button onClick={logOut} className="btn btn-success">Log out</button>
        </li>
      </ul>
      
          <Link class="nav-link dropdown" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://tse1.mm.bing.net/th?id=OIP.mpXg7tyCFEecqgUsoW9eQwHaHk&pid=Api&P=0&h=220" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
            welcome
          </Link>
          
          
      
  
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar