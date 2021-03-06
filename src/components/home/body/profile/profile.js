import react,{useState} from 'react'
import './profile.css'
import axios from 'axios'


function Profile({username,token,id,picture,email}){
const [image,setimage]=useState()
const [desc,setdesc]=useState()
    const getimage=(e)=>{
        console.log(e.target.files[0]);
        setimage(e.target.files[0])
    }
    const sendimage=()=>{
        const formdata= new FormData()
        formdata.append('productImage',image)
        axios({
            url:'http://localhost:9000/upload/image',
            method:"post",
            headers:{"Authorization":`Bearer ${token}`},
            data:formdata
        }).then((res)=>{
            // console.log(res.data);
            alert(res.data.message) 
        })
    }
    const getdesc=(e)=>{
        setdesc(e.target.value)
        // console.log(e.target.value);
    }
    const senddesc=()=>{
        axios.post('http://localhost:9000/api/profile',{
                token,desc    
        })
    }
    return(
        <div className="profile">
            <div  className="viewprofile" >
                <div >
                
                <img className="avatar" src={`http://localhost:9000/images/${picture}`} alt="userimage" 
                    width="100" height="100"></img>
                </div>
                <h3>username:{username}</h3>
                <h3>Email:{email}</h3>
            </div>
            <div className="profileedit">
                <div>
                    <input onChange={getimage} type="file"></input>
                    <button onClick={()=>{sendimage()}}>
                        upload
                    </button>
                </div>
                <div className="profiledit">
                 <h2>enter description</h2>   
                <textarea onChange={getdesc} rows="5" cols="30" height="100px" maxLength="120" id="TITLE">
                </textarea>
                 <button onClick={senddesc}> submit</button> 
                </div>

                
                
            </div>
        </div>



    )
}


export default Profile

// http://localhost:9000/images/61358b3cc65046e58f3abc80.jpg