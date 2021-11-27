import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const page2 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.Text1}> What Do You Want </Text>
      <Text style={styles.Text2}> To Know ? </Text>
      <View style={styles.button}>
        <Button
          color="#006400"
          title="Diabetic"
          // onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.button}>
        <Button
          color="#006400"
          title="Cholesterol"
          //onPress={() => navigation.popToTop()}
        />
      </View>
      <View style={styles.button}>
        <Button
          color="#006400"
          title="Presser"
          //onPress={() => navigation.push('page2')}
        />
      </View>
      <View style={styles.button}>
        <Button
          color="#006400"
          title="Common Health Knowledge"
          //onPress={() => navigation.push('page2')}
        />
      </View>
      <View style={styles.button}>
        <Button
          color="#306754"
          title="Back"
          onPress={() => navigation.navigate('Home')}
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
});
export default page2;
