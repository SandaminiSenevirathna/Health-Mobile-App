import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const page11 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <View />
      <Text style={styles.Text1}> 200 - 239</Text>
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
    letterSpacing: 0.34,
    lineHeight: 40,
    marginLeft: 250,
  },
});
export default page11;
