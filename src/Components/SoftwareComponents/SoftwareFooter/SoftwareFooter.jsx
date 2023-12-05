import React from "react";
import ft1 from '../../../assets/image/ft-banner-1.png'
import ft2 from '../../../assets/image/ft-banner-2.png'
import ft3 from '../../../assets/image/ft-banner-3.png'
import ft4 from '../../../assets/image/ft-banner-4.png'
export default function SoftwareFooter() {
  return (
    <>
      <div className="software-footer overflow-hidden">
        <div className="footer-content d-flex justify-content-center align-items-center text-center flex-column">
          <span className="footer-title">
            Build Stunning & Powerful Websites Using Quiety
          </span>
          <div className="footer-btn my-3">
            <button className="btn-pruchase text-capitalize">
              pruchase now
            </button>
            <button className="btn-support text-capitalize">get support</button>
          </div>
          <p className="text-light fs-6 mt-5">
            Copyright @2023 All Rights Reserved by <a href="" className="text-danger ">ThemeTags</a>
          </p>
        </div>
      <div className="software-footer__img d-none d-lg-block " data-aos="fade-left"><img src={ft1} alt="" /></div>
      <div className="software-footer__img d-none d-lg-block " data-aos="fade-right"><img src={ft2} alt="" /></div>
      <div className="software-footer__img d-none d-lg-block " data-aos="fade-left"><img src={ft3} alt="" /></div>
      <div className="software-footer__img d-none d-lg-block " data-aos="fade-right"><img src={ft4} alt="" /></div>
      </div>
    </>
  );
}
