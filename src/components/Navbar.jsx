import {HiChevronDown} from 'react-icons/hi2'
import logo from '../assets/logo.png'


function Navbar() {

    const menu = ['Governance', 'Community', 'Team', 'Jobs', 'Doc']

  return (
    <div className='text-white w-full px-10 py-3 flex justify-between '>
        <div className='flex items-center gap-x-2'>
            <img className='h-15 w-10' src={logo} alt="logo" />
            <h1 className='text-xl'>ENS</h1>
        </div>

        <div className='flex items-center gap-x-4'>
            <div className='flex gap-x-2'>
                {menu && menu.map((item)=>(
                    <small>{item}</small>
                ))}
            </div>
            <span className='flex gap-x-1 items-center'>
                <small>EN</small>
                <HiChevronDown/>
            </span>
            <button className='m-auto shadow-lg bg-[#5284FF] px-4 py-2 rounded-full whitespace-nowrap text-white'>
                <small>Get started</small>
            </button>
        </div>
    </div>
  )
}

export default Navbar