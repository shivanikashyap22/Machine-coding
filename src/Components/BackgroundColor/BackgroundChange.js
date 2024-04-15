import React, { useState } from "react";


const BackgroundChange=()=>{
    const [change, setChange]=useState("red")
    const array=["red", "green", "blue", "orange", "purple"]
   
    const handleClick=()=>{
        const random=array[Math.floor(Math.random()*array.length)]
        setChange(random)
    }

return <>
<div style={{backgroundColor:change}}>
<button onClick={()=>handleClick("yellow")}>Change the color</button>
</div>
</>


}
export default BackgroundChange;