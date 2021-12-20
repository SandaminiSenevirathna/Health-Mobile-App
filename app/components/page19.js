import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const page19 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.Text1}>
        {' '}
        * Maintain a safe distance from others.{' '}
      </Text>
      <Text style={styles.Text2}> (At least 1 metre.) </Text>
      <Text style={styles.Text3}> * Wear a mask in public. </Text>
      <Text style={styles.Text3}> * Clean your hands often. </Text>
      <Text style={styles.Text3}> * Get vaccinated when it's your turn. </Text>
      <Text style={styles.Text3}> * Stay home if you feel unwell. </Text>
      <View />
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'black',
  },
  Text1: {
    alignItems: 'center',
    fontSize: 24,
    color: 'white',
    letterSpacing: 0.34,
    lineHeight: 40,
  },
  Text2: {
    alignItems: 'center',
    fontSize: 24,
    color: 'white',
    letterSpacing: 0.34,
    lineHeight: 40,
    marginTop: -2,
  },
  Text3: {
    alignItems: 'center',
    fontSize: 24,
    color: 'white',
    letterSpacing: 0.34,
    lineHeight: 40,
    marginTop: 10,
  },
});
export default page19;
