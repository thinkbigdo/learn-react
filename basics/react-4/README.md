## Prereqs: HTML, Javascript, nodejs.

## Component class --> STATE!!!

1. With the class we can now encapsulate state.
2. With the class we can have a life cycle event
that triggers render asychronously.

Page load:
-> Component initiated with some state
   -- getInitialState()
-> Component rendered with state and props
   -- render()

At some point later:
-> User clicks
-> Function called
   -- Increment.props.increment: App.increment()
-> State updated
   -- setState()
-> Component rendered with UPDATED state
   and props
   -- render()

## React in nodejs <--- Not for state management.

## React in the browser