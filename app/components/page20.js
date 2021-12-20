import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const page20 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <View style={styles.image3}>
        <Image source={require('../assets/images/women3.jpg')} />
      </View>
      <View />
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  image3: {
    marginTop: 180,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 185,
  },
});
export default page20;
