import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';

const page11 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <View />
      <View style={styles.Cho1}>
        <Image source={require('../assets/images/high.png')} />
      </View>
      <Text style={styles.Text1}> 200 - 239</Text>
      <Text style={styles.Text2}>
        {' '}
        * You are on border line cholesterol level.{' '}
      </Text>
      <Text style={styles.Text3}> * Be causes of your cholesterol level. </Text>
      <Text style={styles.Text3}>
        {' '}
        * Check your cholesterol level ones a month.{' '}
      </Text>
      <Text style={styles.Text3}> * Pay attention to your meals. </Text>
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
  Cho1: {
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
    marginTop: 60,
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
export default page11;
