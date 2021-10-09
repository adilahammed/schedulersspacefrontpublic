
import React, { useState } from "react";
import './createacc.css'
import axios from "axios";


function Createacc({changepage}){
const [success, setsuccess] = useState("")
const [username, setusername] = useState("")
const [email, setemail] = useState("")
const [password, setpassword] = useState("")
const gettext=(e,a)=>{
    if(a==="username"){
        setusername(e.target.value)
    }
    if(a==="email"){
        setemail(e.target.value)
    }
    if(a==="password"){
        setpassword(e.target.value)
    }
    
}

const login=()=>{
    console.log(username,email,password);
    console.log("craete clicked");
    axios.post('https://schedulerspace.herokuapp.com/account/create',{
        username,
        email,
        password
    }).then((res)=>{
        console.log(res.data.status);
        
        alert(res.data.status)
        setsuccess(res.data.status)
    }).catch((err)=>{
        console.log(err);
        throw(err)
        alert(err)
    })   
}
return(
    <div className="bo">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
    <link rel="stylesheet" href="assets/css/style.css"></link>
    <div className="registration-form form-body container-fluid ">
        <form>
            <h2>{success}</h2>
            
            <div className="form-icon">
                <span><i className="icon icon-user"></i></span><br/>
            </div>
            
            <div className="form-group">
                <input onChange={(e)=>{gettext(e,"username")}} type="text" value={username} className="form-control item" id="username" placeholder="Username" />
            </div>
            <div className="form-group">
                <input onChange={(e)=>{gettext(e,"email")}} type="text" value={email} className="form-control item" id="email" placeholder="Email" />
            </div>
            <div className="form-group">
                <input onChange={(e)=>{gettext(e,"password")}} type="password" value={password} className="form-control item" id="password" placeholder="Password" />
            </div>
            <div className="form-group">
                <input type="password" className="form-control item" id="password" placeholder="Re-type password" />
            </div>
            
            <div className="form-group">
                <button onClick={login} type="button" className="btn btn-block create-account">Create Account</button>
            </div>
            
        </form>
        <div className="social-media">
            <h5>Sign up with social media</h5>
            <div className="social-icons">
                <a href="#"><i className="icon-social-facebook" title="Facebook"></i></a>
                <a href="#"><i className="icon-social-google" title="Google"></i></a>
                <a href="#"><i className="icon-social-twitter" title="Twitter"></i></a>
            </div>
        <div className="create-login">
            <a onClick={()=>{changepage("login")}} >alerady have an account ?</a>
        </div>
        </div>
    </div>
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.15/jquery.mask.min.js"></script>
    <script src="assets/js/script.js"></script>
</div>
)


}

export default Createacc