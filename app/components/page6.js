import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import Diabetestwo from '../screens/dia2.js';

const page6 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <View style={styles.image5}>
        <Image source={require('../assets/images/happy.png')} />
      </View>
      <View />
      <View style={styles.image6}>
        <Image source={require('../assets/images/health1.png')} />
      </View>
      <Text style={styles.Text1}> 70 - 100 </Text>
      <Diabetestwo />
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
  image5: {
    width: 85,
    height: 45,
    marginTop: 95,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 120,
  },
  image6: {
    width: 85,
    height: 45,
    marginTop: 160,
    alignItems: 'center',
    paddingLeft: 120,
  },
  Text1: {
    alignItems: 'center',
    fontSize: 36,
    color: '#000000',
    marginTop: -220,
    marginBottom: 50,
    letterSpacing: 0.34,
    lineHeight: 40,
    paddingLeft: 225,
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
export default page6;
