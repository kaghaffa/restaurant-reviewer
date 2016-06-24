define([
	'react',
	'react-router',
	'app/components/layout/Header'
], function(React, ReactRouter, Header) {
	'use strict';

	return React.createClass({

		render: function() {
			return (
				<div className="app-wrapper">
					<Header />
					<div id="main-wrapper">
						{ this.props.children }
					</div>
				</div>
			);
		}
	});
});