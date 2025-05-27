import React from 'react'
import Navbar from "./Navbar";
import { Outlet } from 'react-router-dom'
import Footer from './footer';

export default function Mainlayout() {
  return (
    <main className=' bg-slate-900'>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  )
}
