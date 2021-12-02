import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const page4 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.Text1}> Select Your Diabetic Level </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#99C68E',
    justifyContent: 'center',
  },
  Text1: {
    alignItems: 'center',
    fontSize: 24,
    color: 'black',
    marginTop: -130,
    marginBottom: 50,
    letterSpacing: 0.34,
    lineHeight: 40,
    paddingLeft: 25,
  },
});
export default page4;
