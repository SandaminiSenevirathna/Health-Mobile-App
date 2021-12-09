import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const page9 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.Text1}> Select Your Cholesterol Level </Text>
      <View style={styles.button}>
        <Button
          color="#006400"
          fontColor="#000000"
          title="0  -  200"
          //onPress={() => navigation.navigate('page5')}
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
});
export default page9;
