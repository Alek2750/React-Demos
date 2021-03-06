import React, { Component } from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { createStackNavigator, createAppContainer } from 'react-navigation';

class Blink extends Component {
    constructor(props) {
      super(props);
      this.state = { isShowingText: true };
  
      // Toggle the state every second
      setInterval(() => (
        this.setState(previousState => (
          { isShowingText: !previousState.isShowingText }
        ))
      ), 1000);
    }
  
    render() {
      if (!this.state.isShowingText) {
        return null;
      }
  
      return (
        <Text>{this.props.text}</Text>
      );
    }
  }
  
  export default class BlinkApp extends Component {
    render() {
      return (
        <View>
          <Blink text='I love to blink' />
          <Blink text='Yes blinking is so great' />
          <Blink text='Why did they ever take this out of HTML' />
          <Blink text='Look at me look at me look at me' />
          <Blink text='I had this in my Skype bio' />
          <Blink text='This was the best shit back then' />
        </View>
      );
    }
  }