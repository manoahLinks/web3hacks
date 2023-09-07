import { Navbar } from '../components'
import { Outlet, useLocation } from 'react-router-dom'

function Main() {

  const location = useLocation()

  return (
    <div className={`${location.pathname === '/' ? `bg-gradient-to-r from-[#513EFF] to-[#52E5FF]` : `bg-white`}  flex flex-col w-full h-screen gap-y-4`}>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Main