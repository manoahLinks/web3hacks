import React from 'react'
import { Card } from '../components'
import Logo2 from '../assets/icon6.png'
import icon4 from '../assets/icon4.png'
import icon5 from '../assets/icon5.png'

function select() {
  return (
    <div className='md:w-10/12 pt-10 md:mx-auto gap-x-8 grid grid-cols-1 md:grid-cols-3'>
      <Card icon={Logo2} button={`Go to app`} text={`Search, Register and Manage your ENS domain, websites, wallets and more.`}/>
      <Card icon={icon4} button={`Sign up`} text={`Signup and join our DOA and shape the fure of decentralization`}/>
      <Card icon={icon5} button={`Join us`} text={`Join our ever growing community on discord`}/>
    </div>
  )
}

export default select