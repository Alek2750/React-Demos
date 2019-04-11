import React, { Component } from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class WhatToDo extends React.Component {
    static navigationOptions = { title: "What I have to do" }
    render() {
      return (
        <View style={{ flex: 1 }}>
          <Text style={{ marginBottom: 3 }}>Complete all steps in Facebooks "The Basics" tutorial (see below)</Text>
          <Text style={{ marginBottom: 3 }}>For each of the 11 steps, add a corresponding Component in this project +
          the necessecary changes to navigate into it.(inspired by, how you navigated into this View)</Text>
          <Text style={{ marginBottom: 3 }}>Please observe that this View, includes an embedded WebView</Text>
          <WebView
            source={{ uri: "https://facebook.github.io/react-native/docs/tutorial.html" }}
            style={{ marginTop: 20, flex: 1 }}
          />
        </View>
      );
    }
  }