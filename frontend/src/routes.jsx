import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import './App.css';
import Home from './pages/home/Home.jsx';
import Admin from './pages/admin/admin.jsx';
import ProtectedRoute from './router/ProtectedRoute.jsx';
import { ROLE } from './utils/constants.js';
import Layout from './components/Layout/Layout.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
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
        path: '/admin',
        element: (
          <ProtectedRoute requiredRole={ROLE.admin}>
            <Admin />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
