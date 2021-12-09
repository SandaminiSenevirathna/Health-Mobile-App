import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const page8 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <View style={styles.image9}>
        <Image source={require('../assets/images/highscare.png')} />
      </View>
      <View />
      <View style={styles.image10}>
        <Image source={require('../assets/images/sugar.png')} />
      </View>
      <Text style={styles.Text1}> 200 To Above</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  image9: {
    width: 85,
    height: 45,
    marginTop: 110,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 130,
  },
  image10: {
    width: 85,
    height: 45,
    marginTop: 160,
    alignItems: 'center',
    paddingLeft: 120,
  },
  Text1: {
    alignItems: 'center',
    fontSize: 36,
    color: 'black',
    marginTop: -220,
    marginBottom: 50,
    letterSpacing: 0.34,
    lineHeight: 40,
    paddingLeft: 225,
  },
});
export default page8;
