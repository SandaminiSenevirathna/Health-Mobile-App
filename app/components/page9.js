import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

const page9 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.Text1}> Select Your Cholesterol Level </Text>
      <TouchableOpacity style={styles.button}>
        <Button
          color="#006400"
          fontColor="#000000"
          title="0  -  200"
          onPress={() => navigation.navigate('page10')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Button
          color="#006400"
          fontColor="#000000"
          title="200  -  239"
          onPress={() => navigation.navigate('page11')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Button
          color="#006400"
          fontColor="#000000"
          title="Above 240"
          onPress={() => navigation.navigate('page12')}
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
    borderRadius: 70,
    paddingVertical: 50,
    paddingHorizontal: 45,
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
export default page9;
