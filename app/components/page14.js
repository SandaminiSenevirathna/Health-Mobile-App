import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const page14 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <View />
      <Text style={styles.Text1}> 90-120 / 60-80</Text>
      <View style={styles.button1}>
        <Button
          fontColor="#000000"
          color="#306754"
          title="Back"
          onPress={() => navigation.navigate('page13')}
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
    fontSize: 36,
    marginTop: -20,
    color: 'black',
    letterSpacing: 0.34,
    lineHeight: 40,
    marginLeft: 250,
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
});
export default page14;
