import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Showproduct() {
    const [api,setApi]  = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3004/users")
        .then((res)=>{
            console.log(res.data);
            setApi(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
  return (
    <div className='container'>
        <h1>Show User</h1>
        <table className='table'>
            <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Password</th>



            </tr>
            {
                api && api.map((obj)=>
                 <tr>
                    <td>{obj.username}</td>
                    <td>{obj.usermobile}</td>
                    <td>{obj.useremail}</td>
                    <td>{obj.userpassword}</td>

                    <td>
                        <Link to={"/delete/"+obj.id}>Delete</Link>
                    </td>
                    <td>
                        <Link to={'/edit/'+obj.id}>Edit</Link>
                    </td>



                 </tr>
                )
            }
        </table>
    </div>
  )
}