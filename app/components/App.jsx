var React = require('react');
var Nav = require('Nav');

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Nav />
                <h1>Hi</h1>
            </div>
        );
    }
});

module.exports = App;
