import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Mainlayout from './components/layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import WorkPage from './pages/WorkPage'
import CoursePage from './pages/CoursePage'

// Error component
function ErrorPage() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-gray-400 mb-6">The page you're looking for doesn't exist.</p>
        <a href="/" className="text-blue-400 hover:text-blue-300 underline">
          Go back to home
        </a>
      </div>
    </div>
  )
}

//config routing 
const routing = createBrowserRouter([
  {
    path: '/',
    element: <Mainlayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'work',
        element: <WorkPage />,
      },
      {
        path: 'course',
        element: <CoursePage />,
      },
    ],
  },
], {
  basename: import.meta.env.PROD ? '/portfolio' : '/',
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routing} />
  </StrictMode>,
)
