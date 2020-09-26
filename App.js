import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextComponent,
  TextInput,
  View,
} from 'react-native';
import Coffe from './Rectangle.png';

const App = () => {
  return <StylingReactNativeComponent />;
};

const StylingReactNativeComponent = () => {
  return (
    <View style={{padding: 30, backgroundColor: '#543A20', flex: 1}}>
      <Text style={Styles.text}>Styling React native Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'blue',
          borderWidth: 2,
          borderColor: 'red',
          marginTop: 20,
          marginLeft: 20,
        }}
      />

      <View
        style={{
          paddingTop: 2,
          paddingLeft: 2,
          paddingRight: 2,
          width: 140,
          borderRadius: 10,
          backgroundColor: '#CE9760',
        }}>
        <Image
          source={Coffe}
          style={{width: 136, height: 101, borderRadius: 10}}
        />
        <Text
          style={{
            fontSize: 15,
            fontWeight: '600',
            marginTop: 1,
            color: '#543A20',
            marginLeft: 7,
          }}>
          Espresso
        </Text>
        <Text
          style={{
            fontSize: 7,
            fontWeight: '600',
            marginTop: 1,
            color: '#543A20',
            marginLeft: 7,
            maxWidth: 92,
          }}>
          Espresso Steamed milk and thin of foam
        </Text>
        <View
          style={{
            backgroundColor: '#543A20',
            borderRadius: 10,
            marginLeft: 33,
            marginRight: 33,
            marginVertical: 5,
          }}>
          <Text
            style={{
              fontSize: 7,
              color: '#CE9760',
              fontWeight: '600',
              textAlign: 'center',
            }}>
            Add To Chart
          </Text>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 18,
    marginLeft: 20,
    marginTop: 40,
    fontWeight: 'bold',
  },
});

const SampleComponent = () => {
  return (
    <View>
      <View
        style={{
          width: 80,
          height: 20,
          backgroundColor: 'red',
        }}></View>
      <Ridwan />
      <Ridwan />
      <Text>Riwdan</Text>
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Ridwan = () => {
  return <Text>Ridwan Romadhon</Text>;
};

const Photo = () => {
  return (
    <Image
      style={{width: 100, height: 100}}
      source={{uri: 'https://placeimg.com/640/480/nature'}}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Ini Component dari class</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/640/480/animals'}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text style={{color: 'blue', fontSize: 14}}>Hallo Ini Hewan</Text>
      </View>
    );
  }
}

export default App;
