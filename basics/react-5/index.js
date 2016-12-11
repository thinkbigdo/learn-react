var babel = require('babel-core');

console.log(
    babel.transform(
        '<div>Hello World.</div>',
        { presets: ['react'] }
    ).code
);

console.log(
    babel.transform(
        '<div>\
            Hello World This is neat!\
            <a href="/more-info">Click here for more info!</a>\
        </div>',
        { presets: ['react'] }
    ).code
)
