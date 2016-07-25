require([
	'react',
  'react-dom',
	'react-router-shim',
	'react-router',
  'app/components/AppWrapper',
  'app/components/RestaurantsList/RestaurantsListWrapper',
  'app/components/Restaurant/RestaurantWrapper',
  'material-kit'
], function(React, ReactDOM, ReactRouterShim, ReactRouter, AppWrapper,
    RestaurantsListWrapper, RestaurantWrapper) {
	'use strict';

  var Route      = ReactRouter.Route;
  var Router     = ReactRouter.Router;
  var IndexRoute = ReactRouter.IndexRoute;

  var routes = (
  	<Route path="/" component={ AppWrapper }>
      <IndexRoute component={ RestaurantsListWrapper } />
      <Route path="restaurants/:restaurantId" component={ RestaurantWrapper } />
    </Route>
  );

  ReactDOM.render(
    <Router routes={ routes } history={ ReactRouter.browserHistory } />,
    document.getElementById('main')
  );
});