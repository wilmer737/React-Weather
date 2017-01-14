var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');
var App = require('App');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="about" component={About} />
            <Route path="examples" component={Examples} />
            <IndexRoute component={Weather}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
