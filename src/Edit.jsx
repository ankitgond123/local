 import React, { useState } from "react";
 import {Link} from "react-router-dom"
import { useEffect } from "react";
export default function Edit(){
  // 
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [mobile,setMobile]= useState("");
    const [password,setPassword]= useState("")
   useEffect(()=>{
    var id=JSON.parse(window.localStorage.getItem("id")) 
    var data=JSON.parse(window.localStorage.getItem("st_details"))
    setName(data[id].name)
    setEmail(data[id].email)
    setMobile(data[id].mobile)
    setPassword(data[id].password)
   },[])
   function update(){
  
    var id=JSON.parse(window.localStorage.getItem("id")) 
    var data=JSON.parse(window.localStorage.getItem("st_details"))
    data[id].name=name
    data[id].email=email
    data[id].mobile=email
    data[id].password=password
 
 
    window.localStorage.setItem('st_details',JSON.stringify(data))

   }

    return(
      
    <React.Fragment>
       <h1></h1>
        Name : <input  type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/><br/><br/>
        Email : <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} /><br/><br/>
        Mobile : <input type="number" value={mobile} onChange={(e)=>{setMobile(e.target.value)}} /><br/><br/>
        Password <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br/><br/>
        
        <Link to ="/services"><button onClick={update}>update</button></Link>
    </React.Fragment>
    )
}
