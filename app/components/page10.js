import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const page10 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <View />
      <Text style={styles.Text1}> 0 - 200</Text>
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
    color: 'black',
    marginBottom: 50,
    letterSpacing: 0.34,
    lineHeight: 40,
    paddingLeft: 225,
  },
});
export default page10;
