import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';

const CallApiAxios = () => {
  const [datauser, setdataUser] = useState({
    avatar: '',
    email: '',
    first_name: '',
    last_name: '',
  });

  const [dataPost, setdataPost] = useState({
    name: '',
    job: '',
  });

  const getData = () => {
    // fetch('https://reqres.in/api/users/2')
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setdataUser(json.data);
    //   });

    Axios.get('https://reqres.in/api/users/3')
      .then((result) => {
        setdataUser(result.data.data);
      })
      .catch((err) => console.log('err:', err));
  };

  const postData = () => {
    const dataForApi = {
      name: 'morpheus',
      job: 'leader',
    };

    Axios.post('https://reqres.in/api/user', dataForApi)
      .then((result) => {
        setdataPost(result.data);
      })
      .catch((err) => console.log('err:', err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Call Api Axios</Text>
      <Button title="GET Data" onPress={getData} />
      <View style={styles.line} />
      <Text>Response Api</Text>
      <View style={styles.line} />
      <View>
        {datauser.avatar.length > 0 && (
          <Image source={{uri: datauser.avatar}} style={styles.image} />
        )}
        <Text>email : {datauser.email}</Text>
        <Text>Frist Name:{datauser.first_name} </Text>
        <Text>Last Name: {datauser.last_name}</Text>
      </View>
      <Button title="Post Data" onPress={postData} />
      <View>
        <Text>Frist Name:{dataPost.name} </Text>
        <Text>Jobs: {dataPost.job}</Text>
      </View>
    </View>
  );
};

export default CallApiAxios;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
  line: {
    height: 2,
    backgroundColor: 'black',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
