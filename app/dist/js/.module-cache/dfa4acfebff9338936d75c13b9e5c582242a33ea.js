/** @jsx React.DOM */

var React = require('react');

var FeedForm = React.createClass({displayName: "FeedForm",

    render: function() {
        return (
            React.createElement("form", {className: "container"}, 
			        React.createElement("div", {className: "form-group"}, 
			          React.createElement("input", {type: "text", className: "form-control", placeholder: "Title"}), 
			          React.createElement("input", {type: "text", className: "form-control", placeholder: "Description"}), 
			          React.createElement("button", {type: "submit", className: "btn btn-primary btn-block"}, "Add")
			        )
			     	)
        );
    }

});

module.exports = FeedForm;
