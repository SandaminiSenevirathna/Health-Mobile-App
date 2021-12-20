import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const page20 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.Text1}> How to protect our heart?. </Text>
      <Text style={styles.Text3}> * Eat Healthy. </Text>
      <Text style={styles.Text3}> * Get Active. </Text>
      <Text style={styles.Text3}> * Stay at a healthy weight. </Text>
      <Text style={styles.Text3}> * Quit smocking. </Text>
      <Text style={styles.Text3}>
        {' '}
        * Control your cholesterol and blood pressure.{' '}
      </Text>
      <Text style={styles.Text3}> * Manage Stress. </Text>
      <View />
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
    fontSize: 26,
    color: 'black',
    letterSpacing: 0.34,
    lineHeight: 40,
    fontWeight: 'bold',
  },
  Text3: {
    alignItems: 'center',
    fontSize: 24,
    color: 'black',
    letterSpacing: 0.34,
    lineHeight: 40,
    marginTop: 10,
  },
});
export default page20;
