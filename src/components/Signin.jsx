import React from 'react'

const Signin = () => {
  return (
    <div>
        
        <div className="container row col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Email id</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">password</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">sign in</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <a href="" className="btn btn-secondary">new users click here</a>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Signin