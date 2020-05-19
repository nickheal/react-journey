import React, { useState } from 'react';
import JourneyContext from './JourneyContext';
import Journey from './Journey';

const JourneyProvider = ({
  children,
  Component
}) => {
  const [active, setActive] = useState(false);
  const [steps, setSteps] = useState([]);

  const [value] = useState({
    register(el, message) {
      console.log(el, message, steps);
      setSteps(prevSteps => [...prevSteps, { el, message }])
    },
    run() {
      setActive(true);
    },
    stop() {
      setActive(false);
    },
    unRegister(el) {
      setSteps(prevSteps => prevSteps.filter(step => step.el !== el));
    }
  });

  return (
    <JourneyContext.Provider value={value}>
      {children}
      {active && steps?.length > 0 && <Journey Component={Component} steps={steps} />}
    </JourneyContext.Provider>
  );
};

export default JourneyProvider;
