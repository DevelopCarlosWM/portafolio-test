import React from 'react';
import './SkillsetCard.scss';

const SkillsetCard = ({ img, title, content }) => {
  return (
    <div className={"skillset-card"}>
      <div className="card-image">
        <img alt={title} src={img} />
      </div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default SkillsetCard;
