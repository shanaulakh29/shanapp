import React,{useState,useEffect} from 'react';

export default function Appp()
{
const [count,setCount]=useState(0);
 function handleclick(){
    setCount((prev)=>prev+1)
}

return(
    <>
    <p>You clicked {count} times</p>
    <button onClick={handleclick}>click here</button>
    </>
)
}