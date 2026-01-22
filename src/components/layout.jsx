import React from 'react'
import Navbar from "./Navbar";
import { Outlet } from 'react-router-dom'
import Footer from './Footer';

export default function Mainlayout() {
  return (
    <main className='bg-slate-900 min-h-screen'>
      <Navbar />
      <div className="pt-16 md:pt-20">
        <Outlet />
      </div>
      <Footer />
    </main>
  )
}
