import React, { useEffect, useRef } from 'react';
import { node, string } from 'prop-types';
import { register, unregister } from './index';

const TourStep = ({
  children,
  message
}) => {
  const el = useRef(null);

  useEffect(() => {
    register(el.current);
    return () => unregister(el.current);
  }, []);

  return (
    <div ref={el}>
      {children}
    </div>
  );
}

TourStep.propTypes = {
  children: node.isRequired,
  message: string.isRequired
};

export default TourStep;
