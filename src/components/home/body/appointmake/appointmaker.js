import react,{useState} from 'react'
import Slote from './slote'
import './appointmaker.css'
import axios from 'axios'
let from={hour:0,minute:0,time:"am"}
let to={hour:0,minute:0,time:"am"}
function Appointmentmaker({token}){
    const [slote,setslot]=useState([])

    const getminute=(e,d)=>{
        if(e.target.value>60){
            e.target.value=""
        }
        if(d==="from"){
            from.minute=e.target.value
        }else if(d==="to"){
            to.minute=e.target.value
        }
    }
    const gethour=(e,d)=>{
        if(e.target.value>12){
            e.target.value=""
        }
        if(d==="from"){
            from.hour=e.target.value
        }else if(d==="to"){
            to.hour=e.target.value

        }
       
    }
    const time=(e,d)=>{
        console.log(e.target.value);
        if(d==="from"){
            from.time=e.target.value
        }else if(d==="to"){
            to.time=e.target.value
        }
        
    }
    const makeslot=(e)=>{

        let t=`${from.hour}:${from.minute}:${from.time}-${to.hour}:${to.minute}:${to.time}`
        let ar=slote
        let c=ar
        ar.push(t)
        console.log(ar);
        setslot([...ar])
        
        console.log(slote);
    }
    const remove=(id)=>{
        let ar=slote
        ar.splice(id,1)
        setslot([...ar])
    }
    const submit=()=>{
        axios({
            url:"https://schedulerspace.herokuapp.com/api/appointment/setappo",
            method:"post",
            data:{token,setappo:true,slotes:slote}
        })
        .then((res)=>{
            alert(res.data.message)
        })
        .catch((err)=>{
            alert(err)
        })
    }
    
    return(
        <div>
            <div>
                <h1>
                    
                    make your appointments
                </h1>
                <div className="inputpanel">
                    <div >
                        <form>

                        
                        <input className="timeinput" onChange={(e)=>{
                            gethour(e,"from")
                        }} placeholder="hour"></input>
                        <input className="timeinput" onChange={(e)=>{
                            getminute(e,"from")
                        }} placeholder="minutes"></input>

                        <select name="time" onChange={(e)=>{
                            time(e,"from")
                        }} name="hour">
                            <option> am </option>
                            <option> pm </option>                  
                        </select>
                        </form>
                    </div>
                    <div>
                        <input className="timeinput" onChange={(e)=>{
                            gethour(e,"to")
                        }} placeholder="hour"></input>
                        <input className="timeinput" onChange={(e)=>{
                            getminute(e,"to")
                        }} placeholder="minutes"></input>

                            <select name="time" onChange={(e)=>{
                            time(e,"to")
                                }} name="hour">
                            <option> am </option>
                            <option> pm </option>                  
                        </select>
                    </div>
                    
                    <button type="submit" onClick={(e)=>{
                        makeslot(e)
                    }}> ADD</button>
                </div>
                <div onClick={()=>{
                    submit()
                }} className="submit">
                    <h1>
                        submit
                    </h1>
                </div>
                <div className="sloterow">
                    {slote.map((s,index)=>{
                        return(
                            <Slote id={index} time={s} remove={remove} /> 
                            )
                    })}           
                </div>
            </div>
        </div>
    )
}


export default Appointmentmaker