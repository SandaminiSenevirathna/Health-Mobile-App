import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const page14 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <View />
      <Text style={styles.Text1}> 90-120 / 60-80</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  Text1: {
    alignItems: 'center',
    fontSize: 36,
    marginTop: -20,
    color: 'black',
    letterSpacing: 0.34,
    lineHeight: 40,
    marginLeft: 250,
  },
});
export default page14;
