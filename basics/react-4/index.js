// nodejs
// npm install react react-dom

var React = require('react');
var ReactDOMServer = require('react-dom/server');

function Welcome(props) {
    return React.createElement(
        'div',
        {},
        'Hello, ' + props.name
    );
}

var element = React.createElement(
    Welcome, // 'div'
    {name: 'React ++'},
    null
)
// <h1>Hello, React Guru</h1>

ReactDOMServer.renderToString(element);