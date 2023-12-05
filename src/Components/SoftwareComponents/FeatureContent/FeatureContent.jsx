import React, { useEffect } from "react";
export default function FeatureContent({
  img1,
  img2,
  img3,
  img4,
  text1,
  text2,
  text3,
  text4,
}) {

  return (
    <>
      <div className="row justify-content-evenly feature-content  g-3">
        <div className="col-md-3   ">
          <div
            className="content p-3 "
          data-aos="zoom-out-right"
          data-aos-anchor-placement="bottom-center"
          >
            <img className="img-fluid" src={img1} alt="" />
            <span className="">{text1}</span>
          </div>
        </div>
        <div className="col-md-3  ">
          <div
            className="content p-3 "
          data-aos="zoom-out-left"
          data-aos-anchor-placement="bottom-center"
          >
            <img className="img-fluid" src={img2} alt="" />
            <span className="">{text2}</span>
          </div>
        </div>
        <div className="col-md-3  ">
          <div
            className="content p-3 "
          data-aos="zoom-out-right"
          data-aos-anchor-placement="bottom-center"
          >
            <img className="img-fluid" src={img3} alt="" />
            <span className="">{text3}</span>
          </div>
        </div>
        <div className="col-md-3  ">
          <div
            className="content p-3 "
          data-aos="zoom-out-left"
          data-aos-anchor-placement="bottom-center"
          >
            <img className="img-fluid" src={img4} alt="" />
            <span className="">{text4}</span>
          </div>
        </div>
        <div className="col-md-3   ">
          <div
            className="content p-3 "
          data-aos="zoom-out-right"
          data-aos-anchor-placement="bottom-center"
          >
            <img className="img-fluid" src={img1} alt="" />
            <span className="">{text1}</span>
          </div>
        </div>
        <div className="col-md-3  ">
          <div
            className="content p-3 "
          data-aos="zoom-out-left"
          data-aos-anchor-placement="bottom-center"
          >
            <img className="img-fluid" src={img2} alt="" />
            <span className="">{text2}</span>
          </div>
        </div>
        <div className="col-md-3  ">
          <div
            className="content p-3 "
          data-aos="zoom-out-right"
          data-aos-anchor-placement="bottom-center"
          >
            <img className="img-fluid" src={img3} alt="" />
            <span className="">{text3}</span>
          </div>
        </div>
        <div className="col-md-3  ">
          <div
            className="content p-3 "
          data-aos="zoom-out-left"
          data-aos-anchor-placement="bottom-center"
          >
            <img className="img-fluid" src={img4} alt="" />
            <span className="">{text4}</span>
          </div>
        </div>
        <div className="col-md-3   ">
          <div
            className="content p-3 "
          data-aos="zoom-out-right"
          data-aos-anchor-placement="bottom-center"
          >
            <img className="img-fluid" src={img1} alt="" />
            <span className="">{text1}</span>
          </div>
        </div>
        <div className="col-md-3  ">
          <div
            className="content p-3 "
          data-aos="zoom-out-left"
          data-aos-anchor-placement="bottom-center"
          >
            <img className="img-fluid" src={img2} alt="" />
            <span className="">{text2}</span>
          </div>
        </div>
        <div className="col-md-3  ">
          <div
            className="content p-3 "
          data-aos="zoom-out-right"
          data-aos-anchor-placement="bottom-center"
          >
            <img className="img-fluid" src={img3} alt="" />
            <span className="">{text3}</span>
          </div>
        </div>
        <div className="col-md-3  ">
          <div
            className="content p-3 "
          data-aos="zoom-out-left"
          data-aos-anchor-placement="bottom-center"
          >
            <img className="img-fluid" src={img4} alt="" />
            <span className="">{text4}</span>
          </div>
        </div>
      </div>
    </>
  );
}
