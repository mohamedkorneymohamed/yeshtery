import React from "react";
import Plx from "react-plx";
import CountUp from "react-countup";
import bannerone from "../../../assets/image/hero-banner-1.png";
import bannertwo from "../../../assets/image/hero-banner-2.png";
import bannerthree from "../../../assets/image/hero-banner-3.png";
import bannerfour from "../../../assets/image/hero-banner-4.png";
import bannerfive from "../../../assets/image/hero-banner-5.png";
export default function SofwareBanner() {
  const parallaxData = [
    {
      start: ".software-banner__img",
      end: 1000,
      properties: [
        {
          startValue: 0,
          endValue: 500,
          property: "translateX",
        },
      ],
    },
  ];
  return (
    <>
      <div className="software-banner__img d-none d-md-block">
        <Plx className="img-parallax-one " key={"plx-1"} parallaxData={parallaxData}>
          <img src={bannerone} alt="" />
        </Plx>
        <Plx className="img-parallax-two " key={"plx-2"} parallaxData={parallaxData}>
          <img src={bannertwo} alt="" />
        </Plx>
        <Plx
          className="img-parallax-three "
          key={"plx-3"}
          parallaxData={parallaxData}
        >
          <img src={bannerthree} alt="" />
        </Plx>
        <Plx className="img-parallax-four " key={"plx-4"} parallaxData={parallaxData}>
          <img src={bannerfour} alt="" />
        </Plx>
        <Plx className="img-parallax-five " key={"plx-5"} parallaxData={parallaxData}>
          <img src={bannerfive} alt="" />
        </Plx>
      </div>
      <div className="row align-content-end justify-content-start vh-100">
        <div
          className="col-md-5 ms-md-5 software-banner__title"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <span>Software, IT Solutions, SAAS & Technology HTML Template</span>
          <div className="count d-flex pt-5">
            <div className="count__content mx-2">
              {" "}
              <CountUp start={0} end={20} duration="10"></CountUp>+
              <p className="desc-count">Unique Demo</p>
            </div>
            <div className="count__content mx-2">
              {" "}
              <CountUp start={0} end={40} duration="10"></CountUp>+
              <p className="desc-count">Inner pages</p>
            </div>
            <div className=" count__content mx-2">
              {" "}
              <CountUp start={0} end={100} duration="10"></CountUp>+
              <p className="desc-count">Useful Blocks</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
