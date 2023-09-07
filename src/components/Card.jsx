import React from 'react'

function Card({icon, text, button}) {
  return (
    <div className='flex flex-col p-5 shadow-md rounded-lg'>
        <img src={icon} alt="" />
        <small>{text}</small>
        <button className='px-4 py-1'>
            <small>{button}</small>
        </button>   
    </div>
  )
}

export default Card