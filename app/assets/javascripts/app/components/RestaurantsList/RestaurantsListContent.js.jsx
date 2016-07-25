define([
  'react',
  'app/components/RestaurantsList/RestaurantsListFilters',
  'app/components/RestaurantsList/RestaurantRow'
], function(React, RestaurantsListFilters, RestaurantRow) {
  'use strict';

  return React.createClass({
    propTypes: {
      restaurants: React.PropTypes.array.isRequired
    },

    render: function() {
      var restaurantRows = this.props.restaurants.map(function(restaurant, i) {
        return <RestaurantRow key={ i } restaurant={ restaurant } />
      });

      return (
        <div className="restaurants-list-content">
          <RestaurantsListFilters />
          <div className="restaurants-list container">
            { restaurantRows }
          </div>
        </div>
      );
    }
  });
});