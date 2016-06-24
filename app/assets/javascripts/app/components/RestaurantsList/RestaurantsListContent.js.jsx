define([
  'react',
  'app/components/RestaurantsList/RestaurantRow'
], function(React, RestaurantRow) {
  'use strict';

  return React.createClass({
    propTypes: {
      restaurants: React.PropTypes.array.isRequired
    },

    render: function() {
      var restaurantRows = this.props.restaurants.map(function(restaurant, i) {
        return <RestaurantRow key={ i } restaurant={ restaurant } />
      });


      console.log(restaurantRows)
      return (
        <div className="restaurants-list-content">

          { restaurantRows }
        </div>
      );
    }
  });
});