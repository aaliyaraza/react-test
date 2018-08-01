/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image, Linking} from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginPage from './src/components/LoginPage';
import DetailsPage from './src/components/DetailsPage';

const AppNavigator = StackNavigator({
  Login: { screen: LoginPage },
  Details: { screen: DetailsPage }
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <AppNavigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#24A59A',
    paddingLeft: 29,
    paddingRight: 29, 
    fontFamily: "ObjektivMk1Rg"
  }
});
