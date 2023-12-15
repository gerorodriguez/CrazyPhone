import Header from '../header/Header.jsx';
import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme/theme.context.jsx';
import { APIContext } from '../../services/ApiContext.jsx';

const Layout = () => {
  const { theme } = useContext(ThemeContext);
  const { isLoading } = useContext(APIContext);

  return (
    <div
      style={{ flex: 1, height: '100vh' }}
      className={`${theme === 'dark' ? 'bg-dark' : 'bg-light'} ${
        isLoading && 'opacity-25'
      } `}
    >
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
