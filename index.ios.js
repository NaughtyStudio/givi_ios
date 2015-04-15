'use strict';

var React = require('react-native');
var Template = require('./components/Template.react');
var LoginPage = require('./components/LoginPage.react');
var HomePage = require('./components/HomePage.react');
var PostView = require('./components/PostView.react');


var {
  Text,
  NavigatorIOS,
  Component,
  StyleSheet
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

// here goes the init page
var initialRoute = {
  component: PostView
};

class GiviApp extends Component {
  
  render() {
    return (
      <NavigatorIOS style={styles.container} initialRoute={initialRoute} />
    );
  }
}

React.AppRegistry.registerComponent('GIVI', () => GiviApp);

