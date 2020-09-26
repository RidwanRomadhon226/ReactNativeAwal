import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

class FlexBox extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#f2f2f2',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <View style={{backgroundColor: 'red', width: 50, height: 50}}></View>
          <View
            style={{backgroundColor: 'yellow', width: 50, height: 50}}></View>
          <View style={{backgroundColor: 'blue', width: 50, height: 50}}></View>
          <View style={{backgroundColor: 'pink', width: 50, height: 50}}></View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text>Home</Text>
          <Text>Beranda</Text>
          <Text>Tetang</Text>
          <Text>Contact</Text>
        </View>

        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          <Image
            source={{uri: 'https://placeimg.com/640/480/people'}}
            style={{width: 100, height: 100, borderRadius: 50, marginRight: 14}}
          />
          <View style={{alignItems: 'flex-start'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Ridwan Romadhon
            </Text>
            <Text>30 Subscrible</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default FlexBox;
