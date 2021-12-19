import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const page7 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <View style={styles.image7}>
        <Image source={require('../assets/images/high.png')} />
      </View>
      <View />
      <View style={styles.image8}>
        <Image source={require('../assets/images/fiber2.png')} />
      </View>
      <Text style={styles.Text1}> 100 - 200</Text>
      <Text style={styles.Text2}> * You are in a risk level. </Text>
      <Text style={styles.Text3}> * Moniter blood sugar level closely. </Text>
      <Text style={styles.Text4}> * Reduce carbohydrate intake. </Text>
      <Text style={styles.Text5}> * Eat the right carbohydrate. </Text>
      <Text style={styles.Text6}> * Increase dietary fiber intake. </Text>
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
  image7: {
    width: 85,
    height: 45,
    marginTop: 110,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 130,
  },
  image8: {
    width: 85,
    height: 45,
    marginTop: 160,
    alignItems: 'center',
    paddingLeft: 120,
  },
  Text1: {
    alignItems: 'center',
    fontSize: 36,
    color: 'black',
    marginTop: -220,
    marginBottom: 50,
    letterSpacing: 0.34,
    lineHeight: 40,
    paddingLeft: 245,
  },
  Text2: {
    alignItems: 'center',
    fontFamily: 'times new roman- Italic',
    marginTop: 20,
    fontSize: 24,
    color: 'black',
    marginBottom: 5,
    letterSpacing: 0.34,
    lineHeight: 40,
  },
  Text3: {
    alignItems: 'center',
    fontSize: 24,
    color: 'black',
    marginBottom: 5,
    letterSpacing: 0.34,
    lineHeight: 40,
  },
  Text4: {
    alignItems: 'center',
    fontSize: 24,
    color: 'black',
    marginBottom: 5,
    letterSpacing: 0.34,
    lineHeight: 40,
  },
  Text5: {
    alignItems: 'center',
    fontSize: 24,
    color: 'black',
    marginBottom: 5,
    letterSpacing: 0.34,
    lineHeight: 40,
  },
  Text6: {
    alignItems: 'center',
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
export default page7;
