import React, {Component} from 'react';
import MainScreen from './Components/MainScreen'
import { StackNavigator } from 'react-navigation';
import './Components/config/StatusBarConfig';

export default class App extends Component{
  render() {
    return (
      <AppStackNavigator/>
    );
  }
}

const AppStackNavigator = StackNavigator({
  Main: {
    screen: MainScreen
  }
});

