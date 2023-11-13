import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

const MY_AUTH_APP = 'AUTH_TOKEN';
const ROLE = 'ROLE';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => !!localStorage.getItem(MY_AUTH_APP),
  );

  const [userRole, setUserRole] = useState(() => localStorage.getItem(ROLE));

  const login = useCallback(
    function (token, role) {
      localStorage.setItem(MY_AUTH_APP, token);
      localStorage.setItem(ROLE, role);
      setIsAuthenticated(true);
      setUserRole(role);
    },
    [setIsAuthenticated, setUserRole],
  );

  const logout = useCallback(function () {
    localStorage.removeItem(MY_AUTH_APP);
    localStorage.removeItem(ROLE);
    setIsAuthenticated(false);
  }, []);

  const value = useMemo(
    () => ({
      login,
      logout,
      isAuthenticated,
      userRole,
    }),
    [isAuthenticated, login, logout, userRole],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
