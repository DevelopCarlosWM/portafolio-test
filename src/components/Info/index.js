import React from "react";
import './Info.scss'

const Info= ({ title, content }) => {
  return (
    <div className="info-content">
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
}
export default Info;