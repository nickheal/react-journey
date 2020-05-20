import React, { useEffect, useState } from 'react';
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
    },
    useStep(el, message) {
      return useEffect(() => {
        const { current } = el;
        value.register(current, message);
        return () => value.unRegister(current);
      });
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
