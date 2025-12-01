"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react' 

const page = () => {
  
  const [value,setValue]=useState("");

  const runBack=async()=>{
    const res=await fetch("/api/test",{
      method:"POST",
      body:JSON.stringify({value}),
      headers:{
         "Content-Type":"application/json"
      }
    })
  }

  return (
    <div> 
      <Input value={value} onChange={(e)=>setValue(e.target.value)}/>
      <Button onClick={runBack}>Hello</Button>
    </div>
  )
}
export default page