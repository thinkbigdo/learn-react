## Prereqs: HTML, Javascript, nodejs.

## JSX to the rescue

## The power of JS and HTML in one. No need
## for a separate template engine.

function Hello() {
    return React.createElement(
        'div',
        {},
        'Hello World!'
    )
}

function Hello() {
    return (
        <div>Hello World!</div>
    )
}

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