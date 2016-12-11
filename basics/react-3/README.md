## Overview

This exercise has a video.

The prereqs are at least 1 year experience with HTML, Javascript, nodejs.

## Component function -> component class (ES5)


The pure Javascript function as a component:

    function Employees() {
        return React.createElement(
            'ul',
            {},
            null
        );
    }

    // React.createElement(Employee)

The createClass way of creating a component:

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

Both of the above produce the same output.

    ReactDOMServer.renderToString(
        React.createElement(
            Employees
        )
    );

## What's the point?

We now have:

- Component as a pure function.
- Component as a React class.

Which leads us to:

#### Pure function is simple and easy. It takes only the props argument.

#### React class takes at /minimum/ an object literal with a "render" property that is a function. This paves the way for further functionality that we will discuss in the next sections.
