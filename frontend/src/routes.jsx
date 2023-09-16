import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

export default router;
