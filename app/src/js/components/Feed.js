/** @jsx React.DOM */

var React = require('react');
var ShowAddButton = require('./ShowAddButton');
var FeedForm = require('./FeedForm');
var FeedList = require('./FeedList');
var _ = require('lodash');
var Firebase = require('firebase');

var Feed = React.createClass({

    loadData: function() {
        var ref = new Firebase('https://rjvoteit.firebaseIO.com/feed');
        ref.on('value', function(snap) {
            var items = [];

            snap.forEach(function(itemSnap) {
                var item = itemSnap.val();
                item.key = itemSnap.name();

                items.push(item);
            });

            this.setState({
                items: items
            });
        }.bind(this));
    },

    componentDidMount: function() {
        this.loadData();
    },
    getInitialState: function() {
        var FEED_ITEMS = [];
        return {
            items: FEED_ITEMS,
            formDisplayed: false
        }
    },

    onToggleForm: function() {
        this.setState({
            formDisplayed: !this.state.formDisplayed
        });
    },

    onNewItem: function(newItem) {
        var ref = new Firebase('https://rjvoteit.firebaseIO.com/feed');
        ref.push(newItem);
    },

    onVote: function(item) {
        var items = _.uniq(this.state.items);
        var index = _.findIndex(items, function(feedItems) {
            return feedItems.key === item.key;
        });
        var oldObj = items[index];
        var newItems = _.pull(items, oldObj);
        newItems.push(item);
        this.setState({
            items: newItems
        });
    },

    render: function() {
        return (
            <div>

        <div className="container">
          <ShowAddButton displayed={this.state.formDisplayed} onToggleForm={this.onToggleForm} />
        </div>

        <FeedForm displayed={this.state.formDisplayed} onNewItem={this.onNewItem} />

        <br />
        <br />

        <FeedList items={this.state.items} onVote={this.onVote} />

      </div>
        );
    }

});

module.exports = Feed;
