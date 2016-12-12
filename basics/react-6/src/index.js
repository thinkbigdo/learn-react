var hellos = [
    { value: "ne hao" }, // Mandarin attempt
    { value: "hello" },
    { value: "hola" }
]

var Hello = React.createClass({
    render: function () {
        var helloDom = [];

        helloDom = hellos.map(function (hello) {
            return (<li>{hello.value}</li>)
        });

        return (
            <ul>
                {helloDom}
            </ul>
        )
    }
});

element = React.createElement(Hello);