// nodejs
// npm install react react-dom

var React = require('react');
var ReactDOMServer = require('react-dom/server');

function Employees() {
    return React.createElement(
        'ul',
        {},
        null
    );
}

// React.createElement(Employee)

var Employees = React.createClass({
    // Other goodness...
    render: function() {
        return React.createElement(
            'ul',
            {},
            null
        );
    }
});

ReactDOMServer.renderToString(
    React.createElement(
        Employees
    )
);