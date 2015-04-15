// this is a component template
'use strict';

var React = require('react-native');
var styles = require('../styles/Template.style');

var {
	StyleSheet,
	View,
	Text,
	Component
} = React;

class Template extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{'I am a template'}</Text>
      </View>
    );
  }
}

module.exports = Template;