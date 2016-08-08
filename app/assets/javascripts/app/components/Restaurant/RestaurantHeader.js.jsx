define([
  'react',
  'app/utils/utils'
], function(React, Utils) {
  'use strict';

  return React.createClass({
    propTypes: {
      restaurant: React.PropTypes.object.isRequired
    },

    render: function() {
      var imageAltText = "Photograph of " + this.props.restaurant.name;
      var splitAddress = this.props.restaurant.address.split(',');

      var addressDivs = (
        <div className="address">
          <div className="address-line1"><span>{ splitAddress[0] }</span></div>
          <div className="address-line2"><span>{ splitAddress.slice(1).toString().trim() }</span></div>
        </div>
      );

      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="restaurant-header">
                <div className="row">

                  <div className="restaurant-image col-md-3 col-sm-12 col-xs-12">
                    <img src={ this.props.restaurant.photograph_url }
                      alt={ imageAltText } className="restaurant-image img-circle" />
                  </div>

                  <div className="col-md-9 col-sm-12">
                    <div className="row">
                      <div className="col-md-12">
                        <h2>{ this.props.restaurant.name }</h2>
                      </div>

                      <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="stars"
                          aria-label={ Utils.roundedStarsLabel(this.props.restaurant.stars) }>
                          <span>{ Utils.starIcons(this.props.restaurant.stars) }</span>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6 col-xs-6">
                        { Utils.priceIcons(this.props.restaurant.price) }
                      </div>

                      <div className="restaurant-address col-md-6 col-sm-12 col-xs-12">
                        <span className="icon icon-primary">
                          <i className="material-icons">place</i>
                        </span>
                        { addressDivs }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });
});