/* eslint-disable react/jsx-no-target-blank */
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import './App.css'
import Login from "./components/login/login";


const App = () => {

  const router = createBrowserRouter([
    { path: "/", element: <Login /> },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App
