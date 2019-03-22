import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';

const  {width} = Dimensions.get('window');

export default class AddMediaScreen extends Component{

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="plus" size={20} style={{color: tintColor}}></Icon>
    )
  };

  state = {
    imagens:[
      {
        imagem:require('./assets/publicacao/tlor.jpg'),
      },{
        imagem:require('./assets/publicacao/2.jpg'),
      },{
        imagem:require('./assets/publicacao/3.jpg'),
      }
    ]
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{
          height:200,
        }}>
          <Swiper style={{}} height={200}
          loop={false} // lista circular
          // autoplay
          //autoplay={true}
          //autoplayTimeout={2.5}
          //autoplayDirection={true}

          //horizontal={false}
          dot={<View style={{backgroundColor: 'rgba(255,255,255,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
          activeDot={<View style={{backgroundColor: '#fff', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
            >

            {this.state.imagens.map((value, index)=>{
              return(
                <View style={{height:200}} key={index}>
                  <Image source={value.imagem} style={{height:200, width:width}} />
                </View>
              );
            })}

          </Swiper>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
