import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [scrollUp, setScrollUp] = useState(false);
  // scroll to top
  function ScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  // visible scroll to top

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 50) {
        setScrollUp(true);
      } else {
        setScrollUp(false);
      }
    });
  }, []);

  return (
    <>
      {scrollUp ? (
        <div className="scroll-content" onClick={ScrollToTop}>
          <span className="scroll-to-top__content">
            <i className="fa-regular fa-hand-pointer"></i>
          </span>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
