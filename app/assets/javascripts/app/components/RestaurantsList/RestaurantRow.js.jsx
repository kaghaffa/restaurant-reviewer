define([
  'react'
], function(React) {
  'use strict';

  return React.createClass({
    propTypes: {
      restaurant: React.PropTypes.object.isRequired
    },

    render: function() {

      return (
        <div className="restaurant-row">
          { createFragment(this.props.restaurant) }
        </div>
      );
    }
  });
});