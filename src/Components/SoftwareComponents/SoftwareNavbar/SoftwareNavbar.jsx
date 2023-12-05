import React, { useEffect, useState } from "react";
import logo from "../../../assets/image/logo-white.svg";
export default function SoftwareNavbar() {
const [navbar, setNavbar] = useState(false);

useEffect(() => {
  window.addEventListener("scroll",()=>{
    if (window.scrollY >= 170) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  })

}, [])

  return (
    <>
      {/* first Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-5">
                <a className="nav-link  active" aria-current="page" href="#">
                  Demo
                </a>
              </li>
              <li className="nav-item mx-5">
                <a className="nav-link " href="#">
                  pages
                </a>
              </li>
              <li className="nav-item mx-5">
                <a className="nav-link " href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <button className=" nv-button bg-danger">Purchase Now</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* second Navbar */}
      <nav
        className={
          navbar
            ? "navbar second navbar-expand-lg navbar-light move-to-bottom  "
            : "navbar second navbar-expand-lg navbar-light "
        }
      >
        <div className="container d-flex">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-5">
                <a className="nav-link  active" aria-current="page" href="#">
                  Demo
                </a>
              </li>
              <li className="nav-item mx-5">
                <a className="nav-link " href="#">
                  pages
                </a>
              </li>
              <li className="nav-item mx-5">
                <a className="nav-link " href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <button className=" nv-button bg-danger">Purchase Now</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  );
}
