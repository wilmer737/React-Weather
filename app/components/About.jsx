var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>This is the about page.</p>

            <ul>
                <li><a href="https://facebook.github.io/react/">React</a> - Was the frontend library used</li>
                <li><a href="https://openweathermap.org/">API</a> - Used Open Weather Map</li>
                <li><a href="https://github.com/wilmer737/React-Weather">GitHub Repo</a></li>
            </ul>
        </div>
    );
};

module.exports = About;
