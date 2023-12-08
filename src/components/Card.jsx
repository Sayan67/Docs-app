import React from 'react'
import { FaRegFileAlt } from "react-icons/fa"
import { LuDownload } from "react-icons/lu"
import { IoMdCloseCircleOutline } from "react-icons/io";
import {motion} from 'framer-motion'
function Card({data,reference}) {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={0.2} className='overflow-hidden relative w-60 h-72 rounded-[35px] bg-zinc-900 text-zinc-400 p-8 text-xl flex-shrink-0'>
            <FaRegFileAlt />
            <p className='text-[0.9rem] mt-5 leading-tight'>{data.title}</p>
            <div className='footer absolute left-0 bottom-0 w-full'>
                <div className='flex w-full items-center justify-between px-8 mb-4'>
                    <h5 className='text-white text-sm'>{data.size}</h5>
                    <span className='rounded-full bg-zinc-500 p-[.4rem] text-white'>
                        {data.close?<IoMdCloseCircleOutline/>:<LuDownload size='0.8em' color='#fff' className='' />}
                    </span>
                </div>
                {data.tag.isTag ? (<div className={`w-full ${data.tag.color==='green'? "bg-green-500" : "bg-sky-500" } py-5`}></div>):null}
                
            </div>
        </motion.div>
    )
}

export default Card