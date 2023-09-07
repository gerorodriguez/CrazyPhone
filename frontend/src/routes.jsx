import {
    createBrowserRouter,
  } from "react-router-dom";
import Login from './pages/login/Login.jsx';
import './App.css'
  
  const router = createBrowserRouter([
      { path: "/", element: <Login /> },
      {
        path: "/login",
        element: <Login />,
      },
    ]);

    export default router;

