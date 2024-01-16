import React, { Component } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      right: false,
    };
  }

  toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    this.setState({ ...this.state, [anchor]: open });
  };

  list = (anchor, products, deleteProducts, productsCart) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 400 }}
      role="presentation"
      onClick={this.toggleDrawer(anchor, false)}
      onKeyDown={this.toggleDrawer(anchor, false)}
    >
      <List>
        {productsCart[0] ? (
          <ListItem>
            <div className="row justify-content-between align-items-center">
              <div className="col-4">
                {productsCart[0] && (
                  <img
                    src={require(`../../images/${productsCart[0]?.coverImage}`)}
                    className="w-75"
                    alt=""
                  />
                )}
              </div>
              <div className="col-8">
                <h6>{productsCart[0]?.description} </h6>
                <h6> Color: {productsCart[0]?.color} </h6>
                <div className="row align-items-center">
                  <div className="col-6">
                    <h6>{productsCart[0]?.price} EGP</h6>
                  </div>
                  <div className="col-6">
                    <div className="remove-btn">
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteProducts(productsCart[0]?.id)}
                      >
                        {" "}
                        remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ListItem>
        ) : (
          ""
        )}
      </List>
    </Box>
  );

  render() {
    const { cart, products, deleteProducts, productsCart } = this.props;
    return (
      <>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
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
                      {cart ? (
                        <span className="ms-2 bg-danger p-1 px-1 rounded-pill  text-light">
                          {cart}
                        </span>
                      ) : (
                        <span className="ms-2">{cart}</span>
                      )}
                      <div>
                        {["right"].map((anchor) => (
                          <React.Fragment key={anchor}>
                            <Button
                              onClick={this.toggleDrawer(anchor, true)}
                              className="text-dark"
                            >
                              cart
                            </Button>
                            <Drawer
                              anchor={anchor}
                              open={this.state[anchor]}
                              onClose={this.toggleDrawer(anchor, false)}
                            >
                              {this.list(
                                anchor,
                                products,
                                deleteProducts,
                                productsCart
                              )}
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
}

export default Navbar;
