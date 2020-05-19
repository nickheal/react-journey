import React, { useState } from 'react';
import JourneyContext from './JourneyContext';
import Journey from './Journey';

const JourneyProvider = ({
  children
}) => {
  const [active, setActive] = useState(false);
  const [steps, setSteps] = useState([]);

  const [value] = useState({
    register(el, message) {
      setSteps([...steps, { el, message }])
    },
    run() {
      setActive(true);
    },
    stop() {
      setActive(false);
    },
    unRegister(el) {
      setSteps(steps.filter(step => step.el !== el));
    }
  });

  return (
    <JourneyContext.Provider value={value}>
      {children}
      {active && steps?.length > 0 && <Journey steps={steps} />}
    </JourneyContext.Provider>
  );
};

export default JourneyProvider;
