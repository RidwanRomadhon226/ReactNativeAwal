import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Coffe from '../../assets/images/Rectangle.png';

const Cart = (props) => {
  return (
    <View>
      <View style={styles.cardWrapper}>
        <Image source={Coffe} style={styles.iconCard} />
        <Text style={styles.notif}>{props.jumlahProduct}</Text>
      </View>
      <Text>Pesanan Anda</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
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
