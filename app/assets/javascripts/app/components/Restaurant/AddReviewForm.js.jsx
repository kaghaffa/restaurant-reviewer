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
        review: ""
      };
    },

    _onReviewChange: function(e) {
      this.setState({
        review: e.target.value
      });
    },

    _submitReview: function(e) {
      e.preventDefault();
      console.log(this.state.review);
      RestaurantActions.addReview(this.props.token, this.state.review);
    },

    render: function() {
      return (
        <form className="review-form" onSubmit={ this._submitReview }>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group label-floating">
                <label className="control-label">Name</label>
                <input type="text" className="form-control"></input>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group label-floating">
                <label className="control-label">Stars</label>
                <input type="text" className="form-control"></input>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group label-floating">
                <label className="control-label">Write your review</label>
                <textarea className="form-control"
                          rows="5"
                          value={ this.state.review }
                          onChange={ this._onReviewChange }>
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