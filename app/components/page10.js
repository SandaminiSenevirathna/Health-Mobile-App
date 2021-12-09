import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const page10 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <View style={styles.Cho1}>
        <Image source={require('../assets/images/happy.png')} />
      </View>
      <View />
      <Text style={styles.Text1}> 0 - 200</Text>
      <Text style={styles.Text2}> * You are in a good level. </Text>
      <Text style={styles.Text3}>
        {' '}
        * You have a normal cholesterol level .{' '}
      </Text>
      <Text style={styles.Text4}> * Eats healthy foods. </Text>
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
    marginTop: 75,
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
    marginLeft: 250,
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
  Text4: {
    alignItems: 'center',
    fontFamily: 'times new roman- Italic',
    fontSize: 24,
    color: 'black',
    marginBottom: 5,
    letterSpacing: 0.34,
    lineHeight: 40,
  },
});
export default page10;
