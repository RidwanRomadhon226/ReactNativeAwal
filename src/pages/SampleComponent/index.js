import React, {Component} from 'react';
import {View, Image, TextInput, Text} from 'react-native';

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

export default SampleComponent;
