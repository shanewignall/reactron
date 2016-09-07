'use strict'

var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
require('../public/main.css');

ReactDOM.render(routes, document.getElementById('app'));
