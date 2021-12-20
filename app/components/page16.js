import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const page16 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <View />
      <View style={styles.pre3}>
        <Image source={require('../assets/images/high.png')} />
      </View>
      <Text style={styles.Text1}> 120-139 / 80-89</Text>
      <Text style={styles.Text3}> * You are in a risk level. </Text>
      <Text style={styles.Text2}>
        {' '}
        * Lose extra pounds and watch your waistline.{' '}
      </Text>
      <Text style={styles.Text2}> * Exercise regularly. </Text>
      <Text style={styles.Text2}> * Eat a healthy diet. </Text>
      <Text style={styles.Text2}> * Reduce sodium in your diet. </Text>
      <Text style={styles.Text2}>
        {' '}
        * Limit the amount of alcohol you drink.{' '}
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
  pre3: {
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
    marginLeft: 250,
  },
  Text2: {
    alignItems: 'center',
    fontFamily: 'times new roman- Italic',
    fontSize: 24,
    color: '#000000',
    marginBottom: 5,
    letterSpacing: 0.34,
    lineHeight: 40,
    marginLeft: 10,
  },
  Text3: {
    alignItems: 'center',
    fontFamily: 'times new roman- Italic',
    fontSize: 24,
    color: '#000000',
    marginBottom: 5,
    letterSpacing: 0.34,
    lineHeight: 40,
    marginLeft: 10,
    marginTop: 50,
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
export default page16;
