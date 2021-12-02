import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const page7 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.Text1}> 100 - 200</Text>
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
    marginTop: -220,
    marginBottom: 50,
    letterSpacing: 0.34,
    lineHeight: 40,
    paddingLeft: 225,
  },
});
export default page7;
