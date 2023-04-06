import React from "react";
import './NestedImages.scss'

const NestedImages = ({ src1, src2 }) => {
  return (
    <div className="nested-images">
      <img alt="img1" src={src1} className="img1"/>
      <img alt="img2" src={src2} className="img2"/>
    </div>
  );
}
export default NestedImages;