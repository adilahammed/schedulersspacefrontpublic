import react,{useState,useEffect} from  'react'
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import Popuplist from './popuplist';
import axios from 'axios';
import './body.css'
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import {ArrowBackIcon} from '@mui/icons-material';

function Popup({closepopup,token}){
    const [slotes,setslotes]=useState([])
    const [reqnames,setreqnames]=useState([])
    const [requestlist,setrequestlist]=useState([])
    const [userdet,setuserdet]=useState("")
    useEffect(()=>{
        axios.get('http://localhost:9000/api/appointment/viewreq',{params:{token:token}})
        .then((res)=>{
            
            console.log(res.data.message);
            setslotes(res.data.message.slotes)
            setreqnames(res.data.message.names)
        })
    },[])

    const viewuser=(a)=>{
        axios.get('http://localhost:9000/api/user/viewuser',{params:{token,name:a}})
        .then((res)=>{
            console.log(res.data.userinfo);
            setuserdet(res.data.userinfo)
        })
    }
    const back=()=>{
        setuserdet("")
    }
    if(userdet !== ""){
        return(
            <div className="popup">
                    <div onClick={back} className="inbl hv">
                        <img src="https://img.icons8.com/ios/50/000000/circled-left-2.png"/>
                   
                    </div>
                    <div onClick={()=>{closepopup(false)}} className="inbl closebutton">
                                <Button >
                                    <CloseIcon/>
                                </Button>
                    </div>
                <div className="userdet">
                    <div>
                        
                          <img className="userdetimage inbl" src={`http://localhost:9000/images/${userdet.picture}`} width="100" height="100"></img>
                          <div className="inbl userdetname">
                            <h1>{userdet.username}</h1>
                            <h3>{userdet.email}</h3>
                          </div>
                          <h3>{userdet.description}</h3>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="popup w3-container  w3-animate-zoom">

                   <div onClick={()=>{closepopup(false)}} className="closebutton">

                             <Button >
                                <CloseIcon/>
                             </Button>
                   </div>
                    <h1>{userdet.username !==""?userdet.username:""}</h1>
                    <h1 >Your slotes</h1>
                  {slotes.map((slote,i)=>{
                       return(
            
                       <Popuplist key={i} token={token} names={reqnames[i]} slotes={slote}
                        sloteno={i} viewuser={viewuser} />
                       )
                  })}

        </div>
    )
}

export default Popup