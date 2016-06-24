define([
  'react'
], function(React) {
  'use strict';

  return React.createClass({

    render: function() {
      return (
        <div className="header">
          <nav className="navbar navbar-default navbar-static-top">
            <div className="container">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">Test</a>
              </div>
            </div>
          </nav>
        </div>
      );
    }
  });
});