import React from 'react'

function ChooseUsername() {
  return (
    <div className='m-auto md:w-4/12 flex flex-col items-center gap-y-4'>
        <h4 className='font-bold text-gradient text-2xl'>Your web3 username</h4>
        <small className='text-center font-light text-slate-400'>Your indentity accross web3, one name for all your crypto addresses and your decentralized website.</small>
        <input 
            type="text"
            placeholder='search for a name'
            className='border-slate-300 w-9/12 rounded-lg placeholder-slate-300'
        />
    </div>
  )
}

export default ChooseUsername