import React from 'react'
import { Link } from 'react-router-dom';
export default function SoftwareTitle({title , subtitle}) {
  return (
    <>
      <div className="software-title position-relative">
        <a className="title-content " to='a'>{title}</a>
        <div className="subtitle">{subtitle}</div>
      </div>
    </>
  );
}
