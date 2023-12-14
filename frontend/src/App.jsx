import router from './routes';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { useContext } from 'react';
import { APIContext } from './services/ApiContext';
import { ThemeContext } from './contexts/theme/theme.context';
import { Spinner } from 'react-bootstrap';

const App = () => {

  const { theme } = useContext(ThemeContext)
  const { isLoading } = useContext(APIContext);
  return (
    <div className={`${theme === "dark" && "dark-theme"} ${
      isLoading && "opacity-80"
    }`}
    >
      {isLoading && <Spinner />}
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
