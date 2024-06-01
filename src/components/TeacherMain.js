import React from 'react'
import { useNavigate } from 'react-router-dom'
const TeacherMain = () => {
    const navigate=useNavigate();
  return (
    <div>
    <h1 className='text-center p-3 m-3'>Student</h1>
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Student Registration</h5>
                        <p className="card-text">Register as a student</p>
                        <button className="btn btn-primary" onClick={()=>{navigate("/teacher")}}>Register</button>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Student Details</h5>
                        <p className="card-text">Get student deatils</p>
                        <a href="#" className="btn btn-primary">Get Details</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default TeacherMain
