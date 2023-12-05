import React from "react";
import bootstrap from "../../../assets/image/bootstra.png";
import sass from "../../../assets/image/sass.png";
import Bootstrap from "../../../assets/image/bootstrap-latest.png";
import google from "../../../assets/image/google.png";
import browsers from "../../../assets/image/browsers.png";
import FeatureContent from "../FeatureContent/FeatureContent";
export default function SoftwareFeature() {
  return (
    <>
      <div className="feature py-5">
        <div className="container overflow-hidden">
            <FeatureContent
              img1={Bootstrap}
              img2={sass}
              img3={google}
              img4={browsers}
              text1="Bootstrap Latest Version"
              text2="Build with Sass"
              text3="Google Fonts"
              text4="Browser Compatibility"
            />
        </div>
      </div>
    </>
  );
}
