import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const page3 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.Text1}> Select Your Age Group </Text>
      <View style={styles.button}>
        <Button
          color="#006400"
          title="0  -  18"
          onPress={() => navigation.navigate('page2')}
        />
      </View>
      <View style={styles.button}>
        <Button
          color="#006400"
          title="18  -  30"
          onPress={() => navigation.navigate('page2')}
        />
      </View>
      <View style={styles.button}>
        <Button
          color="#006400"
          title="30  -  50"
          onPress={() => navigation.navigate('page2')}
        />
      </View>
      <View style={styles.button}>
        <Button
          color="#006400"
          title="50  -  70"
          onPress={() => navigation.navigate('page2')}
        />
      </View>
      <View style={styles.button}>
        <Button
          color="#006400"
          title="70  -  Above"
          onPress={() => navigation.navigate('page2')}
        />
      </View>
      <View style={styles.button1}>
        <Button
          fontColor="#000000"
          color="#306754"
          title="Back"
          onPress={() => navigation.navigate('page2')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#99C68E',
    justifyContent: 'center',
  },
  Text1: {
    alignItems: 'center',
    fontSize: 34,
    color: 'black',
    marginTop: -130,
    marginBottom: 50,
    letterSpacing: 0.34,
    lineHeight: 40,
    paddingLeft: 25,
  },
  button: {
    fontWeight: 'bold',
    fontColor: '#000000',
    margin: 20,
    fontSize: 15,
    elevation: 8,
    backgroundColor: '#254117',
    borderRadius: 20,
    marginLeft: 75,
    width: 275,
  },
  button1: {
    fontWeight: 'bold',
    fontColor: '#000000',
    margin: 15,
    marginTop: 60,
    fontSize: 20,
    elevation: 8,
    backgroundColor: '#033E3E',
    borderRadius: 10,
    marginLeft: 100,
    width: 225,
  },
});
export default page3;
