import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const page12 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <View />
      <View style={styles.Cho3}>
        <Image source={require('../assets/images/highscare.png')} />
      </View>
      <Text style={styles.Text1}> Above 240</Text>
      <Text style={styles.Text2}> * Your cholesterol level is high. </Text>
      <Text style={styles.Text3}> * Consult your doctor. </Text>
      <Text style={styles.Text3}>
        {' '}
        * Avoid eating foods which contains cholesterol.{' '}
      </Text>
      <Text style={styles.Text3}>
        {' '}
        * Your body needs exercises at least one hour per day.{' '}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  Cho3: {
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
    marginTop: -20,
    color: 'black',
    letterSpacing: 0.34,
    lineHeight: 40,
    marginLeft: 270,
  },
  Text2: {
    alignItems: 'center',
    fontFamily: 'times new roman- Italic',
    fontSize: 24,
    color: 'black',
    marginTop: 50,
    marginBottom: 5,
    letterSpacing: 0.34,
    lineHeight: 40,
  },
  Text3: {
    alignItems: 'center',
    fontFamily: 'times new roman- Italic',
    fontSize: 24,
    color: 'black',
    marginBottom: 5,
    letterSpacing: 0.34,
    lineHeight: 40,
  },
});
export default page12;
