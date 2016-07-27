define([
  'react',
  'lodash',
  'app/actions/restaurantActions',
  'app/stores/restaurantStore',
  'app/components/Restaurant/RestaurantContent',
  'app/components/Restaurant/RestaurantHeader'
], function(React, _, RestaurantActions, RestaurantStore, RestaurantContent,
    RestaurantHeader) {
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
      if (_.isEmpty(this.state.restaurant)) {
        return <div className="loading">Loading...</div>
      }

      return (
        <div className="restaurant-wrapper">
          <RestaurantHeader restaurant={ this.state.restaurant } />
          <RestaurantContent restaurant={ this.state.restaurant } />
        </div>
      );
    }
  });
});