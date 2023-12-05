import React, { useState } from "react";
export default function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      {/* navbar */}
      <div className="navbar position-fixed  z-2">
        <div className="container ">
          <div className="row ">
            <div className="col-md-6 py-2 d-flex align-self-center w-100">
              <select className="language " name="language" id="language">
                <option value="En">ENGLISH</option>
                <option value="Ar">ARABIC</option>
              </select>
              <i className=" mx-3 fs-4 align-middle text-light fa-solid fa-circle-half-stroke"></i>
            </div>
          </div>
        </div>
      </div>
      {/* sidebar */}
      {/* <div
        className={
          menu ? "side-bar  text-center" : "side-bar  text-center "
        }
      >
        <div className="slide-icon ">
          <i
            className={
              menu
                ? "fa-solid fa-bars-staggered text-dark fs-3"
                : "fa-solid fa-bars-staggered text-light fs-3"
            }
            onClick={() => setMenu(!menu)}
          ></i>
        </div>
        <div
          className={
            menu
              ? "social d-flex flex-column text-dark align-items-center gap-3"
              : "social d-flex flex-column text-light align-items-center gap-3"
          }
        >
          <span className="social-link fs-3">
            <i className=" fa-brands fa-facebook-f"></i>
          </span>
          <span className="social-link fs-3">
            <i className=" fa-brands fa-linkedin-in"></i>{" "}
          </span>
          <span className="social-link fs-3">
            <i className=" fa-brands fa-telegram"></i>{" "}
          </span>
          <span className="social-link fs-3">
            <i className=" fa-brands fa-instagram"></i>{" "}
          </span>
          <span className="social-link fs-3">
            <i className=" fa-brands fa-whatsapp"></i>{" "}
          </span>
          <span className="social-link fs-3">
            <i className=" fa-brands  fa-youtube"></i>{" "}
          </span>
        </div>
      </div> */}
      {/* menubar */}
      {/* <div className={menu ? "side-menu ani-right" : "side-menu ani-left"}>
        <div className="row">
          <div className="col-md-6">
            <ul className="menu">
              <li className="menu-item">Historical Periods +</li>
              <li className="menu-item">Places & Collections +</li>
              <li className="menu-item">Stories & Media +</li>
              <li className="menu-item">Children’s World +</li>
              <li className="menu-item">World Heritage +</li>
              <li className="menu-item">Explore Egypt's Map +</li>
              <li className="menu-item">Contact Us +</li>
              <li className="menu-item">About MoTA +</li>
              <li className="menu-item">
                <ul className="list-inline">
                  <li className="list-inline-item">Privacy Policy</li>
                  <li className="list-inline-item">FAQs</li>
                  <li className="list-inline-item">Terms and Conditions</li>
                  <li className="list-inline-item">Related links</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <div className="side-menu__img">
              <img src={accordion} alt="" />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
