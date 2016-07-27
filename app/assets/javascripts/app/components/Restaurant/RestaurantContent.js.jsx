define([
  'react',
  'app/components/Restaurant/AddReviewForm',
  'app/components/Restaurant/ReviewEntry'
], function(React, AddReviewForm, ReviewEntry) {
  'use strict';

  return React.createClass({
    propTypes: {
      restaurant: React.PropTypes.object.isRequired
    },

    render: function() {
      var reviewsList = this.props.restaurant.reviews.map(function(review, i) {
        return <ReviewEntry key={ i } review={ review } />;
      });

      return (
        <div className="restaurant-content">
          <div className="container-fluid">
            <div className="row">
              <AddReviewForm token={ this.props.restaurant.token } />
            </div>
          </div>
          <div className="container">
            <div className="review-list">
              { reviewsList }
            </div>
          </div>
        </div>
      );
    }
  });
});