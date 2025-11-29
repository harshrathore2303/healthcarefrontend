import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Header from "./components/Header"
import AppLayout from "./layout/AppLayout"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import About from "./pages/About"
import Faq from "./pages/Faq"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/shop',
        element: <Shop/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/faq',
        element: <Faq/>
      },
      {
        path: '/blog',
        element: <Blog/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/cart',
        element: <Cart/>
      },
    ]
  }
])

function App() {

  return <RouterProvider router={router}/>
}

export default App
