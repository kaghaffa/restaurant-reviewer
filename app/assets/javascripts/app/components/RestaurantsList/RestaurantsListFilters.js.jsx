define([
  'react',
  'react-router',
  'lodash',
  'app/actions/restaurantActions',
  'app/utils/requestUtils'
], function(React, ReactRouter, _, RestaurantActions, RequestUtils) {
  'use strict';

  var BrowserHistory = ReactRouter.browserHistory;
  var WithRouter = ReactRouter.withRouter;

  return React.createClass({

    getInitialState: function() {
      return {
        filters: {
          price: [],
          openNow: false
        }
      };
    },

    _onOpenNowChange: function(e) {
      var nextFiltersState = _.cloneDeep(this.state.filters);
      nextFiltersState.openNow = !nextFiltersState.openNow

      this.setState({
        filters: nextFiltersState
      }, function () {
        this._getRestaurants();
      });
    },

    _onPriceChange: function(e) {
      var priceValue = e.target.value;
      var priceState = this.state.filters.price;

      if (priceState.includes(priceValue)) {
        priceState.splice(priceState.indexOf(priceValue), 1);
      } else {
        priceState.push(priceValue);
      }

      this.setState({
        filters: {
          price: priceState.sort()
        }
      }, function () {
        this._getRestaurants();
      });
    },

    _getRestaurants: function() {
      var filters = {};
      filters.price = this.state.filters.price;

      if (this.state.filters.openNow) {
        var currentTime = new Date();
        filters.open_now = currentTime.toJSON();
      }

      RestaurantActions.getRestaurants(filters);
    },

    render: function() {
      this.props.location
      return (
        <div className="restaurants-list-filters">
          <div className="container">
            <div className="row">
              <div className="filters">
                <div className="restaurant-filter col-md-4 col-md-offset-2 col-sm-6 col-sm-offset-0">
                  <fieldset>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox"
                               name="price"
                               value="1"
                               checked={ this.state.filters.price.includes("1") }
                               onClick={ this._onPriceChange } />$
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox"
                               name="price"
                               value="2"
                               checked={ this.state.filters.price.includes("2") }
                               onClick={ this._onPriceChange } />$$
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox"
                               name="price"
                               value="3"
                               checked={ this.state.filters.price.includes("3") }
                               onClick={ this._onPriceChange } />$$$
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox"
                               name="price"
                               value="4"
                               checked={ this.state.filters.price.includes("4") }
                               onClick={ this._onPriceChange } />$$$$
                      </label>
                    </div>
                  </fieldset>
                </div>

                <div className="restaurant-filter col-md-2 col-sm-6">
                  <fieldset>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox"
                               name="openNow"
                               checked={ this.state.filters.openNow }
                               onClick={ this._onOpenNowChange } />Open now
                      </label>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });
});