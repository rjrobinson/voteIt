/** @jsx React.DOM */

var React = require('react');

var ShowAddButton = React.createClass({displayName: "ShowAddButton",

    render: function() {
        return (
            React.createElement("button", {className: "btn btn-success btn-block"}, "Create New Item")
        );
    }

});

module.exports = ShowAddButton;
