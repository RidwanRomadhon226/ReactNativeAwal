import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const Story = (props) => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image
        source={{uri: props.gambar}}
        style={{width: 70, height: 70, borderRadius: 70 / 2}}
      />
      <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.title}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View>
      <Text>Props Dinamis</Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <Story title="Ridwan" gambar="https://placeimg.com/640/480/any" />
          <Story
            title="Ridwan Mantap"
            gambar="https://placeimg.com/640/480/tech"
          />
          <Story
            title="Ridwan keren"
            gambar="https://placeimg.com/640/480/people"
          />
          <Story
            title="Ridwan keren"
            gambar="https://placeimg.com/640/480/people"
          />
          <Story
            title="Ridwan keren"
            gambar="https://placeimg.com/640/480/people"
          />
          <Story
            title="Ridwan keren"
            gambar="https://placeimg.com/640/480/people"
          />
          <Story
            title="Ridwan keren"
            gambar="https://placeimg.com/640/480/people"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;

const styles = StyleSheet.create({});
