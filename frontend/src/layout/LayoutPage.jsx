import NavbarHeader from '../components/navbar/NavbarHeader'
import { Outlet } from 'react-router-dom'

const LayoutPage = () => {
  return (
    <>
      {/* HEADER toàn site */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
        <NavbarHeader />
      </header>

      {/* MAIN CONTENT */}
      <main className="pt-20 min-h-screen bg-slate-50">
        <Outlet />
      </main>
    </>
  )
}

export default LayoutPage
