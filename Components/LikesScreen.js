import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class LikeScreen extends Component{

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="heart" size={20} style={{color: tintColor}}></Icon>
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Text >LikeScreen</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});