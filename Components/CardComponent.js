import React, {Component} from 'react';
import {StyleSheet, Text, View, Image,ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DoubleClick from 'react-native-double-click';

import {Card, CardItem, Thumbnail, Body, Left, Right,
        Button} from 'native-base';


export default class CardComponent extends Component{

  render() {

    const images = {
        '1':require('./assets/publicacao/tlor.jpg'),
        '2':require('./assets/publicacao/2.jpg'),
        '3':require('./assets/publicacao/3.jpg'),
    };

    
    return (
      <Card>
          <CardItem>
              <Left>
                  <Thumbnail
                  style={{width: 50, height: 50}}
                  source={require
                    ('./assets/perfil/fotoRicardo.jpg')}
                  />
                  <Body>
                      <Text>Ricardo dos Santos</Text>
                      <Text note>Nov 7, 2018</Text>
                  </Body>
              </Left>
          </CardItem>
          <CardItem cardBoody>
                    <Image source={images[this.props.imageSource]} style={
                    {height: 200, width: null, flex:1}} />
          </CardItem>
          <CardItem style={{height: 45}}>
              <Left>
                 <Button transparent>
                    <Icon name="heart" size={23}
                    style={{color: 'black'}}
                    onPress={()=>{
                        ToastAndroid.show('Like', ToastAndroid.SHORT);
                     }}/>
                </Button>
                <Button transparent>
                    <Icon name="check" size={23}
                    style={{color: 'black'}}
                    onPress={()=>{
                        ToastAndroid.show('Chat', ToastAndroid.SHORT);
                     }}/>
                </Button>
                <Button transparent>
                    <Icon name="send" size={23}
                    style={{color: 'black'}}
                    onPress={()=>{
                        ToastAndroid.show('Direct', ToastAndroid.SHORT);
                     }}/>
                </Button>
              </Left>
          </CardItem>
          <CardItem style={{height: 20}}>
                <Text>{this.props.likes}</Text>
          </CardItem>
          <CardItem>
              <Body>
                  <Text>
                  <Text style={{fontWeight:'900'}}>Ricardo dos Santos </Text>
                  Sed ac lacus fermentum, cursus elit nec, finibus ante. Curabitur 
                  sed ipsum sed justo commodo cursus. Nam bibendum cursus dui, 
                  id aliquet ex scelerisque sed. Sed et dapibus arcu. Praesent 
                  ornare libero eu mauris fermentum porttitor. Nulla facilisi. 
                  Integer rhoncus sem purus, in congue lorem rutrum vel.
                  </Text>
              </Body>
          </CardItem>
      </Card>
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