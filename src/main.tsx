import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Body } from './components/Body'
import About from './components/About'
import Contact from './components/Contact';
import Cart from './components/Cart';
import Error from './components/Error';
import  RestaurantMenu from './components/RestaurantMenu';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> ,
        errorElement: <Error/>
      },
      { path: "/about", element: <About />,
        errorElement: <Error/>
       },
      {path: "/contact", element:<Contact/>,
        errorElement: <Error/>
      },
      {
       path:"/restaurant/:resId", element: <RestaurantMenu/>
      },
      {
        path:"/cart" , element: <Cart />
      }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
