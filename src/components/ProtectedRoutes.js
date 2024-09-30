import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate } from "react-router-dom"


 const ProtectedRoute = ({children}) => {

    const {auth}  = useContext(AuthContext)
    if(!auth.isAuthenticated){
        return<Navigate to="/login" />
    }
    return children;
}

export default ProtectedRoute;