import router from './routes';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import Header from './components/header/Header';

const App = () => {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
