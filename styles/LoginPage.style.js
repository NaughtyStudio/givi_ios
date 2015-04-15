'use strict';

var React = require('react-native');

var {
  StyleSheet
} = React;

var styles = StyleSheet.create({
	container: {
		padding: 30,
		marginTop: 150,
		alignItems: 'center'
	},
	frontTitle: {
		fontSize: 50
	},
	signinView: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 30
	},
	facebook: {
    width: 60,
    height: 60,
    margin: 5
  }
});

module.exports = styles;