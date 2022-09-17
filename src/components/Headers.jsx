import React from 'react'
import Logo from "../img/logo1.png"
import { motion } from 'framer-motion'
const Headers = () => {
  return (
        <header className='w-screen fixed z-50 p-3 px-4 md:p-6 md:px-16 bg-primary'>
                <div className='hidden md:flex w-full h-full items-center justify-between'>
                <div className='flex items-center gap-2'>
                     <img src={Logo} className="w-10 object-cover" alt="logo" />
                     <p className='text-headingColor text-xl font-bold'>City</p>
                </div>
                <div className='items-center gap-8 flex'>
                        <motion.ul
                        initial={{opacity:0,x:200}}
                        animate={{opacity:1,x:0}}
                        exit={{opacity:0,x:200}}
                        className='flex items-center gap-10'
                        >
                                <li className='text-lg text-textColor hover:text-headingColor duration-100
                                transition-all ease-in-out cursor-pointer'>
                                        Home
                                </li>
                                <li className='text-lg text-textColor hover:text-headingColor duration-100
                                transition-all ease-in-out cursor-pointer'>
                                        Home
                                </li>
                        </motion.ul>
                </div>
                <div className='flex md:hidden w-full h-full'></div>
                </div>
        </header>
  )
}

export default Headers