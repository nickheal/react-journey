# react-use-poll

[![Codecov Coverage](https://img.shields.io/codecov/c/github/nickheal/react-use-poll/master.svg?style=flat)](https://codecov.io/gh/nickheal/react-use-poll/)
![GitHub](https://img.shields.io/github/license/nickheal/react-use-poll)

## Purpose

react-use-poll is a package designed to simplify polling in functional react components.

## Installation

Add to your project using `npm i -S react-use-poll`

## How to use

The simplest possible use is below.

```javascript
import React from 'react';
import usePoll from 'react-use-poll';

export default function MyComponent() {
  usePoll(() => {
    console.log('Hello world!');
  });
}

// Will log 'Hello world!' once every 5 seconds
```

It supports dependencies in the same way that useEffect does, to restart the poll.

```javascript
import React from 'react';
import usePoll from 'react-use-poll';

export default function MyComponent({ prop1 }) {
  usePoll(() => {
    console.log('Hello world!');
  }, [prop1]);
}

// Will log 'Hello world!' once every 5 seconds
```

It supports asynchronous callbacks. The polling timeout will start at the point that the async function completes.

```javascript
import React from 'react';
import usePoll from 'react-use-poll';

export default function MyComponent() {
  usePoll(async () => {
    await fetch();
    console.log('Hello world!');
  });
}

// Will log 'Hello world!' once every 5 seconds + however long the async function takes to respond
```

It supports different callback times.

```javascript
import React from 'react';
import usePoll from 'react-use-poll';

export default function MyComponent() {
  usePoll(async () => {
    await fetch();
    console.log('Hello world!');
  }, [], {
    interval: 3000
  });
}

// Will log 'Hello world!' once every 3 seconds
```