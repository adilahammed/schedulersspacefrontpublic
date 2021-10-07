import React,{useState} from "react";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import axios from 'axios'
function Popupnames({token,names,sloteno,nameno,viewuser}){
    const [accepticon, setaccepticon] = useState("add")


    const accept=()=>{
        // alert(sloteno)
        // alert(nameno)
        setaccepticon("loading")
        axios.post("http://localhost:9000/api/appointment/accept",{
            token:token,
            accid:names,
            sloteno,
            nameno
        }).then((res)=>{
            if(res.data.status==="ok"){
                setaccepticon("done")
            }
        }).catch((err)=>{
            console.log(err);
        })
    }
    // const viewuser=()=>{
        
    // }
    return(
        <div>
           <div className="inbl" onClick={()=>{viewuser(names)}}>
                 <h5 className="poplistname">{names}</h5>
            </div> 
           <div onClick={names=>accept(names)} className="inbl hv">
            {accepticon==="add"?<PersonAddIcon fontSize={"large"}/>:accepticon==="loading"?<HourglassEmptyIcon fontSize={"large"}/>:<CheckCircleOutlineIcon fontSize={"large"}/>}
            </div>
        </div>
    )
}

export default Popupnames