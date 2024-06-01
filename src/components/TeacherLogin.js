import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const TeacherLogin = () => {
    const navigate=useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [otp,setOtp]=useState('');
    const [otpVerified,setOtpVerified]=useState(true);
    const [error,setError]=useState(null);
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const res=await axios.post("http://localhost:6767/api/auth/signin",{email,password})
            console.log(res);
            if(res.data){
                localStorage.setItem('current_user',res.data.email);
                navigate("/teachermain");
            }
        } catch (err) {
            if(err.response.data.error=="Please verify your email before login"){
                setOtpVerified(false)
            }
            setError(err.response.data.error);
        }

    }
    const handleVerifyOtp=async(e)=>{
        e.preventDefault();
        try {
            const res=await axios.post("http://localhost:6767/api/auth/verifyotp",{email,otp})
            if(res.data.message){
                setError(null);
                alert("Otp verified successfully");
                setOtpVerified(true);
            }
        } catch (err) {
            setError(err.response.data.error);
        }
    }
    useEffect(()=>{
        if(localStorage.getItem('current_user')){
            navigate("/teachermain")
        }
    },[])
  return (
    <div>
        <form>
            {error?<p className='text-danger'>{error}</p>:""}
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}} required/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} required/>
            </div>
            {!otpVerified?<div className='flex'>
                <input required type='number' placeholder='enter otp'min={4} max={4} onChange={(e)=>{setOtp(e.target.value)}}/>
                <button onClick={handleVerifyOtp} class="btn btn-primary mt-3">Verify Otp</button>
            </div>:""}
            <button onClick={handleSubmit} class="btn btn-primary mt-3">Submit</button>
            <p>Dont have an account? <Link to="/teachersignup"> Sign up</Link></p>
        </form>
    </div>
  )
}

export default TeacherLogin
