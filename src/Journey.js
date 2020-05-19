import React, { useState } from 'react';

function getScrimStyle(step) {
  const boundingRect = step.getBoundingClientRect();
  const left = boundingRect.left;
  const right = left + boundingRect.width;
  const top = boundingRect.top;
  const bottom = top + boundingRect.height;
  const { innerHeight, innerWidth } = window;
  return {
    clipPath: `polygon(
      0px 0px,
      0px ${innerHeight}px,
      ${left}px ${innerHeight}px,
      ${left}px ${top}px,
      ${right}px ${top}px,
      ${right}px ${bottom}px,
      ${left}px ${bottom}px,
      ${left}px ${innerHeight}px,
      ${innerWidth}px ${innerHeight}px,
      ${innerWidth}px 0px
    )`,
    backgroundColor: '#333',
    height: '100%',
    left: 0,
    opacity: 0.75,
    position: 'fixed',
    top: 0,
    transition: 'clip-path 500ms ease-in-out',
    width: '100%',
    zIndex: 1
  };
}

const Journey = ({
  steps
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  console.log(steps, currentStep);

  return (
    <div style={getScrimStyle(steps[currentStep]?.el)} />
  )
};

export default Journey;
