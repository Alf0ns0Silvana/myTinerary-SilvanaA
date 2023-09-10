import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const user = useSelector(store => store.userReducer.user);
    
    if (user)return children;

    return <Navigate to='/404'/>
}

export default ProtectedRoute ;