import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Homepage from "./pages/Homepage";
import Login from './pages/Login'
import Signup from './pages/Signup'
import Otp from './pages/Otp'
import SignupFormik from './pages/SignupFormik'
import ErrorPage from './pages/ErrorPage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { APPLINK } from './utils'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// const values = Object.values(APPLINK)

// const routesdata = values.map((value) => {
//   return { path: value[0], element: value[1] }
      

// })


const router = createBrowserRouter([
  {
    path: APPLINK.HOMEPAGE[0],
    element: <Homepage />,
  },
  {
    path: APPLINK.LOGIN[0],
    element: <Login />,
  },
  {
    path: APPLINK.SIGNUP[0],
    element: <Signup />,
  },
  {
    path: APPLINK.OTP[0],
    element: <Otp />,
  },
  {
    path: APPLINK.SIGNUPFORMIK[0],
    element: <SignupFormik />,
  },
  {
    path: '*',
    element: <ErrorPage />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer/>
  </StrictMode>
);
