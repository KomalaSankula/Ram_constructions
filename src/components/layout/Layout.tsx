import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { ModalProvider } from '../../context/ModalContext'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])

  return (
    <ModalProvider>
      <div className="min-h-screen bg-white text-slate-800 flex flex-col justify-between selection:bg-[#1ea6dc] selection:text-white">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ModalProvider>
  )
}
