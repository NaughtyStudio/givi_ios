'use strict';

var React = require('react-native');
var styles = require('../styles/PostView.style');
var Icon = require('FAKIconImage');

var {
	StyleSheet,
	View,
	Text,
	Component
} = React;

class PostView extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.postView}>
          <View style={styles.rowView}>
            <Icon name='fontawesome|user' size={20} 
              color='#D1D1D1' style={styles.userIcon} />
            <Text style={styles.userText}>{'User Name'}</Text>
          </View>
          <View style={styles.rowView}>
            <Text style={styles.titleText}>{'Item Title'}</Text>
            <View style={styles.postTimer}>
              <Text>{'3H'}</Text>
            </View>
          </View>
          <Text>{'1'}</Text>
          <Text>{'1'}</Text>
          <Text>{'1'}</Text>
        </View>
      </View>
    );
  }
}

module.exports = PostView;