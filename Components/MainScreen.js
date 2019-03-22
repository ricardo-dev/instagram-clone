import React, {Component} from 'react';
import {StyleSheet, Text, View, ToastAndroid, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import AddMediaScreen from './AddMediaScreen';
import LikesScreen from './LikesScreen';
import ProfileScreen from './ProfileScreen';

class MainScreen extends Component{

  static navigationOptions = {
    /*headerLeft: <Icon name='camera'
                      size={18}
                      onPress={()=>{
                        ToastAndroid.show('Clique Camera', ToastAndroid.SHORT);
                      }}
                      style={{ paddingLeft:10 }} />,
    title: 'Instagram',
    headerTitleStyle: {
        textAlign:"center",
        flex:1
     },
    headerRight: <Icon name="send"
                       size={18}
                       onPress={()=>{
                          ToastAndroid.show('Clique Direct', ToastAndroid.SHORT);
                       }}
                       style={{paddingRight:10}} />*/
    header:null,
  };

  render() {
    return (
      <AppTabNavigator/>
    );
  }
}

export default MainScreen;

//const AppTabNavigator = createBottomTabNavigator({
const AppTabNavigator = createMaterialTopTabNavigator({
    Home: {
        screen: HomeScreen,
    },
    Search: {
        screen: SearchScreen,
    },
    AddMedia: {
        screen: AddMediaScreen,
    },
    Likes: {
        screen: LikesScreen,
    },
    Profile: {
        screen: ProfileScreen,
    }
    },{
    animationEnabled: true,
    swipeEnabled: false,
    lazy: true,
    tabBarPosition: "bottom",
    tabBarOptions:{
        style:{
            ...Platform.select({
                android:{
                    backgroundColor: 'white'
                }
            })
        },
        //pressColor: 'white',
        indicatorStyle: {
            backgroundColor: 'white',
        },
        activeTintColor: '#333',
        inactiveTintColor: '#d1cece',
        showLabel: false,
        showIcon: true
    }
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
