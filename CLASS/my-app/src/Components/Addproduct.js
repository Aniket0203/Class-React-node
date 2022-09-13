import React from 'react';
import {useForm} from "react-hook-form";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 


export default function Addproduct() {
    let navigate = useNavigate();

    const { register, handleSubmit,formState: { errors }} = useForm();
    const myfunc =data => {
        console.log(data);
        axios
        .post("http://localhost:3004/users",data)
        .then((res)=>{
            console.log(res.data);
            navigate('/show')
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  return (


    <div className='container'>
        <h1>Add User</h1>
        <form onSubmit={handleSubmit(myfunc)}>
            <input type="text" {...register("username", { required: true, maxLength: 20 ,minLength:2 })} className='form-control'/>
            {errors.username?.type === 'required' && "name is required"}
            {errors.username?.type === 'minLength' && "Name: Min 2"}
            {errors.username?.type === 'maxLength' && "Name: Max20"}


            <br/>
            <input type="text" className='form-control' {...register("usermobile", { required:true})}/><br/>
            <input type="text" className='form-control' {...register("useremail", { required:true})}/><br/>
            {errors.useremail?.type === 'required' && "email is required"}

            <input type="text" className='form-control' {...register("userpassword", { required:true, maxLength: 8, minLength:4})}/><br/>
              <button>Enter</button>


        </form>
    </div>
  )
}
