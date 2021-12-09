import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const page9 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.Text1}> Select Your Cholesterol Level </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  Text1: {
    alignItems: 'center',
    fontSize: 34,
    color: 'black',
    marginBottom: 1,
    letterSpacing: 0.34,
    lineHeight: 40,
    paddingLeft: 50,
  },
});
export default page9;
