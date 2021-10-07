import { Button } from '@material-ui/core'
import react,{useState,useEffect} from 'react'
import './list.css'
import axios from 'axios'

function Expadbar({id,token}){
    const [slotes,setslotes]=useState([])
    const [selection,setselection]=useState("")

    useEffect(() => {
        axios({
            url:"http://localhost:9000/api/appointment/slotes",
            method:"get",
            params:{token:token,id:id}
        }).then((res)=>{
            if(res.data.status==="noslote"){
                
            }else{
                setslotes(res.data.message.slotes)
            }
        })
        return("")
    }, [])
const showbutton=(e)=>{
    console.log(e.target.value);
    setselection(e.target.value)
}
const sendreq=()=>{
   
    axios.post('http://localhost:9000/api/appointment/sendreq',{
        token:token,
        rec_id:id,
        sloteno:selection
    }).then((res)=>{
        console.log(res.data.message)
    }).catch((res)=>{
        console.log(res);
    })
}

console.log(slotes);

return(
    <div className="w3-container  w3-animate-top" >
            <h3>slotes</h3>

            {selection===""?"":
    
            <div className="selectioncont">
                <h3 className="selectedh3">selected:</h3>
                <div className="userselected">
                    <h5 className="selectedh5">{slotes[selection]}</h5>
                </div>
                <div onClick={sendreq} className="sendicon hv" >

                     <svg  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4.01 6.03l7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3z"/></svg>
                </div>
                
            </div>
            }

            <div className="userslotrow">     
                {slotes.map((val,index)=>{
                return (<button onClick={showbutton} value={index} className="userslot"  >
                {val}
            </button>)
                })}
            </div>  
    </div>
    
)

}


export default Expadbar