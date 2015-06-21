/** @jsx React.DOM */

var React = require('react'),
    FeedItem = require('./FeedItem');

var FeedList = React.createClass({displayName: "FeedList",

    render: function() {

        var feedItems = this.props.items.map(function(item) {
            return React.createElement(FeedItem, {title: item.title, desc: item.description, voteCount: item.voteCount})
        });

        return (
            React.createElement("ul", {className: "list-group container"}, 
        			feedItems
      			)
        );
    }

});

module.exports = FeedList;

