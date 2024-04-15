import React, { useState } from "react";

const FormValidation=()=>{
    const [data, setData]=useState({
        email:"",
        password:""
    })
    const [error, setError]=useState({
        email:"",
        password:""
    })
    const handleChange=(e)=>{
        const { name, value } = e.target;
        if(name==="email"){
            if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)){
                setError({...error,email: "Invalid Emial"})
            }   else{
                setError({...error,email: ""}) 
            }
        }
        if(name==="password"){
            if(value.length<8){
                setError({...error,password: "Password must be atleast 8 character"})
            }else{
                setError({...error,password: ""}) 
            }
        }

        setData({...data, [name]:value})
    }
    console.log("as", data)
    return<>
<form>
    <input type="email" name="email" value={data.email} placeholder="Enter Email" onChange={handleChange} required/>

    {error.email}
    <input type="password" name="password" value={data.password} placeholder="Enter password" onChange={handleChange} required/>

    {error.password}
    </form>
    </>
}
export default FormValidation;