
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Categories from './pages/Categories/Categories';
import Root from './routes/Root';
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Products from "./pages/Products/Products";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import NotFound from './pages/NotFound/NotFound';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
   

    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/categories",
        element:  < Categories />,
      },
      {
        path: "/cart",
        element:  < Cart />,
      },
      {
        path: "/products",
        element:  < Products />,
      },
      {
        path: "/signin",
        element:  < Signin />,
      },
      {
        path: "/signup",
        element:  < Signup />,
      },
      {
        path: "*",
        element:  < NotFound />,
      },

    ]
  },
  
]);

function App() {
  return (
    <RouterProvider router={router} />
    
  )
}

export default App