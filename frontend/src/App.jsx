import router from './routes';
import './App.css';
import {RouterProvider} from 'react-router-dom';

const App = () => {
    return <RouterProvider router={router}/>
};

export default App;
