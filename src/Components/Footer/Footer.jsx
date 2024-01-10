import React from "react";
export default function Footer() {

  return (
    <>
      <footer>
        <div className="yeshtery-footer pt-4">
          <div className="container">
            <div className="yeshtery-content">
              <div className="row">
                <div className="col-md-6 text-center text-md-start">
                  <div className="desc">
                    <div className="yeshtery-footer__logo pb-2">
                      <img src="/images/brand-logo-yellow.svg" />
                    </div>
                    <p className="yeshtery-footer__desc">
                      This is an exclusive online platform providing the
                      consumer with a convenient way of shopping from stores
                      while in the convenience of their home. Supporting the
                      latest brands and products available in the stock real
                      time.
                    </p>
                    <p className="yeshtery-footer__desc">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Quae itaque consequuntur, excepturi voluptatibus
                      reiciendis assumenda quos, placeat deserunt ut laudantium
                      debitis dolorem voluptas eum iste asperiores sit iure
                      molestias a, dolorum nam doloribus iusto. Cumque vitae
                      necessitatibus iusto ex laudantium. Possimus amet
                      similique excepturi, dolor aspernatur praesentium esse
                      illum modi!
                    </p>
                    <p className="yeshtery-footer__desc">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Modi, accusantium vel voluptatum qui repellat neque?
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <h4 className="subscribe-title py-2 text-center">
                    Subscribe to our newsletter
                  </h4>
                  <div className="subscribe-content">
                    <div className="subscribe d-flex flex-nowrap align-items-center justify-content-between">
                      <div className="input-text">
                        <input type="text" placeholder="Enter Your Email...." />
                      </div>
                      <button className="sub-button" >
                        <span>Subscribe</span>{" "}
                        <i className="fa-regular fa-paper-plane"></i>
                      </button>{" "}
                    </div>
                  </div>
                  <div className="yeshtery-info pt-4">
                    <div className="row">
                      <div className="col-6">
                        {" "}
                        <ul className="yeshtery-info__content">
                          <li className="info-link">About Us</li>
                          <li className="info-link">Contact Us</li>
                          <li className="info-link">Track Order </li>
                          <li className="info-link">Sell With Us</li>
                          <li className="info-link">Shipping And Returns</li>
                        </ul>
                      </div>
                      <div className="col-6">
                        <ul className="yeshtery-social text-center">
                          <li className="social-link">
                            {" "}
                            <img src="/images/facebook@2x.png" width={30} />
                            <span className="ps-2">/YESHTERY</span>
                          </li>
                          <li className="social-link">
                            {" "}
                            <img src="/images/instagram@2x.png" width={30} />
                            <span className="ps-2">/YESHTERY</span>
                          </li>
                          <li className="social-link">
                            {" "}
                            <img src="/images/linkedin@2x.png" width={30} />
                            <span className="ps-2">/YESHTERY</span>
                          </li>
                          <li className="social-link">
                            {" "}
                            <img src="/images/twitter.png" width={35} />
                            <span className="ps-2">/YESHTERY</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="copy-right d-flex justify-content-between align-items-center flex-nowrap py-3">
                  <span>© 2024 yeshtery, all rights reserved.</span>
                  <div className="cash-online">
                    <img src="/images/cash.png" className="mx-1" width={30} />
                    <img src="/images/visa.png" className="mx-1" width={30} />
                    <img
                      src="/images/matercard.png"
                      className="mx-1"
                      width={30}
                    />
                  </div>
                  <span>
                    Powered By <img src="/images/nas_nav.svg" width={80} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
