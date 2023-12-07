import React from 'react'

function Background() {
  return (
    <>
    <div className='fixed w-full h-screen z-[3]'>
        <div className=' absolute top-[5%]  flex w-full py-5 justify-center text-zinc-600 text-2xl'>Documents</div>
        <h1 className='tracking-tighter absolute text-[15rem] font-normal  text-zinc-950 top-[50%] right-[50%] translate-x-[50%] -translate-y-[50%]'>Docs.</h1>
    </div>
    </>
  )
}

export default Background