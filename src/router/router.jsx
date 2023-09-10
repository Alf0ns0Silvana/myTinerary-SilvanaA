import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home'
import Main from '../layouts/Main'
import Cities from "../pages/Cities";
import SignIn from "../pages/SignIn";
import AboutUs from "../pages/AboutUs";
import CityDetails from "../components/CityDetails";
import ProtectedRoute from "./ProtectedRoute";

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
                element: (<ProtectedRoute>
                            <CityDetails/>
                        </ProtectedRoute>)

            },
            {
                path:'/aboutus',
                element: <AboutUs/>
            },
            {
                path:'/signin',
                element: <SignIn/>

            },
            ,
            {
                path:'/signup',
                element: (<ProtectedRoute>
                    <signUp/>
                </ProtectedRoute>)
            },
            {
                path:'/*',
                element: <h1 className="pages-subtitles">Page not found</h1>
            }
            ,
            {
                path:'/404',
                element: <h1 className="pages-subtitles">You need to login or create account to view details</h1>
            }
        ]
    },
]);
export default router;