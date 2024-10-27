import { LoginForm } from '@/pages/login/ui/loginForm/loginForm';
import { createBrowserRouter, Navigate, Outlet, RouteObject, RouterProvider } from 'react-router-dom';

const publicRoutes: RouteObject[] = [
   {
      path: '/login',
      element: <LoginForm />,
   },
];

const privateRoutes: RouteObject[] = [
   {
      path: '/',
      element: <div>hello</div>,
   },
];

export const PrivateRoutes = () => {
   const isAuthenticated = false;

   return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

const router = createBrowserRouter([
   {
      element: <PrivateRoutes />,
      children: privateRoutes,
   },
   ...publicRoutes,
]);
export const Router = () => {
   return <RouterProvider router={router} />;
};
