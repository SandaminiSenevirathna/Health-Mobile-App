import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const page10 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <View style={styles.Cho1}>
        <Image source={require('../assets/images/happy.png')} />
      </View>
      <View />
      <Text style={styles.Text1}> 0 - 200</Text>
      <Text style={styles.Text2}> * You are in a good level. </Text>
      <Text style={styles.Text3}>
        {' '}
        * You have a normal cholesterol level .{' '}
      </Text>
      <Text style={styles.Text4}> * Eats healthy foods. </Text>
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
    marginTop: 75,
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
  Text2: {
    alignItems: 'center',
    fontFamily: 'times new roman- Italic',
    fontSize: 24,
    color: 'black',
    marginTop: 50,
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
  Text4: {
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
export default page10;
