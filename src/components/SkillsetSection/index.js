import React from 'react';
import SkillsetCard from './components/SkillCard';
import './Skillset.scss';
import icon from './icons/aperture.svg';
import VerticalDivider from './components/VerticalDivider';

const SkillsetSection = () => {
  return (
    <div className="skillset-container">
      <SkillsetCard img={icon} title="Programming" content="I'm a developer asdas dadsa fjsfa s fjas ahsd ashs hsa fahs" />
      <VerticalDivider />
      <SkillsetCard img={icon} title="Designer" content="I'm a developer asdas dadsa fjsfa s fjas ahsd ashs hsa fahs" />
      <VerticalDivider />
      <SkillsetCard img={icon} title="User Experience" content="I'm a developer asdas dadsa fjsfa s fjas ahsd ashs hsa fahs" />
    </div>
  );
};

export default SkillsetSection;
