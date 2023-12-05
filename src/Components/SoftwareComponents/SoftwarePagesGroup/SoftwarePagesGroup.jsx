import React from 'react'
import demo from "../../../assets/image/demo-1.jpg";
import demo2 from "../../../assets/image/demo-2.jpg";
import demo3 from "../../../assets/image/demo-3.jpg";
import demo4 from "../../../assets/image/demo-4.jpg";
import demo5 from "../../../assets/image/demo-5.jpg";
import demo6 from "../../../assets/image/demo-6.jpg";
import demo7 from "../../../assets/image/demo-7.jpg";
import demo8 from "../../../assets/image/demo-8.jpg";
import SoftwarePages from "../../SoftwareComponents/SoftwarePages/SoftwarePages";

export default function SoftwarePagesGroup() {
  return (
    <>
      <div className="container">
        <div className="row pt-5 g-3">
          <SoftwarePages
            img={demo}
            title="IT Company"
            subtitle="Saas Company"
            number="01"
          />
          <SoftwarePages
            img={demo2}
            title="Modern Saas agency"
            subtitle="Saas Agency"
            number="02"
          />
          <SoftwarePages
            img={demo3}
            title="Desktop App"
            subtitle="Saas Application"
            number="03"
          />
          <SoftwarePages
            img={demo4}
            title="Desktop App"
            subtitle="Saas Application"
            number="04"
          />
          <SoftwarePages
            img={demo5}
            title="Desktop App"
            subtitle="Saas Application"
            number="05"
          />
          <SoftwarePages
            img={demo6}
            title="Desktop App"
            subtitle="Saas Application"
            number="06"
          />
          <SoftwarePages
            img={demo7}
            title="Desktop App"
            subtitle="Saas Application"
            number="07"
          />
          <SoftwarePages
            img={demo8}
            title="Desktop App"
            subtitle="Saas Application"
            number="08"
          />
          <SoftwarePages
            img={demo}
            title="Desktop App"
            subtitle="Saas Application"
            number="09"
          />
        </div>
      </div>
    </>
  );
}
