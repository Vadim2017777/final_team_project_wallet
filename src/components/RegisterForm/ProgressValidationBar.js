import React from 'react';
import zxcvbn from 'zxcvbn';

const ProgressValidationBar = ({style, password}) => {
  const passStength = zxcvbn(password);
  const width = (passStength.score * 100) / 4;

  const color = () => {
    switch (passStength.score) {
      case 0:
        return '#828282';
      case 1:
        return '#EA1111';
      case 2:
        return '#FFAD00';
      case 3:
        return '#9bc158';
      case 4:
        return '#00b500';
      default:
        return 'none';
    }
  };

  const progressLineStyle = () => ({
    backgroundColor: color(),
    width: `${width}%`,
    height: '5px',
  });
  return (
    <div className={style}>
      <div style={progressLineStyle()}></div>
    </div>
  );
};

export default ProgressValidationBar;
