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

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // children: [
    //   {
    //     path: "details",
    //     element: <Details />
    //   },
    //   {
    //     path: "add",
    //     element: <div>add</div>
    //   },
    //   {
    //     path: "signIn",
    //     element: <Login />
    //   },
    //   {
    //     path: "signUp",
    //     element: <Register />
    //   },
    // ],
  },
  {
    path: "details",
    element: <Details />,
  },
  {
    path: "add",
    element: <AddFilms />,
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
  // <React.StrictMode>
  //   <Routes>
  //     <Route path='' ></Route>
  //   </Routes>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
