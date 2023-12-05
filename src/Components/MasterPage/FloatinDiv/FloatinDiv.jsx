import React from "react";
import { Link } from "react-router-dom";

export default function FloatinDiv({ text, className, webSiteLink }) {
  return (
    <Link to={webSiteLink}>
      <div className={className}>
        <span className="live-button__title">{text}</span>
      </div>
    </Link>
  );
}
