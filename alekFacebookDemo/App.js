import React, { Component } from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { createStackNavigator, createAppContainer } from 'react-navigation';

import WhatToDo from "./WhatToDo";
import Basics from "./Basics";
import Props from "./Props";
import State from "./State";
import Style from "./Style";
import HeightWidthFixed from "./HeightWidthFixed"
import HeightWidthFlex from "./HeightWidthFlex"
import FlexBox from "./FlexBox";
import TextInput from "./TextInput";
import Touches from "./Touches";
import ScrollView from "./ScrollView";
import ListViews from "./ListViews";
import NetWorking from "./NetWorking";
import FotoMemes from "./FotoMemes";



//Todo: Create a new file (State.js), import it, add a "Touchable", and complete the exercise
//Todo: Create a new file (Style.js), import it, add a "Touchable", and complete the exercise
//Todo: Create a new file (HeightWidth.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (HeightWidth.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (FlexBox.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (TextInput.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (Touches.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (ScrollView.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (ListViews.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (NetWorking.js), import it,add a "Touchable", and complete the exercise

const Touchable = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>)



class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Day1 Tutorial' };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View >
        <Text style={{ textAlign: "center", fontSize: 20 }}>
          See all Demos implemented by Alessandro</Text>
        <Touchable onPress={() => navigate('web')} title="What I have to do" />
        <Touchable onPress={() => navigate('basics')} title="Basics" />
        <Touchable onPress={() => navigate('props')} title="Props" />
        <Touchable onPress={() => navigate('state')} title="State" />
        <Touchable onPress={() => navigate('style')} title="Styles" />
        <Touchable onPress={() => navigate('fixed')} title="Fixed Dimensions" />
        <Touchable onPress={() => navigate('flex')} title="Flex Dimensions" />
        <Touchable onPress={() => navigate('flexbox')} title="Box Flex" />
        <Touchable onPress={() => navigate('textinput')} title="Pizza Translator" />
        <Touchable onPress={() => navigate('touches')} title="Touch" />
        <Touchable onPress={() => navigate('scrollview')} title="Scrollview" />
        <Touchable onPress={() => navigate('listview')} title="Listview" />
        <Touchable onPress={() => navigate('fetch')} title="Networking" />
        <Touchable onPress={() => navigate('memes')} title="Memes" />
      </View>
    )
  }
}

//export default App = () => <RouteStack style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }} />

const RouteStack = createStackNavigator({
  Home: { screen: HomeScreen },
  basics: { screen: Basics },
  props: { screen: Props },
  web: { screen: WhatToDo },
  state: { screen: State },
  style: { screen: Style },
  fixed: { screen: HeightWidthFixed },
  flex: { screen: HeightWidthFlex },
  flexbox: { screen: FlexBox },
  textinput: { screen: TextInput },
  touches: { screen: Touches },
  scrollview: { screen: ScrollView },
  listview: { screen: ListViews },
  fetch: { screen: NetWorking },
  memes: { screen: FotoMemes },
});

const App = createAppContainer(RouteStack);
export default App;

const styles = StyleSheet.create({
  button: {
    margin: 3,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 7,
    fontSize: 14,
    fontWeight: "bold",
    color: 'white'
  }
})

