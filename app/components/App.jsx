var React = require('react');
var Nav = require('Nav');

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Nav />
                <h2>Main Component</h2>
                {this.props.children}
            </div>
        );
    }
});

module.exports = App;
