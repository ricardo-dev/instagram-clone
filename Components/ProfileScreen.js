import React, {Component} from 'react';
import {StyleSheet, Text, View, Platform, ToastAndroid, Image, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container, Content, Thumbnail, Header, Left, Right, Body, Button} from 'native-base';
import CardComponent from './CardComponent';

var images = [
  require('./assets/feedImages/1.jpg'),
  require('./assets/feedImages/2.jpg'),
  require('./assets/feedImages/3.jpg'),
  require('./assets/feedImages/4.jpg'),
  require('./assets/feedImages/5.jpg'),
  require('./assets/feedImages/6.jpg'),
  require('./assets/feedImages/7.jpg'),
  require('./assets/feedImages/8.jpg'),
  require('./assets/feedImages/9.jpg'),
  require('./assets/feedImages/10.jpg'),
  require('./assets/feedImages/11.jpg'),
  require('./assets/feedImages/12.jpg'),
]

var {width, height} = Dimensions.get('window');

export default class ProfileScreen extends Component{

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="user" size={20} style={{color: tintColor}}></Icon>
    )
  };

  constructor(props) {
    super(props)

    this.state = {
      activeIndex: 0
    }
  }

  segmentCliked = (index) =>{
    this.setState({
      activeIndex: index
    })
  }

  renderSectionOne = () => {
    return images.map((image, index) => {
      return (
        <View key={index} style={[ {width: (width)/3}, {height: (width)/3},
          {marginBottom:2},
          index % 3 !== 0? {paddingLeft: 2}: {paddingLeft:0} ]}>
          <Image style={{flex:1, width: undefined, height: undefined}}
            source={image}></Image>
        </View>
      )
    }
    )
  }

  renderSectionTwo = () => {
    return(
      <View>
          <CardComponent imageSource="1" likes="50"/>
          <CardComponent imageSource="2" likes="98"/>
          <CardComponent imageSource="3" likes="83"/>
      </View>
    )
  }

  renderSection = () => {
    if(this.state.activeIndex == 0){
      return(
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {this.renderSectionOne()}
        </View>
      );
    }

    else if(this.state.activeIndex == 1){
      return(
        <View>
          {this.renderSectionTwo()}
        </View>
      );
    }

    else if(this.state.activeIndex == 2){
      return(
        <View>
          <Text>Conteudo botao 3</Text>
        </View>
      );
    }

    else if(this.state.activeIndex == 3){
      return(
        <View>
          <Text>Conteudo botao 4</Text>
        </View>
      );
    }
  }

  render() {
    return (
      <Container style={{flex:1, backgroundColor:'white'}}>
        <Header style={styles.androidHeader} androidStatusBarColor="#D3D3D3" iosBarStyle="dark-content">
          <Left style={{flex:1}}>
            <Icon name='user-plus'
                        size={18}
                        onPress={()=>{
                          ToastAndroid.show('Clique Add', ToastAndroid.SHORT);
                        }}
                        style={{ paddingLeft:10 }} />
          </Left>
          <Body style={{flex:1}}>
            <Text style={{fontSize:18, fontWeight:'bold'}}>Ricardo dos Santos</Text>
          </Body>
          <Right style={{flex:1}}>
            <Icon name="times"
                        size={18}
                        onPress={()=>{
                            ToastAndroid.show('Clique X', ToastAndroid.SHORT);
                        }}
                        style={{paddingRight:10}} />
          </Right>
        </Header>
        <Content>
          <View style={{paddingTop:10}}>
            <View style={{flexDirection:'row'}}>
              <View style={{flex:1, alignItems:'center'}}>
                <Image source={require
                  ('./assets/perfil/fotoRicardo.jpg')}
                  style={{width:75, height: 75, borderRadius:37.5}}></Image>
              </View>
              <View style={{flex:3}}>
                  <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <View style={{alignItems:'center'}}>
                      <Text>20</Text>
                      <Text style={{fontSize:10, color:'grey'}}>posts</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                      <Text>206</Text>
                      <Text style={{fontSize:10, color:'grey'}}>followers</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                      <Text>20</Text>
                      <Text style={{fontSize:10, color:'grey'}}>following</Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row', paddingTop:10}}>
                    <Button bordered dark style={{
                      flex:3, marginLeft:10, justifyContent: 'center', height:30
                      }}
                      onPress={()=>{
                        ToastAndroid.show('Clique Edit Profile', ToastAndroid.SHORT);
                      }}>
                      <Text>Edit Profile</Text>
                    </Button>
                    <Button bordered dark style={{
                      flex:1, marginRight:10, marginLeft:5, justifyContent: 'center', height:30
                      }}
                      onPress={()=>{
                        ToastAndroid.show('Clique Check', ToastAndroid.SHORT);
                      }}>
                      <Icon name="check"></Icon>
                    </Button>
                  </View>
              </View>
            </View>
            <View style={{paddingVertical:10, paddingHorizontal:10}}>
              <Text style={{fontWeight:'bold'}}>Ricardo dos Santos</Text>
              <Text>BackEnd | Mobile | Java | React-Native</Text>
              <Text>www.herokuapp.portfolioricardo.com</Text>
            </View>
          </View>


          <View>
            <View style={{flexDirection:'row', justifyContent:'space-around', 
                          borderTopWidth: 1, borderTopColor:'#eae5e5'}}>
               <Button transparent
                        onPress={()=> this.segmentCliked(0)}
                        active={this.state.activeIndex == 0}>
                    <Icon size={20} style={[this.state.activeIndex == 0 ? {}:{
                      color:'#d1cece'
                    }]} name="bookmark-o"></Icon>
               </Button>

               <Button transparent
               onPress={()=> this.segmentCliked(1)}
               active={this.state.activeIndex == 1}>
                    <Icon size={20} style={[this.state.activeIndex == 1 ? {}:{
                      color:'#d1cece'
                    }]} name="bookmark-o"></Icon>
               </Button>

               <Button transparent
               onPress={()=> this.segmentCliked(2)}
               active={this.state.activeIndex == 2}>
                    <Icon size={20} style={[this.state.activeIndex == 2 ? {}:{
                      color:'#d1cece'
                    }]} name="bookmark-o"></Icon>
               </Button>

               <Button transparent
               onPress={()=> this.segmentCliked(3)}
               active={this.state.activeIndex == 3}>
                    <Icon size={20} style={[this.state.activeIndex == 3 ? {}:{
                      color:'#d1cece'
                    }]} name="bookmark-o"></Icon>
               </Button>
            </View>

            {this.renderSection()}
          </View>
        </Content>
      </Container>
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
});