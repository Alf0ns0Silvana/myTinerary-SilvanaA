import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home'
import Main from '../layouts/Main'
import Cities from "../pages/Cities";
import SignIn from "../pages/SignIn";
import AboutUs from "../pages/AboutUs";
import CityDetails from "../components/CityDetails";
import ProtectedRoute from "./ProtectedRoute";
import SignUp from "../pages/Signup";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        children:[ 
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/Cities',
                element: <Cities/>
            },
            {
                path:'/Cities/:id',
                element: 
                //(<ProtectedRoute  path='/404'>
                            <CityDetails/>
                // </ProtectedRoute>)
            },
            {
                path:'/aboutus',
                element: <AboutUs/>
            },
            {
                path:'/signin',
                element:(<ProtectedRoute path='/'>
                    <SignIn/>
                </ProtectedRoute>)

            },
            ,
            {
                path:'/signup',
                element: <SignUp/>

            },
            {
                path:'/404',
                element: <h1 className="pages-subtitles">You need to login or create account to view details</h1>
            },
            {
                path:'/*',
                element: <h1 className="pages-subtitles">Page not found</h1>
            }
        ]
    },
]);
export default router;