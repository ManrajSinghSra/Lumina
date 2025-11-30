"use client"
import { Button } from '@/components/ui/button'
import React from 'react' 

const page = () => {

  const runBack=async()=>{
    const res=await fetch("/api/test",{
      method:"POST",
      body:JSON.stringify({name:"MANRAJ"}),
      headers:{
         "Content-Type":"application/json"
      }
    })
  }
  return (
    <div>page1
      <Button onClick={runBack}>Hello</Button>
    </div>
  )
}
export default page