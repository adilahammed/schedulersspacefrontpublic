import react,{useEffect,useState} from 'react'
import List from './list/list'
import Loading from './loading/loading';
import Profile from './profile/profile';
import Appointmentmaker from './appointmake/appointmaker';
import axios from 'axios'
import Popup from './popup';
import './body.css'
function Body({token,appointvalue,profilechan,homechange,username,id,picture,email,
    makeappo}){
    const [profile,setprofile]=useState(profilechan)
    const [users, setusers] = useState([])
    const [viewappointment,setviewappointment]=useState(0)
    const [blur, setblur] = useState("")
    const [editappointment,seteditappointment]=useState(1)
    const [slote,setslote]=useState([])
    const [load, setload] = useState(true)
    useEffect(() => {
        axios.post('http://localhost:9000/api/user/apposetusers',{
            token
        }).then((res)=>{
            console.log(res.data.message.dbresultuser);
            setusers(res.data.message.dbresultuser)
            // setload(false)
            // setslote(res.data.message.slotes)
        }).catch((err)=>{
            console.log(err);
        })
        return(()=>{
            
            setusers({})
        })
    }, [])
    useEffect(() => {
        let a=profile
        a++
        setprofile(a)
        console.log("=="+profile);

    }, [profilechan])
    useEffect(()=>{
        if(appointvalue >=2){
            setblur("blurlist") 
            setviewappointment(true)
        }        
    },[appointvalue])
    useEffect(() => {
        seteditappointment(1)
        setprofile(2)
    }, [homechange])
    
    useEffect(() => {
        seteditappointment(makeappo)
        setprofile(2)
    }, [makeappo])

    const closepopup=(a)=>{
        setviewappointment(a)
        setblur("")   
    }
  
    if(profile>=3){
        return(
             <div>
                 <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
                  {viewappointment===true?<Popup closepopup={closepopup} 
                    token={token} />:""}
                <div className={blur}>
                
                 <Profile username={username} token={token} id={id} picture={picture} email={email} />
                </div>    
             </div>   
        )
    }
    
    if(editappointment>1){
        return(
            <Appointmentmaker token={token} />
        )
    }
    

        return(
           <div>
               <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
               {viewappointment===true?<Popup closepopup={closepopup} 
                    token={token} />:""}
               <div className={blur}>
                    {/* {load===true?<Loading />:""} */}
                
                
               {users.map((user)=>{
                   return(
                   <List key={user._id} id={user._id}
                     username={user.username} token={token} picture={user.picture} 
                     slote={slote}
                     />
                   ) 
               })}
               </div>
           </div>
    )


}

export default Body