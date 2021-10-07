import React,{useState,useEffect} from "react";
import axios from 'axios'

function Notifiction({token}){
    const [notification, setnotification] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:9000/api/notification/',{params:{token}})
        .then((res)=>{
            console.log(res.data.notifications)
            if(res.data.status==="ok"){
                setnotification(res.data.notifications.reverse())
            }
        })
    }, [])

    return(
        <div>
            <h1>notification</h1>

            {notification.map((a)=>{
                return(
                    <h1>{a}</h1>
                )
            })}
        </div>
    )
}

export default Notifiction