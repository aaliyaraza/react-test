import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image, Linking} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import LoginPage from './src/components/LoginPage';
import DetailsPage from './src/components/DetailsPage';
import WelcomePage from './src/components/WelcomePage';
import EmployeeSearch from './src/components/EmployeeSearch';
import EmployeeProfile from './src/components/EmployeeProfile';
import StartPage from './src/components/StartPage'

const AppNavigator = createStackNavigator({
  Start: { screen: StartPage, navigationOptions: {headerStyle: {display:"none"}, headerLeft: null}},
  Login: { screen: LoginPage, navigationOptions: {headerStyle: {display:"none"}, headerLeft: null}},
  Details: { screen: DetailsPage, navigationOptions: {headerStyle: {display:"none"}, headerLeft: null}},
  Welcome: { screen: WelcomePage, left: '@BACK', navigationOptions: {headerStyle: {display:"none"}, headerLeft: null} },
  Search: { screen: EmployeeSearch, left: '@BACK', navigationOptions: {headerStyle: {display:"none"}, headerLeft: null} },
  Profile: { screen: EmployeeProfile, left: '@BACK', navigationOptions: {headerStyle: {display:"none"}, headerLeft: null} }
});

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}

