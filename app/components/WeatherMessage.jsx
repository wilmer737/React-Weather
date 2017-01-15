let React = require('react');

var WeatherMessage = (props) => {
    var {temp, location} = props;
    return (
        <h3>It is {temp} degrees in {location}</h3>
    );
};

module.exports = WeatherMessage;