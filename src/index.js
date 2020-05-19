import { useContext } from 'react';
import JourneyContext from './JourneyContext';

export const useJourney = () => useContext(JourneyContext);

export { default as JourneyProvider } from './JourneyProvider';
export { default as JourneyStep } from './JourneyStep';
export { default as JourneyComponent } from './JourneyComponent';
