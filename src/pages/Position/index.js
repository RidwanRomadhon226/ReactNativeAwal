import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Coffe from '../../assets/images/Rectangle.png';

const Position = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.cardWrapper}>
        <Image source={Coffe} style={styles.iconCard} />
        <Text style={styles.notif}>10</Text>
      </View>
      <Text>Pesanan Anda</Text>
    </View>
  );
};

export default Position;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    alignItems: 'center',
  },
  cardWrapper: {
    // width: 160,
    // height: 120,
    // borderWidth: 1,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    shadowColor: '#543A20',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  iconCard: {width: 136, height: 101},
  notif: {
    fontSize: 12,
    fontWeight: 'bold',
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 50,
    width: 25,
    height: 25,
    position: 'absolute',
    top: 5,
    right: 5,
  },
});
