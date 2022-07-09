import { Button } from '@mui/material'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import logo from '../assets/img/ahmed.png'
import Hamburger from './Hamburger'
import { MyLinks } from './MyLinks'
import NavMenu from './Nav-Menu'
function Navbar() {
    const [OpenNav, setOpenNav] = useState(false)
    const openNavHandler = () => {
        setOpenNav(!OpenNav)
    }
    return (
        <div className="flex bg-neutral-900 p-4  justify-between overflow-hidden relative">
            <div className="w-44">
                <a href="/" referrerPolicy='no referrer'>
                    <img src={logo} alt="ahmed soran portfolio" className='w-full' />
                </a>
            </div>
            <Hamburger onClick={openNavHandler} className='md:hidden z-50 ' isActive={OpenNav} />
            <AnimatePresence exitBeforeEnter>
                {
                    OpenNav && (
                        <NavMenu
                            onClick={openNavHandler}
                            children={
                                <div className="text-white md:text-1xl sm:text-xl text-md MenuLinks">
                                    <MyLinks to="/" >Home</MyLinks>
                                    <MyLinks to="/about" >About</MyLinks>
                                    <MyLinks to="/projects" >Projects</MyLinks>

                                    <Button sx={{
                                        backgroundColor: '#ff4900',
                                        color: '#fff',
                                        "&:hover": {
                                            backgroundColor: '#ff9900'
                                        },

                                    }}
                                        disableRipple
                                    >Hire Me</Button>

                                </div>
                            } />

                    )
                }
            </AnimatePresence>

            <div className="w-2/3  justify-evenly text-white items-center hidden md:flex">
                <MyLinks to="/" >Home</MyLinks>
                <MyLinks to="/about" >About</MyLinks>
                <MyLinks to="/projects" >Projects</MyLinks>

                <Button sx={{
                    backgroundColor: '#ff4900',
                    color: '#fff',
                    "&:hover": {
                        backgroundColor: '#ff9900'
                    },
                }}>Hire Me</Button>
            </div>
        </div >
    )
}

export default Navbar