import React from 'react'
import responsive from '../../../assets/image/responsive-banner.png'
import curveBlue from '../../../assets/image/curve-blue.png'
import curveYellwo from '../../../assets/image/curve-yellow.png'
export default function SoftwareAllDesigns() {
  return (
    <>
      <div className="software-all-designs my-5">
        <div className="responsive-design text-center position-relative overflow-hidden ">
          <img src={responsive} className="img-fluid" alt="" />
          <div
            className="curve-blue"
            data-aos="fade-left"
            data-aos-anchor-placement="center-center"
          >
            <img src={curveBlue} className="d-none d-lg-block" alt="" />
          </div>
          <div
            className="curve-yellow"
            data-aos="fade-right"
            data-aos-anchor-placement="center-center"
          >
            <img src={curveYellwo} className="d-none d-lg-block" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
