// import React, { Component } from "react";

// export default class Navbar extends Component {

//   render() {
//     return <></>;
//   }
// }

import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
export default function Navbar() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 400 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
     
      {/* contact Us Nav  yeshtery*/}
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src={process.env.PUBLIC_URL + "/images/brand_logo_black.svg"}
            />
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
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-center">
              <li className="nav-item text-center ms-md-3">
                <i className="fa-solid fa-chevron-left p-2"></i>
                <span>
                  Valentine's Day Offers! Buy Two Get One Free{" "}
                  <a href="">Shop Now</a>
                </span>
                <i className="fa-solid fa-chevron-right  p-2"></i>
              </li>
              <li className="nav-item text-center ">
                <a className="nav-link active" href="#">
                  <i className="fa-solid fa-phone-volume p-2"></i>
                  <span> Contact Us</span>
                </a>
              </li>
              <li className="nav-item text-center ">
                <a className="nav-link " href="#">
                  <i className="fa-solid fa-cart-shopping p-2"></i>
                  <span>Track Order</span>
                </a>
              </li>
              <li className="nav-item text-center ">
                <a className="nav-link " href="#">
                  <i className="fa-solid fa-location-dot p-2"></i>{" "}
                  <span>Find A Store</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* filteration Nav  */}

      <div className="filteration-nav py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="filter">
                <div className="search-product d-flex flex-nowrap align-items-center">
                  <div className="search-icon">
                    <i className="fa-solid fa-magnifying-glass fs-3"></i>
                  </div>
                  <div className="input-text">
                    <input type="text" placeholder="Search...." />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7 pt-3 pt-md-0">
              <ul className="list-inline text-center">
                <li className="list-inline-item mx-3">
                  <div className="cart">
                    <i className="fa-brands fa-opencart"></i>
                    <div>
                      {["right"].map((anchor) => (
                        <React.Fragment key={anchor}>
                          <Button
                            onClick={toggleDrawer(anchor, true)}
                            className="text-dark"
                          >
                            cart
                          </Button>
                          <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                          >
                            {list(anchor)}
                          </Drawer>
                        </React.Fragment>
                      ))}
                    </div>
                    <div className="numberOfCart"></div>
                  </div>
                </li>
                <li className="list-inline-item mx-3">
                  <i className="fa-regular fa-heart"></i>
                  <span className="px-1">Wishlist</span>
                </li>
                <li className="list-inline-item mx-3">
                  <i className="fa-regular fa-user"></i>
                  <span className="px-1">Login</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* another filteration Nav */}
      <div className="drowpdown-Nav bg-dark py-4 ">
        <div className="container">
          <ul className="list-inline text-center m-0">
            <li className="list-inline-item text-light mx-2 mx-md-4 mx-lg-5">
              Men
            </li>
            <li className="list-inline-item text-light mx-2 mx-md-4 mx-lg-5">
              Women
            </li>
            <li className="list-inline-item text-light mx-2 mx-md-4 mx-lg-5">
              Unisex
            </li>
            <li className="list-inline-item text-light mx-2 mx-md-4 mx-lg-5">
              Kids
            </li>
            <li className="list-inline-item text-light mx-2 mx-md-4 mx-lg-5">
              Best Sellers
            </li>
            <li className="list-inline-item text-light mx-2 mx-md-4 mx-lg-5">
              New Arrivals
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
