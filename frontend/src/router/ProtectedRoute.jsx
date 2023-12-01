import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext.jsx';

const ProtectedRoute = ({ children, requiredRole }) => {
  const { isAuthenticated, userRole } = useAuthContext();

  const isAuthorized =
    isAuthenticated && (!requiredRole || userRole.includes(requiredRole));

  return isAuthorized ? <>{children}</> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
