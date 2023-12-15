import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MovieDb from './MovieDb'
import Home from './Home'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/movies' element={<MovieDb />}/>
        <Route path='/home' element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}
