import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './pages/Blogs/Blogs';
import Broken from './pages/Broken/Broken';
import Checkout from './pages/Checkout/Checkout';
import ChefDetails from './pages/ChefDetails/ChefDetails';
import Chefs from './pages/Chefs/Chefs';
import Faqs from './pages/Faqs/Faqs';
import Filter from './pages/Filter/Filter';
import Home from './pages/Home/Home';
import Main from './pages/Main/Main';
import ResetPass from './pages/ResetPass/ResetPass';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import User from './pages/User/User';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch("https://foodie-server-snowy.vercel.app/chefs")
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/recipes',
          element: <Chefs></Chefs>,
          loader: () => fetch("https://foodie-server-snowy.vercel.app/chefs")
        },
        {
          path: '/chef/:id',
          element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
          loader: ({ params }) => fetch(`https://foodie-server-snowy.vercel.app/chefs/${params.id}`)
        },
        {
          path: '/faqs',
          element: <Faqs></Faqs>
        },
        {
          path: '/login',
          element: <SignIn></SignIn>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/dashboard',
          element: <PrivateRoute><User></User></PrivateRoute>
        },
        {
          path: '/reset',
          element: <ResetPass></ResetPass>
        },
        {
          path: '/course-details/:id',
          loader: ({ params }) => fetch(`https://foodie-server-snowy.vercel.app/courses/${params.id}`),
          element: <ChefDetails></ChefDetails>
        },
        {
          path: '/checkout/:id',
          loader: ({ params }) => fetch(`https://foodie-server-snowy.vercel.app/courses/${params.id}`),
          element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
        },
        {
          path: '/filter/:category',
          loader: () => fetch("https://foodie-server-snowy.vercel.app/courses"),
          element: <Filter></Filter>
        },
        {
          path: '*',
          element: <Broken></Broken>
        }
      ]
    }
  ]);
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
