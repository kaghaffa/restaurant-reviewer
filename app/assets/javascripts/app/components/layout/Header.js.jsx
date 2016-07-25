define([
  'react',
  'react-router'
], function(React, ReactRouter) {
  'use strict';

  var Link = ReactRouter.Link;

  return React.createClass({

    render: function() {
      return (
        <div className="header">
          <nav className="navbar navbar-default navbar-static-top">
            <div className="container">
              <div className="navbar-header">
                <Link className="navbar-brand" to="/">Test</Link>
              </div>
            </div>
          </nav>
        </div>
      );
    }
  });
});