import { useState } from 'react';
import { Outlet } from 'react-router-dom'
import { addToCart } from '../../services/dataServices';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
export default function Layout({ cartNumber, setCartDetails, setSidebarAnimation }) {
  return (
    <>
      <Navbar
        cartNumber={cartNumber}
        setSidebarAnimation={setSidebarAnimation}
      />
      <Outlet></Outlet>
      <Footer />
    </>
  );
}
