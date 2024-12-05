import React from 'react'
import Navbar from "./Navbar";
import { Outlet } from 'react-router-dom'
import Footer from './footer';

export default function Mainlayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
