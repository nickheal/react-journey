import React, { useRef } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { JourneyComponent, JourneyProvider, JourneyStep, useJourney } from 'src/index';

describe('Journey', () => {
  it('should run through steps added using the JourneyStep component', () => {
    const TestApp = jest.fn(() => {
      const { run } = useJourney();

      return (
        <>
          <JourneyStep message="Hi. I'm a message!">
            <p>A component to wrap</p>
          </JourneyStep>
          <JourneyStep message="Hi. I'm a second message!">
            <p>A second component to wrap</p>
          </JourneyStep>
          <button data-testid="start-tour" onClick={run}></button>
        </>
      );
    });

    const { getByTestId, getByText, queryByText } = render(
      <JourneyProvider Component={JourneyComponent}>
        <TestApp />
      </JourneyProvider>
    );

    fireEvent.click(getByTestId('start-tour'));

    expect(getByText('Hi. I\'m a message!'));

    fireEvent.click(getByText('Next'));

    expect(getByText('Hi. I\'m a second message!'));

    fireEvent.click(getByText('Done'));

    expect(queryByText('Hi. I\'m a message!')).toBeNull();

    /** Test that the TestApp isn't getting re-rendered each time the journey state changes */
    expect(TestApp).toHaveBeenCalledTimes(1);
  });

  it('should run through steps added using the useStep hook', () => {
    const TestApp = () => {
      const el1 = useRef(null);
      const el2 = useRef(null);
      const { run, useStep } = useJourney();
      useStep(el1, 'Hi. I\'m a message!');
      useStep(el2, 'Hi. I\'m a second message!');

      return (
        <>
          <p ref={el1}>A component to wrap</p>
          <p ref={el2}>A second component to wrap</p>
          <button data-testid="start-tour" onClick={run}></button>
        </>
      );
    };

    const { getByTestId, getByText, queryByText } = render(
      <JourneyProvider Component={JourneyComponent}>
        <TestApp />
      </JourneyProvider>
    );

    fireEvent.click(getByTestId('start-tour'));

    expect(getByText('Hi. I\'m a message!'));

    fireEvent.click(getByText('Next'));

    expect(getByText('Hi. I\'m a second message!'));

    fireEvent.click(getByText('Done'));

    expect(queryByText('Hi. I\'m a message!')).toBeNull();
  });
});
