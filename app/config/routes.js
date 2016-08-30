var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var First = require('../components/First');
var Next = require('../components/Next');
var Last = require('../components/Last');


var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={First}></Route>
    <Route path='/next' component={Next}></Route>
    <Route path='/last' component={Last}></Route>
  </Router>
);

module.exports = routes;
