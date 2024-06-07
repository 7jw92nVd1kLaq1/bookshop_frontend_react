import Layout from './components/layout/Layout'
import Home from './pages/Home'
import './index.css'
import { BookStoreThemeProvider } from './context/themeContext';
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';
import Error from './components/common/Error';
import Login from './pages/Login';
import { checkTokenValidity } from './api/auth.api';
import Books from './pages/Books';
import BookDetail from './pages/BookDetail';
import Cart from './pages/Cart';
import Order from './pages/Order';
import OrderList from './pages/OrderList';


const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
    errorElement: <Layout><Error /></Layout>,
  },
  {
    path: "/books",
    element: <Layout flex={true}><Books /></Layout>,
  },
  {
    path: "/books/:id",
    element: <Layout><BookDetail/></Layout>
  },
  {
    path: "/login",
    element: <Layout flex={true}><Login /></Layout>,
    loader: async () => {
      try {
        const {token} = await checkTokenValidity();
        if (token) {
          return redirect("/");
        }
      } catch (error) {
        return null
      }
    }
  },
  {
    path: "/cart",
    element: <Layout><Cart /></Layout>,
    loader: async () => {
      try {
        const {token} = await checkTokenValidity();
        if (!token) {
          return redirect("/login");
        }
        return null;
      } catch (error) {
        return null
      }
    }
  },
  {
    path: "/order",
    element: <Layout flex={true}><Order /></Layout>,
    loader: async () => {
      try {
        const {token} = await checkTokenValidity();
        if (!token) {
          return redirect("/login");
        }
        return null;
      } catch (error) {
        return null
      }
    }
  },
  {
    path: "/order/list",
    element: <Layout><OrderList /></Layout>,
    loader: async () => {
      try {
        const {token} = await checkTokenValidity();
        if (!token) {
          return redirect("/login");
        }
        return null;
      } catch (error) {
        return null
      }
    }
  },
  {
    path: "/order/:id",
    element: <Layout flex={true}><Order /></Layout>,
    loader: async () => {
      try {
        const {token} = await checkTokenValidity();
        if (!token) {
          return redirect("/login");
        }
        return null;
      } catch (error) {
        return null
      }
    }
  }
]);

function App() {
  return (
    <BookStoreThemeProvider>
      <RouterProvider router={BrowserRouter} />
    </BookStoreThemeProvider>
  );
}

export default App;