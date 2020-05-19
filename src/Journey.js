import React, { useContext, useState } from 'react';
import JourneyContext from './JourneyContext';
import getScrimStyle from './getScrimStyle';
import getTooltipStyle from './getTooltipStyle';

const Journey = ({
  Component,
  steps
}) => {
  const { stop } = useContext(JourneyContext);
  const [currentStep, setCurrentStep] = useState(0);

  function onClickNext() {
    if (currentStep >= steps.length - 1) return stop();
    setCurrentStep(currentStep + 1);
  }

  return (
    <>
      <div style={getScrimStyle(steps[currentStep]?.el)} />
      <div style={getTooltipStyle(steps[currentStep]?.el)}>
        <Component
          currentStep={currentStep}
          message={steps[currentStep]?.message}
          onClickNext={onClickNext}
          totalSteps={steps.length}
        />
      </div>
    </>
  )
};

export default Journey;
