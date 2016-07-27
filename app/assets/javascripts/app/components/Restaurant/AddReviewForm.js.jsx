define([
  'react',
  'app/actions/restaurantActions'
], function(React, RestaurantActions) {
  'use strict';

  return React.createClass({
    propTypes: {
      token: React.PropTypes.string.isRequired
    },

    getInitialState: function() {
      return {
        name: "",
        stars: "",
        comments: ""
      };
    },

    componentDidMount: function() {
      $.material.radio();
      $.material.input();
    },

    _onInputChange: function(field, e) {
      var nextState = _.cloneDeep(this.state);
      nextState[field] = e.target.value;
      this.setState(nextState);
    },

    _submitReview: function(e) {
      e.preventDefault();

      var currentDate = new Date();
      var params = _.cloneDeep(this.state);
      params.date = currentDate.toUTCString()
      RestaurantActions.addReview(this.props.token, params);
    },

    render: function() {
      return (
        <form className="review-form col-md-8" onSubmit={ this._submitReview }>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group label-floating">
                <label className="control-label">Name</label>
                <input type="text"
                       onChange={ this._onInputChange.bind(this, "name") }
                       className="form-control" />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group stars">
                <label className="control-label">Stars</label>

                <div className="radio">
                  <label>
                    <input value="1"
                      type="radio"
                      name="optionsRadios"
                      onChange={ this._onInputChange.bind(this, "price") } />1
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input value="2"
                      type="radio"
                      name="optionsRadios"
                      onChange={ this._onInputChange.bind(this, "price") } />2
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input value="3"
                      type="radio"
                      name="optionsRadios"
                      onChange={ this._onInputChange.bind(this, "price") } />3
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input value="4"
                      type="radio"
                      name="optionsRadios"
                      onChange={ this._onInputChange.bind(this, "price") } />4
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input value="5"
                      type="radio"
                      name="optionsRadios"
                      onChange={ this._onInputChange.bind(this, "price") } />5
                  </label>
                </div>
              </div>

              <button type="submit" className="btn-small sr-only focusable">Submit rating</button>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="form-group label-floating">
                <label className="control-label">Write your review</label>
                <textarea className="form-control"
                          rows="5"
                          value={ this.state.comments }
                          onChange={ this._onInputChange.bind(this, "comments") }>
                </textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="pull-right">
              <button className="btn btn-success">Submit review</button>
            </div>
          </div>
        </form>
      );
    }
  });
});


// <div class="col-sm-4">
//   <div class="form-group label-floating">
//     <label class="control-label">With Floating Label</label>
//     <input type="email" class="form-control">
//   </div>
// </div>