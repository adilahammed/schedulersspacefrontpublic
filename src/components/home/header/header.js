import react,{useState} from 'react'
import './header.css'
import EventNoteIcon from '@material-ui/icons/EventNote';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Button } from '@material-ui/core';
import axios from 'axios';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
function Header({username,id,token,tokenmanage,
  viewappointment,profile,home,setappointment,searchcall,
  shownotification,schedule}){
  const [n, setn] = useState(2)
  const [p,setp] =useState(2)
  const [h,seth] =useState(2)
  const [a,seta] =useState(2)
  const [searchtxt,setsearchtxt]=useState("")
  const [not,setnot]=useState(2)
  const [sc,setsc]=useState(2)

  const logout=()=>{
    tokenmanage("")
  }

  const getsearchtxt=(e)=>{
    setsearchtxt(e.target.value)
  }
  const search=()=>{
    searchcall(searchtxt)
      // alert(searchtxt)
  }
 const setappo=()=>{
   setappointment(a)
   let i=a
   i++
   seta(i)
 
 }

 


    return(
        <div className="header">
                
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" / >
        <nav  className="col-12 navbar  navbar-expand-lg navbar-dark header">
        <div className="container-fluid">
          <img src="http://localhost:9000/images/headerlogo1.png" width="200px" height="50px" ></img>
          {/* <a className="navbar-brand" href="#">{username}</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" >
                <a className="nav-link active hv" onClick={()=>{
                  home(h)
                 let ch=h
                 ch++
                 seth(ch)
                }}  >Home</a>
              </li>
              <li className="nav-item">
                <a onClick={()=>{
                  shownotification(not)
                  setnot(not+1)
                  }} className="nav-link hv" >notification</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <Button> 
                 <EventNoteIcon />
                 </Button> 

                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Button > 
                  <li onClick={setappo} className="drpdo"><a >set appointments</a></li>
                </Button> 
          
                <Button> 
                  <li className="drpdo" onClick={()=>{viewappointment(n)
                     let a=n
                     a++
                     setn(a)
                    }} ><a >VIEW APPOINTMENTS</a></li>
                </Button>
          
                <Button> 
                  <li className="drpdo" onClick={()=>{
                    schedule(sc)
                    setsc(sc+1)
                  }}><a  >Schedules</a></li>
                </Button>
                

                </ul>
              </li>
              <li className="nav-item">
                <Button size="small">
                <a className="nav-link " onClick={()=>{logout()}} >log out</a>
                </Button>
              </li>
              <li className="nav-item">
                <Button size="small">
                <a className="nav-link " onClick={()=>{profile(p)
                  let c=p
                  c++
                  setp(c)
                }} > <PersonOutlineIcon /> </a>
                </Button>
              </li>
            </ul>
            {/* <form className="d-flex"> */}
              <input onChange={getsearchtxt} value={searchtxt} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button onClick={search} className="btn btn-outline-success" type="submit">Search</button>
            {/* </form> */}
          </div>
        </div>
      </nav>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

      </div>
       
    )
}


export default Header