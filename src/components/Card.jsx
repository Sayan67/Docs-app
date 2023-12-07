import React from 'react'
import { FaRegFileAlt } from "react-icons/fa"
import { LuDownload } from "react-icons/lu"
function Card() {
    return (
        <div className='overflow-hidden relative w-60 h-72 rounded-[35px] bg-zinc-900 text-zinc-400 p-8 text-xl'>
            <FaRegFileAlt />
            <p className='text-[0.9rem] mt-5 leading-tight'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, dignissimos Lorem ipsum dolor sit amet.</p>
            <div className='footer absolute left-0 bottom-0 w-full'>
                <div className='flex w-full items-center justify-between px-8 mb-4'>
                    <h5 className='text-white text-sm'>0.4mb</h5>
                    <span className='rounded-full bg-zinc-500 p-[.4rem]'>
                    <LuDownload size='0.8em' color='#fff' className='' />
                    </span>
                </div>
                <div className='w-full bg-green-500 py-5'></div>
            </div>
        </div>
    )
}

export default Card