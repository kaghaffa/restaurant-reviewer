define([
  'lodash',
  'app/dispatcher/AppDispatcher',
  'app/utils/requestUtils',
  'app/constants/restaurantConstants'
], function(_, Dispatcher, RequestUtils, RestaurantConstants) {
  'use strict';

  return {
    // GET v1/restaurants
    getRestaurants: function(filters = {}) {
      var requestUrl = "/api/v1/restaurants"

      if (!_.isEmpty(filters)) {
        var params = RequestUtils.createQueryParams(filters);
        requestUrl = requestUrl + "?" + params
      }

      fetch(requestUrl).then(function(response) {

        if (response.status >= 200 && response.status < 300) {
          response.json().then(function(res) {
            Dispatcher.handleServerAction({
              type: RestaurantConstants.GET_RESTAURANTS_SUCCESS,
              response: res
            });
          });
        } else {
          Dispatcher.handleServerAction({
            type: RestaurantConstants.GET_RESTAURANTS_FAILURE
          })
        }
      })
      .catch(function(error) {
        console.log("request failed", error);
        Dispatcher.handleServerAction({
          type: RestaurantConstants.GET_RESTAURANTS_FAILURE,
          response: error
        });
      });
    },

    getRestaurant: function(restaurantToken) {
      var requestUrl = "/api/v1/restuarants/" + restaurantToken;

      fetch(requestUrl).then(function(response) {
        if (response.status >= 200 && response.status < 300) {
          response.json().then(function(res) {
            Dispatcher.handleServerAction({
              type: RestaurantConstants.GET_RESTAURANT_SUCCESS,
              response: res
            });
          });
        } else {
          Dispatcher.handleServerAction({
            type: RestaurantConstants.GET_RESTAURANT_FAILURE
          })
        }
      })
      .catch(function(error) {
        console.log("request failed", error);

        Dispatcher.handleServerAction({
          type: RestaurantConstants.GET_RESTAURANT_FAILURE,
          response: error
        });
      });
    },

    getReviewsFor: function(restaurantToken) {
      var requestUrl = "/api/v1/restuarants/" + restaurantToken + "/reviews";

      fetch(requestUrl).then(function(response) {
        if (response.status >= 200 && response.status < 300) {
          response.json().then(function(res) {
            Dispatcher.handleServerAction({
              type: RestaurantConstants.GET_RESTAURANT_SUCCESS,
              response: res
            });
          });
        } else {
          Dispatcher.handleServerAction({
            type: RestaurantConstants.GET_RESTAURANT_FAILURE
          })
        }
      })
      .catch(function(error) {
        console.log("request failed", error);

        Dispatcher.handleServerAction({
          type: RestaurantConstants.GET_RESTAURANT_FAILURE,
          response: error
        });
      });
    }
  };
});