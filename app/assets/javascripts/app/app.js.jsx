require([
	'react',
  'react-dom',
	'react-router-shim',
	'react-router',
  'app/components/AppWrapper',
  'app/components/RestaurantsList/RestaurantsListWrapper'
], function(React, ReactDOM, ReactRouterShim, ReactRouter, AppWrapper,
    RestaurantsListWrapper) {
	'use strict';

  var Route      = ReactRouter.Route;
  var Router     = ReactRouter.Router;
  var IndexRoute = ReactRouter.IndexRoute;

  var routes = (
  	<Route path="/" component={ AppWrapper }>
      <IndexRoute component={ RestaurantsListWrapper } />
    </Route>
  );

  ReactDOM.render(
    <Router routes={ routes } history={ ReactRouter.hashHistory } />,
    document.getElementById('main')
  );
});