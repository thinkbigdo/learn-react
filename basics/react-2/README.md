## Prereqs: HTML, Javascript, nodejs.

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
    {name: 'React Guru'},
    null
)

-- > <h1>Hello, React Guru</h1>

## React in nodejs

## React in the browser

## What's the point?

The point is that you can compose your
own elements. These are called components.
They take in their own props. You can begin
to code against them.

In the next video we will dive in some more.