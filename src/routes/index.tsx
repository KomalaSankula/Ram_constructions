import { createBrowserRouter, Navigate } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Home from '../pages/Home/Home'
import Home2 from '../pages/Home2/Home2'
import About from '../pages/About/About'
import Services from '../pages/Services/Services'
import Projects from '../pages/Projects/Projects'
import Gallery from '../pages/Gallery/Gallery'
import Blog from '../pages/Blog/Blog'
import Contact from '../pages/Contact/Contact'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home-2', element: <Home2 /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'projects', element: <Projects /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'blog', element: <Blog /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
])
