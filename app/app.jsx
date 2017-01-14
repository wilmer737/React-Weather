var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');
var Main = require('Main');
var App = require('App');


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>

        </Route>
    </Router>,
    document.getElementById('app')
);
