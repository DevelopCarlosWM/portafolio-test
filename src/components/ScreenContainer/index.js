import React from 'react';
import './ScreenContainer.scss';

const ScreenContainer = ({ children }) => {
  return (
    <div className="screen-container">
      {children}
    </div>
  );
};

export default ScreenContainer;
