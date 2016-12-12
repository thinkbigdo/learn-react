## Overview

This exercise has a video:

The prereqs are at least 1 year experience with HTML, Javascript, nodejs.

## The power of JSX

The power of JSX is in the fact that we can write Javascript as our template engine. We do not need to learn any new idioms to render content.

For example, we can simply iterate over Arrays using any of the array functions such as map, every, reduce, and forEach.

## Babel Automation

We review Babel automation. For this setup we added a basic build command.

    npm run build

## Add the following to your package.json

    "scripts": {
        "build": "babel src -d lib"
    },
    
## Make sure to install

    npm install --save-dev babel-cli
