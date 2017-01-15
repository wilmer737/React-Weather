var React = require('react');
var Nav = require('Nav');

var App = (props) => {
    return (
        <div>
            <Nav />
            <h2>Main Component</h2>
            {props.children}
        </div>
    );
};

module.exports = App;
