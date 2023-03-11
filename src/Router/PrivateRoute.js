import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../Components/Contexts/Context'
import Spinner from '../Components/Spinner/Spinner'



const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(loading)
    if (loading) {
        return <Spinner></Spinner>
    }

    if (user && user.uid) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace />
}

export default PrivateRoute