import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../Layout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRouts from "../PrivateRouts/PrivateRouts";
import AllSpotsContainer from "../pages/allSpots/AllSpotsContainer";
import UpdateSpot from "../pages/MyList/UpdateSpot";
import HomeSpotsDetails from "../pages/HomeSpotsDetails";
import AddSpots from "../pages/AddSpots/AddSpots";
import MyListContainer from "../pages/MyList/MyListContainer";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/userSpots/admin@gmail.com')
            },
            {
                path: '/details/:id',
                element: <PrivateRouts><HomeSpotsDetails></HomeSpotsDetails></PrivateRouts>,
                loader: ({ params }) => fetch(`http://localhost:5000/userSpot/${params.id}`)
            },
            {
                path: '/add_spot',
                element: <PrivateRouts><AddSpots></AddSpots></PrivateRouts>
            },
            {
                path: '/my_list',
                element: <PrivateRouts><MyListContainer></MyListContainer></PrivateRouts>,
                loader: () => fetch('/agents.json')
            },
            {
                path: '/all_spot',
                element: <AllSpotsContainer></AllSpotsContainer>,
                loader: () => fetch('http://localhost:5000/UAddedSpots')
            },
            {
                path: '/updateSpot/:id',
                element: <UpdateSpot></UpdateSpot>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
]);

export default router;