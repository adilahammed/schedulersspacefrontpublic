import react,{useEffect,useState} from 'react'
import Header from './header/header'
import Body from './body/body';
import axios from 'axios'


function Home ({token,tokenmanage}){
 const [id, setid] = useState(2);
 const [username, setusername] = useState("");
 const [email, setemail] = useState("");
 const [appointvalue,setappointvalue]=useState()
 const [profilechan,setprofilechan]=useState("1")
 const [homechange,sethomechange]=useState("1")
 const [picture,setpicture]=useState()
 const [makeappo,setmakeappo]=useState("1")
 useEffect(() => {
     axios.get('http://localhost:9000/api/user/personalinfo',{params:{token}}).then((res)=>{
        let {id,username,email,picture}=res.data.userinfo
        let {userinfo1}=res.data.userinfo
        setid(id)
        setusername(username)
        setemail(email)
        setpicture(picture)
     }).catch((err)=>{
        console.log(err);
     })
 }, [])
const viewappointment=(a)=>{
   setappointvalue(a)
}
const profile=(c)=>{
   setprofilechan(c)  
}
const home=(h)=>{
   sethomechange(h)
   
}
const setappointment=(a)=>{
   setmakeappo(a)
   // alert(a)
}

// let nu=profilechange
// console.log("++"+picture);
    return(
    <div>
       <Header viewappointment={viewappointment}
        username={username} id={id} token={token} 
        tokenmanage={tokenmanage} profile={profile} 
        home={home} setappointment={setappointment} />



      <Body appointvalue={appointvalue} token={token} 
      profilechan={profilechan} homechange={homechange} 
      username={username} id={id} picture={picture} 
      email={email} makeappo={makeappo} />

    </div>
)


}

export default Home