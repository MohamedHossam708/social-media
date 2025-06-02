import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom';
import Login from './pages/login/login';
import Home from './pages/home/home';
import { getAllPosts } from './utils/loaders';

const ProtectedLayout = () => {
  const isAuth = !!localStorage.getItem("userToken");
  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/",
    element: <ProtectedLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
        loader:getAllPosts
      },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;