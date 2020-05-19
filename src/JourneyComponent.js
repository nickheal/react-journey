import React from 'react';

const JourneyComponent = ({
  currentStep,
  message,
  onClickNext,
  totalSteps
}) => (
  <>
    <p>{message}</p>
    <button onClick={onClickNext}>{currentStep === totalSteps - 1 ? 'Done' : 'Next'}</button>
  </>
);

export default JourneyComponent;
