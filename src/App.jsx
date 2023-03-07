import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './Components/HomePage'
import Tabla from './Components/Tabla'

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/celulares' element={<Tabla/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App