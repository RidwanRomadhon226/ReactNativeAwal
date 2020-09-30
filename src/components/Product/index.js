import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Coffe from '../../assets/images/Rectangle.png';

const Product = (props) => {
  return (
    <View style={styles.wrepper}>
      <Image source={Coffe} style={styles.image} />
      <Text style={styles.titleText}>Espresso</Text>
      <Text style={styles.textDesc}>
        Espresso Steamed milk and thin of foam
      </Text>
      <TouchableOpacity onPress={props.onButtonPres}>
        <View style={styles.wrapperButton}>
          <Text style={styles.textButton}>Add To Chart</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  wrepper: {
    paddingTop: 2,
    paddingLeft: 2,
    paddingRight: 2,
    width: 140,
    borderRadius: 10,
    backgroundColor: '#CE9760',
  },
  titleText: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 1,
    color: '#543A20',
    marginLeft: 7,
  },
  image: {width: 136, height: 101, borderRadius: 10},
  textDesc: {
    fontSize: 7,
    fontWeight: '600',
    marginTop: 1,
    color: '#543A20',
    marginLeft: 7,
    maxWidth: 92,
  },
  wrapperButton: {
    backgroundColor: '#543A20',
    borderRadius: 10,
    marginLeft: 33,
    marginRight: 33,
    marginVertical: 5,
  },
  textButton: {
    fontSize: 7,
    color: '#CE9760',
    fontWeight: '600',
    textAlign: 'center',
  },
});
