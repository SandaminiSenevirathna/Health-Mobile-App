import React from 'react';
import {View, StyleSheet, Button, Image, TouchableOpacity} from 'react-native';

const page18 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <View style={styles.image3}>
        <Image source={require('../assets/images/women3.jpg')} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Button
          color="#006400"
          title="COVID - 19"
          onPress={() => navigation.navigate('page19')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1}>
        <Button
          color="#006400"
          title="HEART"
          onPress={() => navigation.navigate('page20')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}>
        <Button
          color="#006400"
          title="BRAIN"
          onPress={() => navigation.navigate('page21')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button3}>
        <Button
          color="#006400"
          title="BLOOD"
          onPress={() => navigation.navigate('page22')}
        />
      </TouchableOpacity>
      <View />
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  image3: {
    marginTop: 180,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 185,
  },
  button: {
    marginTop: -650,
    marginLeft: 60,
    width: 95,
    height: 50,
    alignItems: 'flex-start',
  },
  button1: {
    marginTop: 100,
    marginLeft: 60,
    width: 95,
    height: 50,
    alignItems: 'flex-start',
  },
  button2: {
    marginTop: 75,
    marginLeft: 60,
    width: 95,
    height: 50,
    alignItems: 'flex-start',
  },
  button3: {
    marginTop: 80,
    marginLeft: 60,
    width: 95,
    height: 50,
    alignItems: 'flex-start',
  },
});
export default page18;
