define([
  'react'
], function(React) {
  'use strict';

  return React.createClass({
    propTypes: {
      review: React.PropTypes.object.isRequired
    },

    render: function() {
      return (
        <div className="review-entry">
          <div className="row">

            <div className="col-md-6 col-sm-6 col-xs-12">
              <div classname="row">
                <div className="col-md-12 name">
                  <span>{ this.props.review.name }</span>
                </div>

                <div className="col-md-12 date">
                  <span>{ this.props.review.date }</span>
                </div>
              </div>
            </div>

            <div className="stars col-md-6 col-sm-6 col-xs-12">
              <span>{ this.props.review.stars }</span>
            </div>
          </div>

          <div className="row">
            <div className="review-content col-md-12">
              <p>{ this.props.review.comments }</p>
            </div>
          </div>
        </div>
      );
    }
  });
});