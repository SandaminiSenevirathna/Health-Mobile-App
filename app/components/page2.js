import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const page2 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.bodyText}> Welcome to page2</Text>
      <View style={styles.button}>
        <Button
          title="Go To Home Screen"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Go To previous page"
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Go To first page"
          onPress={() => navigation.popToTop()}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Load this screen again"
          onPress={() => navigation.push('page2')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  bodyText: {
    textAlign: 'center',
    fontSize: 20,
  },
  button: {
    margin: 5,
  },
});
export default page2;
