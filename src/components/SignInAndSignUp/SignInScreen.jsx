import React from 'react'
import Logo from "../../img/logo1.png"
import LogoGoogle from "../../img/Google.png"
import LogoFaceBook from "../../img/Facebook.png"
import {getAuth,signInWithPopup,GoogleAuthProvider} from "firebase/auth";
import { app } from '../../firebase.config';
import { actionTypes } from '../../context/reducer';
import {useStateValue} from "../../context/StateProvider";
import { Link } from 'react-router-dom';
const SignInScreen = () => {
        const firebaseAuth=getAuth(app);
        const provider=new GoogleAuthProvider();
        const [{user},dispatch]=useStateValue();

        const login = async()=>{
                if(!user){
                        console.log("aaaa")
                        const {user:{refreshToken,providerData}}= await signInWithPopup(firebaseAuth,provider);
                        dispatch({
                                type:actionTypes.SET_USER,
                                user:providerData[0]
                        })
                        localStorage.setItem("user",JSON.stringify(providerData[0]));
                }
        }

  return (
    <div className='w-full bg-orange-300 items-center h-685 flex justify-between'>
        <div className='ml-60'>
                <img src={Logo} 
                alt="logo"
                className='w-350 h-510 object-cover'
                />
        </div>
        <div className='h-510 w-460 bg-white mr-60  items-center'>
                <div className='flex flex-col'>
                        <p className='text-xl mt-10 ml-10'>Đăng nhập</p>
                        <input
                        placeholder='Email'
                        className='w-375 h-12 mt-10 ml-10 border-2 border-gray-300 rounded-lg'
                        />
                        <input
                        placeholder='Password'
                        className='w-375 h-12 mt-10 ml-10 border-2 border-gray-300 rounded-lg'
                        />
                        <Link to={"/"}>
                        <button className='w-375 h-12 mt-10 ml-10 bg-orange-300 text-white rounded-lg'>Đăng nhập</button>
                        </Link>
                        <p className='mt-3 ml-10 text-[15px] text-cartNumBg cursor-pointer'>Quên mật khẩu</p>
                        <div className='flex mt-6'>
                                <Link to={"/"} className='ml-8 flex border-2 border-gray-200 h-10 w-44 items-center justify-center cursor-pointer' onClick={login}>
                                <img
                                src={LogoGoogle}
                                alt="logo"
                                className='w-7 h-7 object-cover'
                                />
                                <p className='ml-3'>Google</p>
                                </Link>
                                <Link to={"/"} className='ml-11 flex border-2 border-gray-200 h-10 w-44 items-center justify-center cursor-pointer'>
                                <img
                                src={LogoFaceBook}
                                alt="logo"
                                className='w-7 h-7 object-cover'
                                />
                                <p className='ml-3'>Facebook</p>
                                </Link>
                        </div>
                        <div className='flex items-center justify-center mt-5'>
                                <p className='text-[15px] text-gray-400'>Bạn mới biết đến Luxury Mobile ?</p>
                                <p className='text-[15px] ml-3 text-cartNumBg cursor-pointer'>Đăng ký</p>
                        </div>
                </div>
        </div>
   </div>
  )
}

export default SignInScreen