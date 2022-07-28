import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { baseUrl } from "../api/api";
import { setLoginModal } from "../redux/action";

function SignUpForm(props) {
    const{isVisible,handleClose}=props
    const [username,setUserName]=useState()
    const [firstName,setFirstName]=useState()
    const [pass,setPass]=useState()
    console.log("line 12",firstName,username,pass)
    const dispatch=useDispatch()
    const className=isVisible?"login-modal-container container-fluid":"hide"
    const handleSubmit=(e)=>{
        console.log(username,pass)
        e.preventDefault()
        fetch(`http://localhost:3004/users`,{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify( {
                firstname:firstName,
                username:username,
                cart:[],
                address:null,
                password: pass
            })
        })
            .then(res=>console.log(res))
            .then(json=>console.log(json))
    }
    
  return (
    <div className="login-container">
      
     
      <form className="">
      <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label ">Email</label>
            <input type="text" value={firstName} onChange={e=>setFirstName(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label ">Username</label>
            <input type="text" value={username} onChange={e=>setUserName(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" onChange={e=>setPass(e.target.value)}  id="exampleInputPassword1"  value={pass}/>
        </div>
        <button type="submit" class="btn btn-primary w-100" onClick={handleSubmit}>Submit</button>
        </form>
    
    
    </div>
  );
}

export default SignUpForm;
