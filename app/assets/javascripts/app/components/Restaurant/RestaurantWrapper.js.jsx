define([
  'react',
  'app/actions/restaurantActions',
  'app/stores/restaurantStore',
  'app/components/Restaurant/RestaurantContent'
], function(React, RestaurantActions, RestaurantStore, RestaurantContent) {
  'use strict';

  return React.createClass({

    getInitialState: function() {
      return {
        restaurant: RestaurantStore.getRestaurant()
      };
    },

    componentDidMount: function() {
      RestaurantStore.addChangeListener(this._onRestaurantStoreChange);
      RestaurantActions.getRestaurant(this.props.params.restaurantId);
    },

    componentWillUnmount: function() {
      RestaurantStore.removeChangeListener(this._onRestaurantStoreChange);
    },

    _onRestaurantStoreChange: function() {
      this.setState({
        restaurant: RestaurantStore.getRestaurant()
      });
    },

    render: function() {

      return (
        <div className="restaurant-wrapper">
          <RestaurantContent restaurant={ this.state.restaurant } />
        </div>
      );
    }
  });
});