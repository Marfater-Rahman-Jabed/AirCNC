import { createBrowserRouter } from "react-router-dom";
import ComingSoon from "../Components/Spinner/ComingSoon";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import SearchDetails from "../Components/Card/SearchDetails/SearchDetails";
import SearchCard from "../Components/Card/SearchCard";
import SearchResult from "../Components/Form/SearchResult";
import CheckOut from "../Components/CheckOut/CheckOut";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/coming-soon',
                element: <ComingSoon></ComingSoon>
            },
            {
                path: '/service-details',
                element: <SearchDetails></SearchDetails>
            },
            {
                path: '/search-result',
                element: <SearchResult></SearchResult>
            },
            {
                path: '/checkout',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            }
        ]
    }
])