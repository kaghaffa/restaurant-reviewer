define([
  'event-emitter',
  'lodash',
  'app/dispatcher/AppDispatcher',
  'app/constants/restaurantConstants'
], function(EventEmitter, _, Dispatcher, RestaurantConstants) {

  'use strict';

  var _restaurants = [];
  var _restaurant = {};

  function _setRestaurant(restaurant) {
    _restaurant = restaurant
  }

  function _setRestaurants(restaurants) {
    _restaurants = restaurants
  }

  function _prependReview(review) {
    _restaurant.reviews.unshift(review);
  }

  var RestaurantStore = _.extend({}, EventEmitter.prototype, {
    emitChange: function() {
      this.emit('change');
    },

    addChangeListener: function(callback) {
      this.on('change', callback);
    },

    removeChangeListener: function(callback) {
      this.removeListener('change', callback);
    },

    getRestaurants: function() {
      return _restaurants;
    },

    getRestaurant: function() {
      return _restaurant;
    },

    dispatcherIndex: Dispatcher.register(function(payload) {
      var action = payload.action;

      switch (action.type) {
        case RestaurantConstants.GET_RESTAURANTS_SUCCESS:
          _setRestaurants(action.response);
          RestaurantStore.emitChange();
          break;
        case RestaurantConstants.GET_RESTAURANT_SUCCESS:
          _setRestaurant(action.response);
          RestaurantStore.emitChange();
          break;
        case RestaurantConstants.ADD_REVIEW_SUCCESS:
          _prependReview(action.response);
          RestaurantStore.emitChange();
          break;
      }

      return true;
    })
  });

  return RestaurantStore;
});