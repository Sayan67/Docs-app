import React from 'react'
import Card from './Card'
import { useRef } from 'react';
function Foreground() {
  const data =[
    {
      title:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, dignissimos Lorem ipsum dolor sit amet.",
      size:"0.6mb",
      close:false,
      tag:{
        isTag:true,color:"green",
      }
     
    },
    {
      title:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, dignissimos Lorem ipsum dolor sit amet.",
      size:"0.6mb",
      close:true,
      tag:{
        isTag:true,color:"sky",
      }
     
    },
    {
      title:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, dignissimos Lorem ipsum dolor sit amet.",
      size:"0.6mb",
      close:false,
      tag:{
        isTag:true,color:"green",
      }
     
    },
  ]
  const Ref = useRef(null);
  return (

    <>
        <div ref={Ref} className='overflow-hidden flex gap-5 flex-wrap flex-shrink-0 absolute top-0 z-[3] w-full h-screen p-5'>
            {data.map((item)=>(
                <Card data={item} reference={Ref}/>)
            )}
             
        </div>
    </>
  )
}

export default Foreground