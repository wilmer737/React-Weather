let React = require('react');

let WeatherMessage = React.createClass({
    render: function() {
        return (
            <h3>It is {this.props.temp} degrees in {this.props.location}</h3>
        );
    }
});

module.exports = WeatherMessage;