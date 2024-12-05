import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Mainlayout from './components/layout'


//config routing 
const routing = createBrowserRouter([{
  path: '/',
  element:<Mainlayout />,
  children: [
    {
      path: '/',
      element: <App />,
    }
  ]
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={routing} />
  </StrictMode>,
)
