define([
  'react',
  'lodash',
  'app/actions/restaurantActions'
], function(React, _, RestaurantActions) {
  'use strict';

  return React.createClass({

    getInitialState: function() {
      return {
        filters: {},
        prvFilters: {}
      };
    },

    _onFiltersChange: function() {
      if (!_isEmpty(this.state.filters) && this._filtersChanged) {
        this.setState({
          prvFilters: this.state.filters
        }, function() {
          RestaurantActions.getRestaurants(this.statefilters)
        });
      }
    },

    _filtersChanged: function() {
      this.state.filters !== this.state.prvFilters
    },

    render: function() {
      return (
        <div className="restaurants-list-filters">
          Filters

        </div>
      );
    }
  });
});