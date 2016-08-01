define([
  'react',
  'moment',
  'app/utils/utils'
], function(React, moment, Utils) {
  'use strict';

  return React.createClass({
    propTypes: {
      review: React.PropTypes.object.isRequired
    },

    render: function() {
      var roundedStars = Math.round(this.props.review.stars * 10) / 10;

      return (
        <div className="review-entry">
          <div className="review-header">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-xs-6">
                <div className="row">
                  <div className="col-md-12 name">
                    <h4 aria-label={ this.props.review.name + "'s review" }>
                      <b>{ this.props.review.name }</b>
                    </h4>
                  </div>

                  <div className="col-md-12 date">
                    <span>
                      { moment(this.props.review.date).format("MM-DD-YYYY") }
                    </span>
                  </div>
                </div>
              </div>

              <div className="stars col-md-6 col-sm-6 col-xs-6">
                <div className="stars" aria-label={ roundedStars + " Stars" }>
                  <span className="pull-right">
                    { Utils.starIcons(this.props.review.stars) }
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="review-content col-md-offset-4 col-md-8">
              <p>{ this.props.review.comments }</p>
            </div>
          </div>
        </div>
      );
    }
  });
});