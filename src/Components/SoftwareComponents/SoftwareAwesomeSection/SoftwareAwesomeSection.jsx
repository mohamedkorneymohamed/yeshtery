import React, { useEffect } from "react";
import Plx from "react-plx";
import ft1 from "../../../assets/image/fts-1.jpg";
import bannerfive from "../../../assets/image/hero-banner-5.png";

export default function SoftwareAwesomeSection() {
  const parallaxData100 = [
    {
      start: "#sectionIDAwsome",
      end: "#sectionIDAwsome",
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
      <div id="sectionIDAwsome" className="awesome-section__img">
        <Plx
          className="img-parallax-ee customm "
          key={"plx-6"}
          parallaxData={parallaxData100}
        >
          <img src={bannerfive} alt="" />
        </Plx>
      </div>
    </>
  );
}
