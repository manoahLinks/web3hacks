import React from 'react'

function Card({icon, text, button}) {
  return (
    <div className='flex justify-center items-center gap-y-8 pt-10 flex-col p-5 shadow-lg border rounded-lg'>
        <img src={icon} alt="icon" className='w-20 h-20' />
        <small className='text-center'>{text}</small>
        <button className='px-6 py-2 bg-[#3888FF] flex items-center rounded-full text-white'>
            <small>{button}</small>
        </button>   
    </div>
  )
}

export default Card