import React, {useState} from 'react'
import { AuthContext } from './AuthContext'

export default function AuthProvider({children}) {
    
    const [isLoggedIn, setIsLoggedIn] = useState(true); //token over here
    
    const login =  () => {

    }
    const logout = () => {

    }

    return (
       <AuthContext.Provider value={{isLoggedIn, login, logout}}>
            {children}
       </AuthContext.Provider>
    )
}
