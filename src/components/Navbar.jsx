import {HiChevronDown} from 'react-icons/hi2'
import logo from '../assets/logo.png'
import { useLocation } from 'react-router-dom'


function Navbar() {

    const location = useLocation()
    const menu = ['Governance', 'Community', 'Team', 'Jobs', 'Doc']

  return (
    <div className={`${location.pathname === '/' ? `text-white` : `text-slate-900 border-b`} w-full px-10 py-3 flex justify-between`}>
        <div className='flex items-center gap-x-2'>
            <img className='h-15 w-10' src={logo} alt="logo" />
            <h1 className='text-xl'>ENS</h1>
        </div>

        <div className='flex items-center gap-x-4'>
            <div className='flex gap-x-4 cursor-pointer'>
                {menu && menu.map((item)=>(
                    <small>{item}</small>
                ))}
            </div>
            <span className='flex gap-x-1 items-center'>
                <small>EN</small>
                <HiChevronDown/>
            </span>
            <button className='m-auto shadow-lg bg-[#5284FF] px-6 py-2 rounded-full whitespace-nowrap text-white'>
                {location.pathname === '/' ? <small>Get started</small> : <small>connect</small>} 
            </button>
        </div>
    </div>
  )
}

export default Navbar