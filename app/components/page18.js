import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const page18 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <View style={styles.image3}>
        <Image source={require('../assets/images/scare.png')} />
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
    width: 85,
    height: 45,
    marginTop: 95,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 120,
  },
});
export default page18;
