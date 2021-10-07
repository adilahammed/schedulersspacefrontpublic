import react,{useState,useEffect} from 'react'
import './body.css'
import Popupnames from './popupnames'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Button } from '@material-ui/core';
import axios from 'axios';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
function Popuplist({id,token,names,slotes,sloteno,viewuser}){
    const [reqnames,setreqnames]=useState([])
   
   
    return(
        <div>

            <div>
            <h3 className="">{slotes}</h3>
            {names?names.map((val,i)=>{
               return(

                   <Popupnames key={i} sloteno={sloteno} nameno={i} token={token} names={val}
                    viewuser={viewuser} />
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