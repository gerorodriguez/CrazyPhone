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
    () => !!JSON.parse(localStorage.getItem(MY_AUTH_APP)),
  );

  const [userRole, setUserRole] = useState(() =>
    JSON.parse(localStorage.getItem(ROLE)),
  );

  const login = useCallback(
    function (token) {
      localStorage.setItem(MY_AUTH_APP, JSON.stringify(token));
      setIsAuthenticated(true);
    },
    [setIsAuthenticated],
  );

  const saveAuthorities = useCallback(
    function (authorities) {
      setUserRole(authorities);
      localStorage.setItem(ROLE, JSON.stringify(authorities));
    },
    [setUserRole],
  );

  const logout = useCallback(function () {
    localStorage.removeItem(MY_AUTH_APP);
    localStorage.removeItem(ROLE);
    setIsAuthenticated(false);
    setUserRole('');
  }, []);

  const value = useMemo(
    () => ({
      login,
      logout,
      isAuthenticated,
      userRole,
      saveAuthorities,
    }),
    [isAuthenticated, login, logout, userRole, saveAuthorities],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
