'use strict';

var React = require('react-native');
var styles = require('../styles/LoginPage.style');
var Icon = require('FAKIconImage');

var {
	StyleSheet,
	View,
	Text,
	Component
} = React;

class LoginPage extends React.Component {
  
  render() {
    return (
    	<View style={styles.container}>
      	<Text style={styles.frontTitle}>GIVI</Text>
      	<View style={styles.signinView}>
	      	<Icon name='fontawesome|facebook-square' size={40}
	          color='#3b5998' style={styles.facebook} />
	          <Text>{'Sign in with Facebook'}</Text>
          </View>
      </View>
    );
  }
}

module.exports = LoginPage;