import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const page11 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <View />
      <View style={styles.Cho1}>
        <Image source={require('../assets/images/high.png')} />
      </View>
      <Text style={styles.Text1}> 200 - 239</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  Cho1: {
    width: 85,
    height: 45,
    marginTop: 110,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 130,
  },
  Text1: {
    alignItems: 'center',
    fontSize: 36,
    color: 'black',
    letterSpacing: 0.34,
    lineHeight: 40,
    marginLeft: 250,
  },
});
export default page11;
