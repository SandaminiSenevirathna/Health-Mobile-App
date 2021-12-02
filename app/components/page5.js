import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const page5 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.Text1}> Below 70 </Text>
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
export default page5;
