import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import './App.css';
import Home from './pages/home/Home.jsx';
import Detail from './pages/publicationDetail/PublicationDetail.jsx';
import Publication from './pages/publication/Publication.jsx';
import ProtectedRoute from './router/ProtectedRoute.jsx';
import { ROLE } from './utils/constants.js';
import Layout from './components/Layout/Layout.jsx';
import MyPublications from './pages/myPublications/MyPublications.jsx';
import PublicationDetail from './pages/publicationDetail/PublicationDetail.jsx';
import PublicationsAdmin from "./pages/admin/entities/PublicationsAdmin.jsx";
import BrandsAdmin from "./pages/admin/entities/BrandAdmin/BrandsAdmin.jsx";
import ModelsAdmin from "./pages/admin/entities/ModelsAdmin/ModelsAdmin.jsx";

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
        path: '/publication',
        element: <Publication />,
      },
      {path: '/myPublications',
      element: <MyPublications/>,
      },
      {
        path:"/publication/:id/edit",
        element: <Publication/>,
      },
      {
        path: '/publication/:id',
        element: <PublicationDetail />,
      },
      {
        path: '/admin/publications',
        element: (
          <ProtectedRoute requiredRole={ROLE.admin}>
            <PublicationsAdmin />
          </ProtectedRoute>
        ),
      },
        {
            path: '/admin/brands',
            element: (
                <ProtectedRoute requiredRole={ROLE.admin}>
                    <BrandsAdmin />
                </ProtectedRoute>
            ),
        },
      {
        path: '/admin/models',
        element: (
            <ProtectedRoute requiredRole={ROLE.admin}>
              <ModelsAdmin />
            </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
