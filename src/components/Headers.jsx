import React,{useState} from 'react'
import Logo from "../img/logo1.png"
import Avatar from "../img/avatar.png"
import { motion } from 'framer-motion'
import {MdLogout, MdShoppingBasket} from 'react-icons/md'
import { Link } from 'react-router-dom'
import { actionTypes } from '../context/reducer'
import { useStateValue } from '../context/StateProvider'
const Headers = () => {
        const [{ user }, dispatch] = useStateValue()
        const [isMenu, setIsMenu] = useState(false)
        const logout = async () => {
                setIsMenu(false)
                localStorage.clear()
                dispatch({
                  type: actionTypes.SET_USER,
                  user: null
                })
              }
  return (
        <header className='w-screen fixed z-50 p-3 px-4 md:p-6 md:px-16 bg-primary'>
                <div className='hidden md:flex w-full h-full items-center justify-between'>
                <div className='flex items-center gap-2'>
                     <img src={Logo} className="w-20 object-cover" alt="logo" />
                     <p className='text-headingColor text-xl font-bold'>City</p>
                </div>
                <div className='items-center gap-10 flex'>
                        <motion.ul
                        initial={{opacity:0,x:200}}
                        animate={{opacity:1,x:0}}
                        exit={{opacity:0,x:200}}
                        className='flex items-center gap-10'
                        >
                                <li className='text-lg text-textColor hover:text-slate-900 duration-100
                                transition-all ease-in-out cursor-pointer'>
                                        Home
                                </li>
                                <li className='text-lg text-textColor hover:text-slate-900 duration-100
                                transition-all ease-in-out cursor-pointer'>
                                        Menu
                                </li>
                                <li className='text-lg text-textColor hover:text-slate-900 duration-100
                                transition-all ease-in-out cursor-pointer'>
                                        About us
                                </li>
                                <li className='text-lg text-textColor hover:text-slate-900 duration-100
                                transition-all ease-in-out cursor-pointer'>
                                        Service
                                </li>
                        </motion.ul>
                        <div className='relative flex items-center justify-center'>
                                <MdShoppingBasket
                                className='text-textColor hover:text-slate-900 text-2xl ml-8 -mt-1 cursor-pointer'
                                />
                                <div className='absolute -right-2 -top-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                                        <p className='text-xs text-white font-semibold'>1</p>
                                </div>
                        </div>
                        <div className='relative flex'>
                                <motion.img
                                 whileTap={{scale:0.6}}
                                 src={user ? user.photoURL : Avatar}
                                 className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
                                 onClick={() => setIsMenu(!isMenu)}
                                />
                                  {
                                isMenu&&user && (
                                <motion.div
                                initial={{opacity:0,scale:0.6}}
                                animate={{opacity:1,scale:1}}
                                exit={{opacity:0,scale:0.6}}
                                className="w-40 bg-gray-50 shadow-xl rounded-lg absolute flex flex-col top-12 right-0"
                                >
                                <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100
                                ease-in-out text-textColor text-base'
                                onClick={logout}
                                >
                                Log Out <MdLogout/>
                                </p>
                                </motion.div>
                                )}
                                {!user?
                                <Link to={"/login"}>
                                    <p className='ml-6 mt-2 cursor-pointer'>????ng nh???p</p>     
                                </Link>
                                :
                                <div></div>
                                }
                        </div>
                </div>
                <div className='flex md:hidden w-full h-full'></div>
                </div>
        </header>
  )
}

export default Headers