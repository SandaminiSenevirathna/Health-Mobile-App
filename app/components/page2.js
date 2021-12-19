import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

const page2 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.Text1}> What Do You Want </Text>
      <Text style={styles.Text2}> To Know ? </Text>
      <TouchableOpacity style={styles.button}>
        <Button
          color="#006400"
          title="Diabetic"
          onPress={() => navigation.navigate('page4')}
        />
      </TouchableOpacity>
      <View style={styles.button}>
        <Button
          color="#006400"
          title="Cholesterol"
          onPress={() => navigation.navigate('page9')}
        />
      </View>
      <View style={styles.button}>
        <Button
          color="#006400"
          title="Presser"
          onPress={() => navigation.navigate('page13')}
        />
      </View>
      <View style={styles.button}>
        <Button
          color="#006400"
          title="Common Health Knowledge"
          onPress={() => navigation.navigate('page18')}
        />
      </View>
      <View style={styles.button}>
        <Button
          color="#306754"
          title="Back"
          onPress={() => navigation.navigate('page3')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#6CBB3C',
    justifyContent: 'center',
  },
  Text1: {
    alignItems: 'center',
    fontSize: 38,
    color: 'black',
    marginBottom: 1,
    letterSpacing: 0.34,
    lineHeight: 40,
    paddingLeft: 50,
  },
  Text2: {
    alignItems: 'center',
    fontSize: 38,
    color: 'black',
    marginBottom: 1,
    letterSpacing: 0.34,
    lineHeight: 40,
    paddingLeft: 110,
  },
  button: {
    fontWeight: 'bold',
    Color: '#000000',
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
});
export default page2;
