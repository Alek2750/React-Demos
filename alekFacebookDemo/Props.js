import React, { Component } from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { createStackNavigator, createAppContainer } from 'react-navigation';

Greeting = ({name}) => {

    return (
      <View style={{ alignItems: 'center' }}>
        <Text>Hello {name}!</Text>
      </View>
    );
  
  }

class LotsOfGreetings extends Component {
    render() {
      return (
        <View style={{ alignItems: 'center', top: 50 }}>
          <Greeting name='Rexxar' />
          <Greeting name='Lars' />
          <Greeting name='Valeera' />
        </View>
      );
    }
  }
  
  //Todo: Refactor into a seperate file (Props.js), import and complete the exercise
  class Props extends React.Component {
    static navigationOptions = { title: "Learn about Props" }
    render() {
      return (
        <LotsOfGreetings />
      )
    }
  }

  export default Props;