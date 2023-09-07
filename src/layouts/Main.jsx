import { Navbar } from '../components'
import { Outlet } from 'react-router-dom'

function Main() {
  return (
    <div className='bg-gradient-to-r from-[#513EFF] to-[#52E5FF] flex flex-col w-full h-screen gap-y-4'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Main