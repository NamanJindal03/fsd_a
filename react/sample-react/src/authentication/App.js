import React from 'react'
import {Routes, Route} from 'react-router-dom'
import AuthProvider from './context/AuthProvider'
import ProtectedRoute from './ProtectedRoute'
import { BrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'

export default function App() {
  return (
    <div>
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    {/* non protexted route */}
                    <Route element={<Login />} path='/login'/>
                    <Route element={<ProtectedRoute />}>
                        <Route element={<Home />} path={"/"}/>
                        <Route element={<About />} path={"wishlist"}/>
                    </Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    </div>
  )
}
