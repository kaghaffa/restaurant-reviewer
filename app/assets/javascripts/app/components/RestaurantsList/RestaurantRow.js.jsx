define([
  'react',
  'react-router',
  'lodash',
  'app/utils/utils'
], function(React, ReactRouter, _, Utils) {
  'use strict';

  var BrowserHistory = ReactRouter.browserHistory;

  return React.createClass({
    propTypes: {
      restaurant: React.PropTypes.object.isRequired
    },


    _onRestaurantKeypress: function(e) {
      if (e.charCode == 13) {
        this._navigateToRestaurant()
      }
    },

    _navigateToRestaurant: function() {
      BrowserHistory.push('restaurants/' + this.props.restaurant.token)
    },

    render: function() {
      var imageAltText = "Photograph of " + this.props.restaurant.name;

      return (
        <div onKeyPress={ this._onRestaurantKeypress }
             onClick={ this._navigateToRestaurant }
             className="row restaurant-row" tabIndex="0">
          <div className="restaurant-image col-md-3 col-xs-6">
            <img src={ this.props.restaurant.photograph_url }
              alt={ imageAltText } className="img-circle" />
          </div>
          <div className="restaurant-info col-md-9 col-xs-6">
            <b>{ this.props.restaurant.name }</b>
            { Utils.priceIcons(this.props.restaurant.price) }
            <div className="stars">
              <span>{ Utils.starIcons(this.props.restaurant.stars) }</span>
            </div>
            { this.props.restaurant.num_reviews } Reviews
          </div>
        </div>
      );
    }
  });
});