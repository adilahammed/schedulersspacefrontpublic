import react,{useState,useEffect} from 'react'
import './loading.css'

function Loading(){
const[loading,setloading]=useState("Loading")
let tim
useEffect(() => {
    return(
        clearTimeout(tim)
    )
}, [])
const funloading=()=>{
    tim=setTimeout(()=>{
        if(loading==="Loading"){
            setloading("Loading.")
        }
        else if(loading==="Loading."){
            setloading("Loading..")
        }
        else if(loading==="Loading.."){
            setloading("Loading...")
        }
        else if(loading==="Loading..."){
            setloading("Loading")
        }
        
    },1000)
} 
    funloading()
    return(
        <div className="bodyloading">
            <h1 >{loading}</h1>
        </div>
    )
}

export default Loading