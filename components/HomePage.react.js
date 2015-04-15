'use strict';

var React = require('react-native');
var styles = require('../styles/HomePage.style');

var {
	StyleSheet,
	View,
	Text,
	Component
} = React;

class HomePage extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{'HomePage'}</Text>
      </View>
    );
  }
}

module.exports = HomePage;