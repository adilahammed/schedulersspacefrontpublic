import react,{useState,useEffect} from 'react'
import axios from 'axios'

function Schedule({token}){
    const [schedules, setschedules] = useState([])
    useEffect(() => {
        axios.get('https://schedulerspace.herokuapp.com/api/notification/schedules',{
            params:{token}
        }).then((res)=>{
            console.log(res.data.schedules);
            setschedules(res.data.schedules);
        })
    }, [])
    return(
        <div>
            <h1>
                Schedule
            </h1>
            {schedules.map((a)=>{
                return(
                    <h1>{a}</h1>
                )
            })}
        </div>
    )
}

export default Schedule