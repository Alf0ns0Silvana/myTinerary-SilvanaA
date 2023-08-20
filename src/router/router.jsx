import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home'
import Main from '../layouts/Main'
import Cities from "../pages/Cities";
import SignIn from "../pages/SignIn";
import AboutUs from "../pages/AboutUs";
import CityDetails from "../components/CityDetails";

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
                element: <CityDetails/>
            },
            {
                path:'/aboutus',
                element: <AboutUs/>
            },
            {
                path:'/signin',
                element: <SignIn/>
            }
            //,
            // {
            //     path:'/*',
            //     element: <h1>Page not found</h1>
            // }
        ]
    },
]);
export default router;