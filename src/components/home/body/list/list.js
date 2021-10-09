import react,{useState,useEffect} from 'react'
import './list.css'
import Expadbar from './expandbar';


function List({id,username,token,picture,slote,desc,email}){
const [expand, setexpand] = useState(false)    
const [slotes,setslotes]=useState([])
const manageexpand=(value)=>{
    setexpand(value)
}

console.log();
console.log(slote);
    return(
        <div onMouseLeave={()=>{
            manageexpand(false)
        }}>
        <div  onClick={()=>{manageexpand(true)}}  className="list">
            <div className="photo">
                <img src={`https://schedulerspace.herokuapp.com/images/${picture}`} 
                width="100" height="100" className="listimage" ></img>
            </div>
            <div className="username">
                <h1>{username}</h1>
                <h5>E-mail:{email}</h5>
            </div>
            <div className="desc">
            <p>{desc}</p>
            </div>
            <div>
            <div className="time">
                {/* <h2>Time:10am TO 4pm</h2> */}
                
            </div>
            </div>
         </div>
         <div  >
             {expand===true? <Expadbar id={id} token={token} />:"" }
            
         </div>
        </div>

    )
}


export default List