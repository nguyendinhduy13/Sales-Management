import React from 'react'
import {Route,Routes} from 'react-router-dom'
import { Headers,SignInScreen } from './components'
const App = () => {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Headers/>
      <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full'>
        <Routes>
          <Route path='/login' element={<SignInScreen/>} />
        </Routes>
      </main>
    </div>
  )
}

export default App