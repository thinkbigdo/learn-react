## Overview

This exercise has a video.

The prereqs are at least 1 year experience with HTML, Javascript, nodejs.

## Component class --> STATE!!!

As discussed in lesson 3, we now have React.createClass().

- With the class we can now encapsulate state.
- With the class we can have a life cycle event that triggers render asychronously.

## The flow

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
