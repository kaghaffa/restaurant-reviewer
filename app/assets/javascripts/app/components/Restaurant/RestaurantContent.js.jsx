define([
  'react'
], function(React) {
  'use strict';

  return React.createClass({
    propTypes: {
      restaurant: React.PropTypes.object.isRequired
    },

    render: function() {
      console.log(this.props.restaurant)
      return (
        <div className="restaurant-content">
          <div className
          { React.addons.createFragment(this.props.restaurant) }
        </div>
      );
    }
  });
});