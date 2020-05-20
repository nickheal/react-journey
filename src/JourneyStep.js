import React, { useContext, useEffect, useRef } from 'react';
import { node, string } from 'prop-types';
import JourneyContext from './JourneyContext';

const JourneyStep = ({
  children,
  message
}) => {
  const { register, unRegister } = useContext(JourneyContext);
  const el = useRef(null);

  useEffect(() => {
    const { current } = el;
    register(current, message);
    return () => unRegister(current);
  }, [message, register, unRegister]);

  return (
    <div ref={el}>
      {children}
    </div>
  );
}

JourneyStep.propTypes = {
  children: node.isRequired,
  message: string.isRequired
};

export default JourneyStep;
