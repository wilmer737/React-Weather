let React = require('react');
let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');
let openWeatherMap = require('openWeatherMap');

let Weather = React.createClass({
    getInitialState: function () {
        return {
            location: 'San Diego',
            temp: 78,
        };
    },

    handleSearch: function (location) {
        var that = this;
        openWeatherMap.getTemp(location).then(function(temp) {
            that.setState({
                location: location,
                temp: temp,
            });
        }, function(errorMessage) {
            alert(errorMessage);
        });
    /*
        this.setState({
            location: location,
            temp: 54,
        });
    */

    },

    render: function() {
        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch} />
                <WeatherMessage location={this.state.location} temp={this.state.temp} />
            </div>
        );
    }
});

module.exports = Weather;