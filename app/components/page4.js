import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

const page4 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.Text1}> Select Your Diabetic Level </Text>
      <TouchableOpacity style={styles.button}>
        <Button
          color="#006400"
          title="Below 70"
          onPress={() => navigation.navigate('page5')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Button
          color="#006400"
          title="70  -  100"
          onPress={() => navigation.navigate('page6')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Button
          color="#006400"
          title="100  -  200"
          onPress={() => navigation.navigate('page7')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Button
          color="#006400"
          title="200 - Above"
          onPress={() => navigation.navigate('page8')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1}>
        <Button
          color="#306754"
          title="Back"
          onPress={() => navigation.navigate('page2')}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  Text1: {
    alignItems: 'center',
    fontSize: 34,
    color: '#000000',
    marginBottom: 1,
    letterSpacing: 0.34,
    lineHeight: 40,
    paddingLeft: 50,
  },
  button: {
    fontWeight: 'bold',
    fontColor: '#000000',
    margin: 25,
    fontSize: 20,
    elevation: 8,
    backgroundColor: '#006400',
    borderRadius: 18,
    paddingVertical: 20,
    paddingHorizontal: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  button1: {
    alignItems: 'flex-start',
    fontWeight: 'bold',
    fontColor: '#000000',
    margin: 20,
    marginTop: 10,
    fontSize: 20,
    elevation: 8,
    backgroundColor: '#033E3E',
    borderRadius: 10,
    width: 90,
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginLeft: -5,
  },
});
export default page4;
