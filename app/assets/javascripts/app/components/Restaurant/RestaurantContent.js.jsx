define([
  'react',
  'app/components/Restaurant/AddReviewForm',
  'app/components/Restaurant/ReviewEntry',
  'app/components/Restaurant/GeneralRestaurantInfo'
], function(React, AddReviewForm, ReviewEntry, GeneralRestaurantInfo) {
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
              <div className="col-md-3 col-md-offset-1 col-sm-4">
                <GeneralRestaurantInfo restaurant={ this.props.restaurant } />
              </div>
              <main className="col-md-7 col-sm-8">
                <div className="row">
                  <div className="col-md-12">
                    <AddReviewForm token={ this.props.restaurant.token } />
                  </div>
                </div>
                <div className="review-list">
                  { reviewsList }
                </div>
              </main>
            </div>
          </div>
        </div>
      );
    }
  });
});