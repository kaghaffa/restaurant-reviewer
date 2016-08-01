define([
  'react',
], function(React, AddReviewForm, ReviewEntry) {
  'use strict';

  return React.createClass({
    propTypes: {
      restaurant: React.PropTypes.object.isRequired
    },

    render: function() {
      const days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
      var hoursDiv = this.props.restaurant.hours.map(function(hours, i, list) {
        return (
          <div className="row">
            <div className="col-md-3 col-sm-3 col-xs-3">{ days[i] }</div>
            <div className="col-md-9 col-sm-9 col-xs-9 time">
              <span className="pull-right">{ hours.join(" - ") }</span>
            </div>
          </div>
        );
      });

      return (
        <aside className="general-restaurant-info well">
          <div className="hours">
            <h5><b>Hours</b></h5>
            { hoursDiv }
          </div>
        </aside>
      );
    }
  });
});