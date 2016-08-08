define([
  'react',
  'react-router'
], function(React, ReactRouter) {
  'use strict';

  var Link = ReactRouter.Link;

  return React.createClass({
    render: function() {
      return (
        <header className="header">
          <nav className="navbar navbar-default navbar-static-top">
            <div className="container">
              <div className="navbar-header">
                <h1><Link className="navbar-brand" to="/">Nomz</Link></h1>
              </div>
            </div>
          </nav>
        </header>
      );
    }
  });
});