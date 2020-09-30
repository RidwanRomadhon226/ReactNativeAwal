import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlustrtionMy} from '../../assets';

const ReactNatveSvg = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>ReactNatvevg</Text>
      <IlustrtionMy style={styles.textTitle} width={200} height={200} />
    </View>
  );
};

export default ReactNatveSvg;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
    alignItems: 'center',
  },
});
