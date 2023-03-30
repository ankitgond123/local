import React, { useState } from "react";
export default function UserRegister(){
  
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [mobile,setMobile]= useState("");
    const [password,setPassword]= useState("")
    const newObj={
       name:name,
        email:email,
        mobile:mobile,
        password:password
    }
    function create(){
      
let data=JSON.parse(window.localStorage.getItem("st_details"))
if(data==null)
data=[newObj]
else
data.push(newObj)
window.localStorage.setItem("st_details", JSON.stringify(data));
window.location.reload(true)     
    }

    return(
      
    <React.Fragment>
        <h1>User Register</h1>
        Name : <input  type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/><br/><br/>
        Email : <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} /><br/><br/>
        Mobile : <input type="number" value={mobile} onChange={(e)=>{setMobile(e.target.value)}} /><br/><br/>
        Password <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br/><br/>
         <button onClick={create}>save</button>
    </React.Fragment>
    )
}

