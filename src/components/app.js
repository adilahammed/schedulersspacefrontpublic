import React, { useState,useEffect } from "react";
import Createacc from "./login/createacc";
import Home from "./home/home";
import Login from "./login/login";
let token=localStorage.getItem("token")
function App(){
    const[page,setPage]=useState("login")
    useEffect(() => {
        if(token !==""){
            setPage("homepage")
        }
    }, [])
    const changepage=(a)=>{
        setPage(a)
    }
    const tokenmanage=(t)=>{
        // console.log(t);
        localStorage.setItem("token", t);
        token=localStorage.getItem("token")
        // token=t
        if(token!==""){
            setPage("homepage")
        }else{
            setPage("login")
        }     
    }
    

    if(page==="login" ){
        return(
            <div>
                <Login tokenmanage={tokenmanage} changepage={changepage} />
            </div>
        )
    }else if(page==="createacc"){
        return(
            <div>
                <Createacc  changepage={changepage} />
            </div>
        )
    }else if(page==="homepage" ){
        return(
            <div>
                <Home token={token} tokenmanage={tokenmanage} />
            </div>
        )
    }
    
}

export default App