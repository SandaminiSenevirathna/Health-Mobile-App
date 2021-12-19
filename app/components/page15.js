import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const page15 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <View />
      <View style={styles.pre2}>
        <Image source={require('../assets/images/happy.png')} />
      </View>
      <Text style={styles.Text1}> 120 / 80</Text>
      <Text style={styles.Text4}>
        {' '}
        * You have a normal blood presser level.{' '}
      </Text>
      <Text style={styles.Text3}> * Continue Your Health Plan. </Text>
      <Text style={styles.Text3}> * Continue Your exercise plan. </Text>
      <Text style={styles.Text3}> * Lose excess weight. </Text>
      <Text style={styles.Text3}>
        {' '}
        * Put the brakes on smoking and drinking.{' '}
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
  pre2: {
    width: 85,
    height: 45,
    marginTop: 80,
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
  Text4: {
    alignItems: 'center',
    fontFamily: 'times new roman- Italic',
    fontSize: 24,
    color: 'black',
    marginBottom: 5,
    letterSpacing: 0.34,
    lineHeight: 40,
    marginLeft: 10,
    marginTop: 50,
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
export default page15;
