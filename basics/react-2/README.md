## Overview

This exercise has a video.

The prereqs are at least 1 year experience with HTML, Javascript, nodejs.

## React.createElement() AND component

    function Welcome(props) {
        return React.createElement(
            'h1',
            {},
            'Hello, ' + props.name
        );
    }

    React.createElement(
        Welcome,
        { name: 'React Guru' },
        null
    )

Will generate:

    <h1>Welcome, React Guru</h1>

## Examples / Exercises

- React in nodejs: Run index.js
- React in the browser: Run index.html

## What's the point?

- The point is that you can compose your own elements. These are called components.
- They take in their own props. You can begin to code against them.

In the next video we will dive in some more.
