define([
  'react',
  'lodash'
], function(React, _) {
  'use strict';

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

    render: function() {
      var imageAltText = "Photograph of " + this.props.restaurant.name;

      return (
        <div className="row restaurant-row" tabindex="0">
          <div className="restaurant-image col-md-3">
            <img src={ this.props.restaurant.photograph_url }
              alt={ imageAltText } />
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