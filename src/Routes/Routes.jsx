import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../Pages/HomePage/HomePage/HomePage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
    //   {
    //     path: '/login',
    //     element: <Login />
    //   },
    //   {
    //     path: '/signup',
    //     element: <Signup />
    //   },
      
    ]
  },
]);