import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'

var data=JSON.parse(window.localStorage.getItem("st_details"))
function Show() {
    
    function deleteData(x){
       if(window.confirm("are you sure ")){
        var data=JSON.parse(window.localStorage.getItem("st_details"))
        data.splice(x,1);
        window.localStorage.setItem("st_details",JSON.stringify(data))
       }
       window.location.reload(true)

    }
    function EditData(x){
        window.localStorage.setItem("id",JSON.stringify(x))
    }

return(
    <React.Fragment>
        <table border="1">
            <thead>
                <tr>
                <th>id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Edit</th>
                <th>Delete</th>
                </tr>
                
            </thead>
            <tbody>
               {
                data.map((data,index)=>{
                   return(
                    <tr>
                         <td>{index+1}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.mobile}</td>
                    <Link to="/edit"><td><button onClick={()=>EditData(index)}>Edit</button></td></Link>
                     <td><button onClick={()=>deleteData(index)}>Delete</button></td>
                </tr>
                   )
                })
               }
            </tbody>
        </table>
    </React.Fragment>
)


//  data.map((data)=>{

    
//  })
}

export default Show