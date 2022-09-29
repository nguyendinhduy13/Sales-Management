import React from 'react'
import {Route,Routes} from 'react-router-dom'
import { Headers,SignInScreen } from './components'
import HomeScreen from './components/HomeScreen/HomeScreen'
import {AnimatePresence} from "framer-motion"
const App = () => {
  return (
    <AnimatePresence>
    <div className="w-screen h-auto flex flex-col bg-white">
      <Headers/>
      <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full flex flex-col items-center'>
        <Routes>
          <Route path='/login' element={<SignInScreen/>} />
          <Route path='/' element={<HomeScreen/>} />
        </Routes>
      </main>
    </div>
    </AnimatePresence>
  )
}

export default App