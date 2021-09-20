import react,{useState} from 'react'
import './login.css'
import axios from 'axios';


function Login({changepage,tokenmanage}){
const [username, setusername] = useState("")
const [password, setpassword] = useState("");
const [status, setstatus] = useState("")
    const gettext=(e,a)=>{
        if(a==="username"){
            setusername(e.target.value)
        }
        if(a==="password"){
            setpassword(e.target.value)
        }
        
    }
const login=()=>{
        // console.log(username,password);
    let data={id:username,password}
  
        axios.get('http://localhost:9000/account/login',{params:{
            id:username,
            password:password
        }}).then((res)=>{
            if(res.data.status==="login success"){
                tokenmanage(res.data.token)
            }else if(res.data.status==="error"){
                setstatus(res.data.msg)
            }else{
                setstatus("email or password doesnt match")
                console.log(res.data.status);
            }
            // console.log(res.data.token);
            
        }).catch((err)=>{
            console.log(err);
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
            <h2>{status} </h2>
            <div className="form-icon">
                <span><i className="icon icon-user"></i></span><br />
            </div>
            
            <div className="form-group">
                <input type="text" value={username} onChange={(e)=>{gettext(e,"username")}} className="form-control item" id="username" placeholder="Username or email" />
            </div>
            
            <div className="form-group">
                <input type="password" value={password} onChange={(e)=>{gettext(e,"password")}} className="form-control item" id="password" placeholder="Password" />
            </div>
            
            
            <div className="form-group">
            
                <button type="button" onClick={login} className="btn btn-block create-account">Login</button>
                 
            </div>

            <div className="forgot">
                <a href="#" >forgot password ?</a>
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

            <a  onClick={()=>{changepage("createacc")}} >create new account ?</a>
        </div>
        </div>
    </div>
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.15/jquery.mask.min.js"></script>
    <script src="assets/js/script.js"></script>
</div>

    )
}

export default Login