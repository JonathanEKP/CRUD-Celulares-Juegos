import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Celulares from './Components/Celulares'
import CelularesForm from './Components/CelularesForm'
import HomePage from './Components/HomePage'

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/celulares' element={<Celulares/>}/>
                <Route path='/celulares/Add' element={<CelularesForm/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App