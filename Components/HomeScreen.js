import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, ToastAndroid, TouchableOpacity, Platform} from 'react-native';
import {Container, Content, Thumbnail, Button, Header, Left, Right, Body} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardComponent from './CardComponent';


export default class HomeScreen extends Component{


  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="home" size={20} style={{color: tintColor}}></Icon>
    )
  };


  render() {
    return (
      
      <Container style={styles.container}>
        <Header style={styles.androidHeader} androidStatusBarColor="#D3D3D3" iosBarStyle="dark-content">
          <Left style={{flex:1}}>
            <Icon name='camera'
                        size={18}
                        onPress={()=>{
                          ToastAndroid.show('Clique Camera', ToastAndroid.SHORT);
                        }}
                        style={{ paddingLeft:10 }} />
          </Left>
          <Body style={{flex:1}}>
            <Text style={{fontSize:20, fontWeight:'bold'}}>Instagram</Text>
          </Body>
          <Right style={{flex:1}}>
            <Icon name="send"
                        size={18}
                        onPress={()=>{
                            ToastAndroid.show('Clique Direct', ToastAndroid.SHORT);
                        }}
                        style={{paddingRight:10}} />
          </Right>
        </Header>

        <Content>
          <View style={{height:100}}>
            <View style={{
              flex:1, flexDirection: 'row', justifyContent: 'space-between',
              alignItems:'center', paddingHorizontal: 7
            }}>
              <Text style={{fontWeight: 'bold'}}>Stories</Text>
              <View style={{flexDirection:'row',
                      alignItems: 'center'}}>
                <Icon name="play" style={{fontSize:14}}></Icon>
                <Text style={{fontWeight: 'bold', marginLeft:2}}>Watch All</Text>
              </View>
              
            </View>
            <View style={{flex:3}}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    alignItems: 'center',
                    paddingStart: 5,
                    paddingEnd: 5
                  }}
                >

                  <TouchableOpacity
                  onPress={()=>{
                    ToastAndroid.show('Storie Tony Stark', ToastAndroid.SHORT);
                  }}>
                    <Thumbnail source={require
                      ('./assets/storiesImages/11.jpg')}
                      style={{marginHorizontal:5, borderColor:'pink',
                      borderWidth: 2}}
                      
                      />
                  </TouchableOpacity>

                  <TouchableOpacity
                  onPress={()=>{
                    ToastAndroid.show('Storie Rianna', ToastAndroid.SHORT);
                  }}>
                    <Thumbnail source={require
                      ('./assets/storiesImages/22.jpg')}
                      style={{marginHorizontal:5, borderColor:'pink',
                      borderWidth: 2}}
                      
                      />
                  </TouchableOpacity>

                  <TouchableOpacity
                  onPress={()=>{
                    ToastAndroid.show('Storie Will', ToastAndroid.SHORT);
                  }}
                  >
                    <Thumbnail source={require
                      ('./assets/storiesImages/33.jpg')}
                      style={{marginHorizontal:5, borderColor:'pink',
                      borderWidth: 2}}
                      
                      />
                  </TouchableOpacity>

                  <TouchableOpacity
                  onPress={()=>{
                    ToastAndroid.show('Storie J. Deep', ToastAndroid.SHORT);
                  }}>
                    <Thumbnail source={require
                      ('./assets/storiesImages/44.jpg')}
                      style={{marginHorizontal:5, borderColor:'pink',
                      borderWidth: 2}}
                      
                      />
                  </TouchableOpacity>

                  <TouchableOpacity
                  onPress={()=>{
                    ToastAndroid.show('Storie Bob Marley', ToastAndroid.SHORT);
                  }}>
                    <Thumbnail source={require
                      ('./assets/storiesImages/55.jpg')}
                      style={{marginHorizontal:5, borderColor:'pink',
                      borderWidth: 2}}
                      
                      />
                  </TouchableOpacity>

                  <TouchableOpacity
                  onPress={()=>{
                    ToastAndroid.show('Storie Chaves', ToastAndroid.SHORT);
                  }}>
                    <Thumbnail source={require
                      ('./assets/storiesImages/66.jpg')}
                      style={{marginHorizontal:5, borderColor:'pink',
                      borderWidth: 2}}
                      
                      />
                  </TouchableOpacity>

                  <TouchableOpacity
                  onPress={()=>{
                    ToastAndroid.show('Clique Matrix', ToastAndroid.SHORT);
                  }}>
                    <Thumbnail source={require
                      ('./assets/storiesImages/77.jpg')}
                      style={{marginHorizontal:5, borderColor:'pink',
                      borderWidth: 2}}
                      
                      />
                  </TouchableOpacity>

                </ScrollView>
            </View>
          </View>

          <CardComponent imageSource="1" likes="50"/>
          <CardComponent imageSource="2" likes="98"/>
          <CardComponent imageSource="3" likes="83"/>
        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  androidHeader: { 
    ...Platform.select({ 
    android: { 
      //marginTop: StatusBar.currentHeight,
      //StatusBarsetBackgroundColor("#D3D3D3"),
      //StatusBarsetBarStyle("dark-content"),
      backgroundColor: 'white',
      //StatusBarColor
      //StatusBar
     } 
    }) },
  androidHeaderTitle: { 
    ...Platform.select({ 
      android: { 
        alignItems: 'flex-end',
        //textAlign: 'center',
        //flex: 1
       } 
      }) 
  },
  //androidStatusBarColor: 'white',
});