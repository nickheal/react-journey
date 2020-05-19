# react-journey

[![Codecov Coverage](https://img.shields.io/codecov/c/github/nickheal/react-journey/master.svg?style=flat)](https://codecov.io/gh/nickheal/react-journey/)
![GitHub](https://img.shields.io/github/license/nickheal/react-journey)

![Screenshot](https://github.com/nickheal/react-journey/blob/master/docs/demo.gif?raw=true)

## Purpose

React components to create an interactive journey.

## Installation

Add to your project using `npm i -S react-journey`

## How to use

1. Wrap your application in the `JourneyProvider`. react-journey provides a `JourneyComponent` out of the box, but it is unstyled. You will most likely want to provide your own styled component in place of this.

```javascript
import React from 'react';
import { JourneyComponent, JourneyProvider } from 'react-journey';

ReactDOM.render(
  <JourneyProvider Component={JourneyComponent}>
    <App />
  </JourneyProvider>,
  document.getElementById('root')
);
```

2. Wrap any HTML that you want to include in the journey in a `JourneyStep`. You should provide a message prop for the step to show.

```javascript
import React from 'react';
import { JourneyStep } from 'react-journey';

const MyApp = () => (
  <JourneyStep message="Header">
    <p>A step in the tour!</p>
  </JourneyStep>
);
```

3. Call run on the journey to get it started, and stop if you want to stop it.

```javascript
import React from 'react';
import { useJourney } from 'react-journey';

function App() {
  const { run, stop } = useJourney();

  useEffect(() => {
    run();
    return stop;
  });

  return (
    <p>My app</p>
  );
}
```