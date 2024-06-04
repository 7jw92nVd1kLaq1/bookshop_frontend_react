import Layout from './components/layout/Layout'
import Home from './pages/Home'
import './index.css'
import { BookStoreThemeProvider } from './context/themeContext';
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';
import Error from './components/common/Error';
import Login from './pages/Login';
import { checkTokenValidity } from './api/auth.api';
import Books from './pages/Books';


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
]);

function App() {
  return (
    <BookStoreThemeProvider>
      <RouterProvider router={BrowserRouter} />
    </BookStoreThemeProvider>
  );
}

export default App;