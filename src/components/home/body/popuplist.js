import react,{useState,useEffect} from 'react'
import './body.css'
import Popupnames from './popupnames'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Button } from '@material-ui/core';
import axios from 'axios';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
function Popuplist({id,token,names,slotes,sloteno}){
    const [reqnames,setreqnames]=useState([])
   
    // const accept=(n)=>{
    //     console.log(n);
    //  alert(n)
    //     axios.post("http://localhost:9000/api/appointment/accept",{
    //         token:token,
    //         accid:n
    //     }).then((res)=>{
    //         if(res.data.status==="ok"){
    //             setaccepticon("done")
    //         }
    //     }).catch((err)=>{
    //         console.log(err);
    //     })
    // }
    return(
        <div>

            <div>
            <h3 className="">{slotes}</h3>
            {names?names.map((val,i)=>{
               return(

                   <Popupnames sloteno={sloteno} nameno={i} token={token} names={val} />
                //    <div>
                //        <h5 className="poplistname">{val}</h5>
                //        <div onClick={val=>accept(val)} className="inbl hv">
                //             {accepticon==="add"?<PersonAddIcon fontSize={"large"}/>:accepticon==="loading"?<HourglassEmptyIcon fontSize={"large"}/>:<CheckCircleOutlineIcon fontSize={"large"}/>}
                //        </div>

                //    </div>
               ) 

            }):""}
           
            {/* <div onClick={()=>{accept()}} className="addpersonicon">
                <Button>
                    <PersonAddIcon fontSize={"large"}/>
                </Button>

            </div> */}
            {/* <button>confirm</button> */}
            </div>
        </div>
    )
}


export default Popuplist