'use strict';

var React = require('react-native');

var {
  StyleSheet
} = React;

var styles = StyleSheet.create({
	container: {
		padding: 10,
		marginTop: 100,
		// alignItems: 'flex-start',
		flexDirection: 'row',
		// flex: 1
	},
	postView: {
		flexDirection: 'column',
		flex: 1,
		backgroundColor: 'yellow'
	},
	rowView: {
		flexDirection: 'row',
		flex: 1,
		backgroundColor: 'pink'
	},
	userText: {
		color: '#D1D1D1',
		margin: 3
	},
  userIcon: {
  	margin: 3,
    width: 20,
    height: 20
  },
  titleText: {
  	fontSize: 20,
  	color: '#525252',
  	margin: 3
  },
  postTimer: {
  	margin: 3
  }
});

module.exports = styles;