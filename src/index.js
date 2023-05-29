import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/login';
import Register from './components/register';
import NotFound from './components/notFound';
import Details from './components/details';
import AddFilms from './components/addFilm';
import { Navigate } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
const isNotLogged = localStorage.getItem("Encrypted userLoginData");

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "details/:filmID",
    element: <Details />,
  },
  {
    path: "add",
    element: isNotLogged ? <AddFilms /> : <Navigate replace to="/" />,
  },
  {
    path: "signIn",
    element: <Login />,
  },
  {
    path: "signUp",
    element: <Register />,
  },
  {
    path: "*",
    element: <NotFound />
  }
]);


root.render(

  <RouterProvider router={router} />
);
reportWebVitals();