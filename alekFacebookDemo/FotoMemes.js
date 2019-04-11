import React, { Component } from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView } from 'react-native';


export default class FotoMeme extends Component {
    static navigationOptions = { title: "Memes just for FUN!" }
    render() {
      return (
        <View style={{ flex: 1 }}>
          <Text style={{ marginBottom: 3 }}>A little WebView with memes that I made for fun.</Text>
          <Text style={{ marginBottom: 3 }}>I do think that you will find some of these mems funny, and the WebView is of my google docs.</Text>
          <Text style={{ marginBottom: 3 }}>Please observe that this View, includes an embedded WebView</Text>
          <WebView
            source={{ uri: "https://docs.google.com/document/d/1lAmTlezjmtN7f0aZVQQtdkjSRmwWDrkRfCqf4oGxzQo/edit?usp=sharing" }}
            style={{ marginTop: 20, flex: 1 }}
          />
        </View>
      );
    }
  }