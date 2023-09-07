import {HiArrowRight, HiOutlineMagnifyingGlass} from 'react-icons/hi2'
import logo2 from '../assets/logo2.png'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'

function Welcome() {
  return (
    <div className='grid grid-cols-1 gap-y-12 justify-items-center items-center'>
        <div className="w-full md:w-6/12 m-auto bg-white p-2 flex items-center  rounded-lg gap-y-2 ">
            <div className='flex items-center'>
                <img className='h-14 w-14 bg-white' src={logo2} alt="log" />
                <div className="flex flex-col">
                    <small className='font-semibold'>ENS constitutionbook now available</small>
                    <small className='font-light text-slate-500'>
                        A printed copy of the ens constitution and its signers is now available in hardcover and ultra-limited edition of 50
                    </small>
                </div>
            </div>
            
            <HiArrowRight/>
        </div>
        <div className='flex flex-col gap-y-4'>
            <h1 className='text-white text-[50px] text-center font-light'>Secure Naming for the Decentralized Web</h1>
            <p className='text-white text-[25px] font-light text-center'>Become an ENS Voter, Shape the future of Decentralization, and Join Our<br/> Community Today</p>
        </div>
        
        <button className='border border-white py-2 px-16 text-white rounded-full'>
            <small>Get Started</small>
        </button>

        <div className='flex gap-x-6 text-white'>
            <div className='flex flex-col items-center gap-y-2'>
                <img className='w-12 h-12' src={icon1} alt="icn1" />
                <small>SEARCH</small>
            </div>

            <div className='flex flex-col items-center gap-y-2'>
                <img className='w-12 h-12'  src={icon2} alt="icn2" />
                <small>REGISTER</small>
            </div>

            <div className='flex flex-col items-center gap-y-2'>
                <img className='w-12 h-12'  src={icon3} alt="icn3" />
                <small>MANAGE</small>
            </div>
        </div>
    </div>
  )
}

export default Welcome