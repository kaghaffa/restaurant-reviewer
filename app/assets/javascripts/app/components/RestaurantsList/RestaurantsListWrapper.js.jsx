define([
  'react',
  'app/components/RestaurantsList/RestaurantsListHeader',
  'app/components/RestaurantsList/RestaurantsListContent',
  'app/stores/restaurantStore',
  'app/actions/restaurantActions'
], function(React, RestaurantsListHeader, RestaurantsListContent,
    RestaurantStore, RestaurantActions) {
  'use strict';

  return React.createClass({

    getInitialState: function() {
      return {
        restaurants: RestaurantStore.getRestaurants({})
      };
    },

    componentDidMount: function() {
      RestaurantStore.addChangeListener(this._onRestaurantStoreChange);
      RestaurantActions.getRestaurants({});
    },

    componentWillUnmount: function() {
      RestaurantStore.removeChangeListener(this._onRestaurantStoreChange);
    },

    _onRestaurantStoreChange: function() {
      this.setState({
        restaurants: RestaurantStore.getRestaurants({})
      });
    },

    render: function() {
      return (
        <div className="restaurants-list-wrapper">
          <RestaurantsListHeader />
          <RestaurantsListContent restaurants={ this.state.restaurants } />
        </div>
      );
    }
  });
});