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
      <View style={styles.button2}>
        <Button
          fontColor="#000000"
          color="#306754"
          title="Exit"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
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
    color: '#000000',
    letterSpacing: 0.34,
    lineHeight: 40,
    marginLeft: 270,
  },
  Text2: {
    alignItems: 'center',
    fontFamily: 'times new roman- Italic',
    fontSize: 24,
    color: '#000000',
    marginTop: 50,
    marginBottom: 5,
    letterSpacing: 0.34,
    lineHeight: 40,
  },
  Text3: {
    alignItems: 'center',
    fontFamily: 'times new roman- Italic',
    fontSize: 24,
    color: '#000000',
    marginBottom: 5,
    letterSpacing: 0.34,
    lineHeight: 40,
  },
  button2: {
    fontWeight: 'bold',
    fontColor: '#000000',
    margin: 15,
    fontSize: 20,
    marginTop: -90,
    elevation: 8,
    backgroundColor: '#033E3E',
    borderRadius: 20,
    marginLeft: 250,
    width: 190,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
});
export default page12;
