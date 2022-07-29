import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../api/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveUserData, setLoginModal } from "../redux/action";

function LoginForm(props) {
    const{isVisible,handleClose}=props
    const [username,setUserName]=useState()
    const [pass,setPass]=useState()
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const notify = () => toast("Wow so easy!");
    const className=isVisible?"login-modal-container container-fluid":"hide"
    const handleSubmit=(e)=>{
        console.log(username,pass)
        e.preventDefault()
        fetch(`http://localhost:3004/users`,{
            method:'GET',
        })
            .then(res=>res.json())
            .then(json=>{
              const data=json.filter(d=>d.username==username)
              console.log(data)
              if(data.length==1){
                dispatch(saveUserData(data[0]))
                toast("Login successfully!")
                navigate('/')
              }else{
                alert("error")
              }
              console.log("22",data)
            })
    }
    
  return (
    <div className="login-container">
      <ToastContainer
           theme='dark'
           position="top-right"
           autoClose={5000}
           hideProgressBar={true}
           newestOnTop={false}
           closeOnClick
           rtl={false}
           pauseOnFocusLoss
           draggable
           pauseOnHover
           />
     
      <form className="">
     
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label ">Username</label>
            <input type="text" value={username} onChange={e=>setUserName(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" onChange={e=>setPass(e.target.value)}  id="exampleInputPassword1"  value={pass}/>
        </div>
       <Link to='/signup'>Signup</Link>
        <button type="submit" class="btn btn-primary w-100" onClick={handleSubmit}>Submit</button>
        </form>
    
    
    </div>
  );
}

export default LoginForm;
