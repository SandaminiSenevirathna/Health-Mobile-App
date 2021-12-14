import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const page14 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <View />
      <View style={styles.pre1}>
        <Image source={require('../assets/images/scare.png')} />
      </View>
      <Text style={styles.Text1}> 90-120 / 60-80 </Text>
      <Text style={styles.Text2}> * Use more salt </Text>
      <Text style={styles.Text3}>
        {' '}
        Experts usually recommend limiting salt in your diet.Because sodium can
        raise blood pressure.{' '}
      </Text>
      <Text style={styles.Text4}> * Drink more water. </Text>
      <Text style={styles.Text3}>
        {' '}
        Fluids increase blood volume and help prevent dehydration, both of which
        are important in treating hypotension.{' '}
      </Text>
      <Text style={styles.Text4}> * Wear compression stockings. </Text>
      <View style={styles.button1}>
        <Button
          fontColor="#000000"
          color="#306754"
          title="Back"
          onPress={() => navigation.navigate('page13')}
        />
      </View>
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
  Cho3: {
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
    marginTop: -140,
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
    marginTop: 45,
    marginBottom: 5,
    letterSpacing: 0.34,
    lineHeight: 40,
  },
  Text3: {
    alignItems: 'center',
    fontFamily: 'times new roman- Italic',
    fontSize: 20,
    color: 'black',
    marginBottom: 5,
    letterSpacing: 0.34,
    lineHeight: 40,
    marginLeft: 10,
  },
  Text4: {
    alignItems: 'center',
    fontFamily: 'times new roman- Italic',
    fontSize: 24,
    color: 'black',
    marginTop: 20,
    marginBottom: 5,
    letterSpacing: 0.34,
    lineHeight: 40,
  },
  button1: {
    fontWeight: 'bold',
    fontColor: '#000000',
    margin: 15,
    marginTop: 10,
    fontSize: 20,
    marginLeft: -1,
    elevation: 8,
    backgroundColor: '#033E3E',
    borderRadius: 20,
    width: 190,
    paddingVertical: 20,
    paddingHorizontal: 15,
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
export default page14;
