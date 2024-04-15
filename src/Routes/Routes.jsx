import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import SpecialRoute from "../Pages/SpecialRoute/SpecialRoute";
import EstateDetails from "../Pages/EstateDetails/EstateDetails";
import AboutUs from "../Pages/AboutUs/AboutUs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/update-profile",
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
                children: [
                    {
                        path: "/update-profile/:id",
                        element: <UpdateProfile></UpdateProfile>
                    }
                ]
            },
            {
                path: "/special-route",
                element: <PrivateRoute><SpecialRoute></SpecialRoute></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <SignUp></SignUp>
            },
            {
                path:'/estate-details/:id',
                element:<EstateDetails></EstateDetails>
            },
            {
                path:'/about-us',
                element:<AboutUs></AboutUs>
            }
        ]
    },
]);

export default router;