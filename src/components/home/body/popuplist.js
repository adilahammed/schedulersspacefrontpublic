import react,{useState} from 'react'
import './body.css'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Button } from '@material-ui/core';
import axios from 'axios';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
function Popuplist({id,token,username}){
    const [accepticon, setaccepticon] = useState("add")
    const accept=()=>{
        setaccepticon("loading")
        axios.post("http://localhost:9000/api/appointment/accept",{
            token:token,
            accid:id
        }).then((res)=>{
            if(res.data.status==="ok"){
                setaccepticon("done")
            }
        }).catch((err)=>{
            console.log(err);
        })
    }


    return(
        <div>

            <div>
            <h2 className="poplistname">{username}</h2>
            <div onClick={()=>{accept()}} className="addpersonicon">
                <Button>
                    {accepticon==="add"?<PersonAddIcon fontSize={"large"}/>:accepticon==="loading"?<HourglassEmptyIcon fontSize={"large"}/>:<CheckCircleOutlineIcon fontSize={"large"}/>}
                    {/* <PersonAddIcon fontSize={"large"}/> */}
                </Button>

            </div>
            {/* <button>confirm</button> */}
            </div>
        </div>
    )
}


export default Popuplist