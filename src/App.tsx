import Layout from './components/layout/Layout'
import Home from './pages/Home'
import './index.css'
import { BookStoreThemeProvider } from './context/themeContext';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './components/common/Error';


const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
    errorElement: <Layout><Error /></Layout>,
  },
  {
    path: "/books",
    element: <Layout><div>Books</div></Layout>,
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