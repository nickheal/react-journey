# react-journey

[![Codecov Coverage](https://img.shields.io/codecov/c/github/nickheal/react-journey/master.svg?style=flat)](https://codecov.io/gh/nickheal/react-journey/)
![GitHub](https://img.shields.io/github/license/nickheal/react-journey)

![Screenshot](https://github.com/nickheal/react-journey/blob/master/docs/demo.gif?raw=true)

## Purpose

React components to create a delightful interactive journey.

## Table of Contents
1. [Installation](#installation)
2. [How to use](#how-to-use)
3. [Issues](#issues)
4. [Contributions 😁](#contributions-😁)

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
    <p>A step in the journey!</p>
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

## Issues

Please raise any issues on the [GitHub repo](https://github.com/nickheal/react-journey/issues).

## Contributions 😁

All contributions are welcome, and actively encouraged!
