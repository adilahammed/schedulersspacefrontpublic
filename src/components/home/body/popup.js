import react,{useState,useEffect} from  'react'
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import Popuplist from './popuplist';
import axios from 'axios';
import './body.css'

function Popup({closepopup,token}){
    const [requestlist,setrequestlist]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:9000/api/appointment/viewreq',{params:{token:token}})
        .then((res)=>{
            setrequestlist(res.data.message)
            console.log(res.data.message);
        })
    },[])



    return(
        <div className="popup w3-container  w3-animate-zoom">
                   <div onClick={()=>{closepopup(false)}} className="closebutton">
                           
                            <Button >
                                <CloseIcon/>
                             </Button>
                   </div>
                    <h1>afdsfdsfdsfdfds</h1>
                  {requestlist.map((user)=>{
                       return(
                       <Popuplist id={user._id} token={token} username={user.username} />
                       )
                  })}

        </div>
    )
}

export default Popup