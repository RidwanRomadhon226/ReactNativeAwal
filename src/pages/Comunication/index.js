import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Cart from '../../components/Cart';
import Product from '../../components/Product';

const Comunication = () => {
  const [jumlahProduct, setjumlahProduct] = useState(40);

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Comunication</Text>
      <Cart jumlahProduct={jumlahProduct} />
      <Product onButtonPres={() => setjumlahProduct(jumlahProduct + 1)} />
    </View>
  );
};

export default Comunication;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },

  textTitle: {
    textAlign: 'center',
  },
});
