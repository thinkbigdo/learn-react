## Overview

This exercise has a video. https://youtu.be/yrR3b7lOiU8

The prereqs are at least 1 year experience with HTML, Javascript, nodejs.

## JSX to the rescue: The power of JS and HTML in one. No need for a separate template engine.

Until now we have used createElement.

    function Hello() {
        return React.createElement(
            'div',
            {},
            'Hello World!'
        )
    }

But what if we could do this instead:

    function Hello() {
        return (
            <div>Hello World!</div>
        )
    }

Well, we can:

    // Be sure to load babel.
    var babel = require('babel-core');

    console.log(
        babel.transform(
            '<div>Hello World!</div>',
            { presets: ['react'] }
        ).code
    );

    console.log(
        babel.transform(
            '<ul>\
                <li>This is cool!</li>\
                <li>This is cool!</li>\
                <li>This is cool!<span> That\'s right!</span></li>\
            </ul>',
            { presets: ['react'] }
        ).code
    );

## Reference

https://github.com/babel/babel-standalone#usage
https://babeljs.io/docs/plugins/preset-react/
