let React = require('react');
let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');

let Weather = React.createClass({
    getInitialState: function() {
        return {
            location: 'San Diego',
            temp: 78,
        };
    },

    handleSearch: function(location) {
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