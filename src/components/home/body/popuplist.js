import react,{useState,useEffect} from 'react'
import './body.css'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Button } from '@material-ui/core';
import axios from 'axios';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
function Popuplist({id,token,names,slotes}){
    const [accepticon, setaccepticon] = useState("add")
    const [reqnames,setreqnames]=useState([])
    // useEffect(() => {
    //     console.log("&&&&");
    //     // let a=[...names]
    //     setreqnames(names)
    // }, [names])
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
    if(names===null){
        console.log("^^^");
    }
console.log("+++++++");
console.log(names);
    return(
        <div>

            <div>
            <h3 className="poplistname">{slotes}</h3>
            {names?names.map((n)=>{
               return <h5>{n}</h5>
            }):""}
           
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