import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';

const CallApiValinlaJs = () => {
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

  useEffect(() => {
    // Call API Method GET
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));

    // Call API Method POST

    const dataForApi = {
      name: 'morpheus',
      job: 'leader',
    };

    // console.log('data Object :', dataForApi);
    // console.log('data Stringifai :', JSON.stringify(dataForApi));

    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForApi),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  });

  const getData = () => {
    fetch('https://reqres.in/api/users/2')
      .then((response) => response.json())
      .then((json) => {
        setdataUser(json.data);
      });
  };

  const postData = () => {
    const dataForApi = {
      name: 'morpheus',
      job: 'leader',
    };

    // console.log('data Object :', dataForApi);
    // console.log('data Stringifai :', JSON.stringify(dataForApi));

    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForApi),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setdataPost(json);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>CallApiValinlaJs</Text>
      <Button title="GET Data" onPress={getData} />
      <View style={styles.line} />
      <Text>Response Api</Text>
      <View style={styles.line} />
      <View>
        <Image source={{uri: datauser.avatar}} style={styles.image} />
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

export default CallApiValinlaJs;

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
