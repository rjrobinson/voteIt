/** @jsx React.DOM */

var React = require('react');
var ShowAddButton = require('./ShowAddButton');
var FeedForm = require('./FeedForm');
var FeedList = require('./FeedList');

var Feed = React.createClass({displayName: "Feed",

    getInitialState: function() {
        var FEED_ITEMS = [{
            key: '1',
            title: 'Realtime data!',
            description: 'Firebase is cool',
            voteCount: 49
        }, {
            key: '2',
            title: 'JavaScript is fun',
            description: 'Lexical scoping FTW',
            voteCount: 34
        }, {
            key: '3',
            title: 'Coffee makes you awake',
            description: 'Drink responsibly',
            voteCount: 15
        }, ];
        return {
            items: FEED_ITEMS
        }
    },

    render: function() {
        return (
            React.createElement("div", null, 

        React.createElement("div", {className: "container"}, 
          React.createElement(ShowAddButton, null)
        ), 

        React.createElement(FeedForm, null), 

        React.createElement("br", null), 
        React.createElement("br", null), 

        React.createElement(FeedList, {items: this.state.items})

      )
        );
    }

});

module.exports = Feed;

