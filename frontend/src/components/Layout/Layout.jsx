import Header from '../header/Header.jsx';
import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme/theme.context.jsx';

const Layout = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{ flex: 1, height: '100vh' }}
      className={`${theme === 'dark' ? 'bg-dark' : 'bg-light'}`}
    >
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
