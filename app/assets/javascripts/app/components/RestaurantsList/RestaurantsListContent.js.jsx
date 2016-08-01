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
          <main className="restaurants-list">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2">
                  { restaurantRows }
                </div>
              </div>
            </div>
          </main>
        </div>
      );
    }
  });
});