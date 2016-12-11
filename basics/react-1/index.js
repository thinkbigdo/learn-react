// nodejs
// npm install react react-dom

var React = require('react');
var ReactDOMServer = require('react-dom/server');

var element = React.createElement(
    'div',
    {},
    'Hello World'
);
// <div>Hello World</div>

ReactDOMServer.renderToString(element);