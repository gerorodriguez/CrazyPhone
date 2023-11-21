import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import './App.css';
import Home from './pages/home/Home.jsx';
import Admin from './pages/admin/admin.jsx';
import ProtectedRoute from './router/ProtectedRoute.jsx';
import { ROLE } from './utils/constants.js';

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
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/admin',
    element: (
      <ProtectedRoute
        element={<Admin />}
        path="/admin"
        requiredRoles={ROLE.admin}
      />
    ),
  },
]);

export default router;
