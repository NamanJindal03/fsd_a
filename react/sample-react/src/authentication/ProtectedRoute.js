import React, {useContext} from 'react'
import { AuthContext } from './context/AuthContext'
import { Outlet, Navigate } from 'react-router-dom';

export default function ProtectedRoute() {
    const {isLoggedIn} = useContext(AuthContext);

    

  return (
    <> {isLoggedIn ? <Outlet /> : <Navigate to="/login"/>}</>
  )
}
