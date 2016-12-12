var hellos = [{ value: "ne hao" }, // Mandarin attempt
{ value: "hello" }, { value: "hola" }];

var Hello = React.createClass({
    displayName: "Hello",

    render: function () {
        var helloDom = [];

        helloDom = hellos.map(function (hello) {
            return React.createElement(
                "li",
                null,
                hello.value
            );
        });

        return React.createElement(
            "ul",
            null,
            helloDom
        );
    }
});

element = React.createElement(Hello);