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
        comments: "",
        showSuccessAlert: false
      };
    },

    componentDidMount: function() {
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
      var _this = this;
      this.setState({
        name: "",
        stars: "",
        comments: "",
        showSuccessAlert: true
      });
    },

    render: function() {
      var successAlert;
      if (this.state.showSuccessAlert) {
        successAlert = (
          <div className="alert alert-success">
            <div className="container-fluid">
              <div className="alert-icon"><i className="material-icons">check</i></div>
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true"><i className="material-icons">clear</i></span>
              </button>
              <b>Review Added!</b>
            </div>
          </div>
        );
      }

      return (
        <div className="review-form panel panel-default">
          <div className="panel-heading">Write a Review</div>
          <div className="panel-body">
            <form onSubmit={ this._submitReview }>
              { successAlert }
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group label-floating">
                    <label for="name" className="control-label">Name</label>
                    <input id="name"
                           aria-label="Enter name"
                           type="text"
                           value={ this.state.name }
                           onChange={ this._onInputChange.bind(this, "name") }
                           className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group stars">
                    <label className="control-label">Stars</label>
                    <div className="radio-inline">
                      <label>
                        <input value="1"
                          type="radio"
                          title="1 stars"
                          aria-label="1 stars"
                          name="optionsRadios"
                          checked={ this.state.stars == "1" }
                          onChange={ this._onInputChange.bind(this, "stars") } />1
                      </label>
                    </div>
                    <div className="radio-inline">
                      <label>
                        <input value="2"
                          type="radio"
                          title="2 stars"
                          aria-label="2 stars"
                          name="optionsRadios"
                          checked={ this.state.stars == "2" }
                          onChange={ this._onInputChange.bind(this, "stars") } />2
                      </label>
                    </div>
                    <div className="radio-inline">
                      <label>
                        <input value="3"
                          type="radio"
                          title="3 stars"
                          aria-label="3 stars"
                          name="optionsRadios"
                          checked={ this.state.stars == "3" }
                          onChange={ this._onInputChange.bind(this, "stars") } />3
                      </label>
                    </div>
                    <div className="radio-inline">
                      <label>
                        <input value="4"
                          type="radio"
                          title="4 stars"
                          aria-label="4 stars"
                          name="optionsRadios"
                          checked={ this.state.stars == "4" }
                          onChange={ this._onInputChange.bind(this, "stars") } />4
                      </label>
                    </div>
                    <div className="radio-inline">
                      <label>
                        <input value="5"
                          type="radio"
                          title="5 stars"
                          aria-label="5 stars"
                          name="optionsRadios"
                          checked={ this.state.stars == "5" }
                          onChange={ this._onInputChange.bind(this, "stars") } />5
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="form-group label-floating">
                    <label for="comments" className="control-label">Write your review</label>
                    <textarea id="comments"
                              className="form-control"
                              rows="5"
                              aria-label="Write your review"
                              value={ this.state.comments }
                              onChange={ this._onInputChange.bind(this, "comments") }>
                    </textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <button className="btn btn-success">Submit review</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
    }
  });
});
