import { Route, Navigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext.jsx';

const ProtectedRoute = ({ path, element, requiredRoles }) => {
  const { isAuthenticated, userRole } = useAuthContext();

  const isAuthorized =
    isAuthenticated && (!requiredRoles || requiredRoles.includes(userRole));

  return isAuthorized ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
