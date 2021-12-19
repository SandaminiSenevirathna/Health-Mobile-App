import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const page17 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <View />
      <View style={styles.pre4}>
        <Image source={require('../assets/images/highscare.png')} />
      </View>
      <Text style={styles.Text1}> Above 140 / Above 90</Text>
      <Text style={styles.Text3}> * You are in a dangerous level. </Text>
      <Text style={styles.Text2}> * Quit smoking. </Text>
      <Text style={styles.Text2}> * Cut back on caffeine. </Text>
      <Text style={styles.Text2}> * Reduce your stress. </Text>
      <Text style={styles.Text2}>
        {' '}
        * Monitor your blood pressure at home and see your doctor regularly.{' '}
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
  pre4: {
    width: 85,
    height: 45,
    marginTop: 110,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 130,
  },
  Text1: {
    alignItems: 'center',
    fontSize: 32,
    marginTop: -40,
    color: 'black',
    letterSpacing: 0.34,
    lineHeight: 40,
    marginLeft: 253,
  },
  Text2: {
    alignItems: 'center',
    fontFamily: 'times new roman- Italic',
    fontSize: 24,
    color: 'black',
    marginBottom: 5,
    letterSpacing: 0.34,
    lineHeight: 40,
    marginLeft: 10,
    marginTop: 10,
  },
  Text3: {
    alignItems: 'center',
    fontFamily: 'times new roman- Italic',
    fontSize: 24,
    color: 'black',
    marginBottom: 5,
    letterSpacing: 0.34,
    lineHeight: 40,
    marginLeft: 10,
    marginTop: 30,
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
export default page17;
