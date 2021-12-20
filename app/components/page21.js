import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const page21 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.Text1}> How to protect our brain?. </Text>
      <Text style={styles.Text3}> * Get regular exercise. </Text>
      <Text style={styles.Text3}>
        {' '}
        * Control your risk for heart problems.{' '}
      </Text>
      <Text style={styles.Text3}> * Manage your blood sugar level. </Text>
      <Text style={styles.Text3}>
        {' '}
        * Reduce or stop using certain medications.{' '}
      </Text>
      <Text style={styles.Text3}>
        {' '}
        * Protect against hearing loss and social isolation.{' '}
      </Text>
      <View />
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#000000',
  },
  Text1: {
    alignItems: 'center',
    fontSize: 26,
    color: '#FFFFFF',
    letterSpacing: 0.34,
    lineHeight: 40,
    fontWeight: 'bold',
  },
  Text3: {
    alignItems: 'center',
    fontSize: 24,
    color: '#FFFFFF',
    letterSpacing: 0.34,
    lineHeight: 40,
    marginTop: 10,
  },
});
export default page21;
