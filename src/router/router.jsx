import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home'
import Main from '../layouts/Main'
import Cities from "../pages/Cities";
import SignIn from "../pages/SignIn";
import AboutUs from "../pages/AboutUs";

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
                path:'/aboutus',
                element: <AboutUs/>
            },
            {
                path:'/signin',
                element: <SignIn/>
            }
        ]
    },
]);
export default router;