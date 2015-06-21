/** @jsx React.DOM */
var React = require('react'),
    Feed = require('./components/Feed');

React.renderComponent(
    React.createElement(Feed, null),
    document.getElementById('app')
);
