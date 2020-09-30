import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BasicJavaScript = () => {
  //Primitive
  const nama = 'Ridwan Romadhon'; // String
  let usia = 24; // Number
  const apakahLaki = true; //Bolean

  // Complex
  const hewanPeliaraan = {
    nama: 'Ridwan',
    jenis: 'Kucing',
    usia: 3,
    apakahLokal: true,
    warna: 'yellow',
    orangTua: {
      jantan: 'Kaisar',
      betina: 'Quieen',
    },
  };

  const sapaOrang = (name, age) => {
    return console.log(`Hallo ${name} Usia anda ${age} `);
  };

  sapaOrang('Ridwan', 20);

  const namaOrang = ['Ridwan', 'Romadhon', 'Budi', 20, true];

  typeof namaOrang; //Object

  // Jika Hujan Turun Kalau Kerja bawa Payung

  // if (hewanPeliaraan.nama === 'Ridwan') {
  //   console.log('Hallo Ridwan');
  // } else {
  //   console.log('Hewan SiapaIni');
  // }

  const sapaHewan = (objectHewan) => {
    // let hasilSapa = '';
    // if (objectHewan.nama === 'Ridwan') {
    //   hasilSapa = 'hallo Riwaan Romadhon';
    // } else {
    //   hasilSapa = 'ini hewan siapa';
    // }
    // return hasilSapa;
    return objectHewan.nama === 'Ridwan' ? 'Hallo Ridwan ' : 'Ini Hewan Siapa';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>BasicJavaSc ript</Text>

      <Text>Name : {nama}</Text>
      <Text>Age : {usia}</Text>
      <Text>=====================</Text>
      <Text>{sapaHewan(hewanPeliaraan)}</Text>
      {namaOrang.map((x) => (
        <Text>{x}</Text>
      ))}
    </View>
  );
};

export default BasicJavaScript;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
});
