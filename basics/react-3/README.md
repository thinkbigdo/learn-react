## Overview

This exercise has a video.

The prereqs are at least 1 year experience with HTML, Javascript, nodejs.

## Component function -> component class (ES5)

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

## What's the point?

Component as a pure function.
Component as a React class.

-- Pure function is simple and easy. It takes
only the props argument.

-- React class takes at /minimum/ an object
literal with a property that is a function.
This paves the way for further functionality
that we will discuss in the next sections.
