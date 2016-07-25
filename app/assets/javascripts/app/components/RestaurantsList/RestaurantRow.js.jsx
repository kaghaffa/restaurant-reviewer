define([
  'react',
  'react-router',
  'lodash'
], function(React, ReactRouter, _) {
  'use strict';

  var BrowserHistory = ReactRouter.browserHistory;

  return React.createClass({
    propTypes: {
      restaurant: React.PropTypes.object.isRequired
    },

    _priceIcons: function() {
      var boldedDollarSigns = "";
      var fadedDollarSigns = "";

      _.times(this.props.restaurant.price, function() {
        boldedDollarSigns += "$";
      });

      _.times(4 - this.props.restaurant.price, function() {
        fadedDollarSigns += "$";
      });


      var priceHtml = (
        <div className="price">
          <i>{ boldedDollarSigns }</i>{ fadedDollarSigns }
        </div>
      );

      return priceHtml;
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
          <div className="restaurant-image col-md-3">
            <img src={ this.props.restaurant.photograph_url }
              alt={ imageAltText } className="img-circle" />
          </div>
          <div className="restaurant-info col-md-9">
            <b>{ this.props.restaurant.name }</b>
            { this._priceIcons() }
            <div className="stars">
              Stars: { this.props.restaurant.stars }
            </div>
            { this.props.restaurant.num_reviews } Reviews
          </div>
        </div>
      );
    }
  });
});