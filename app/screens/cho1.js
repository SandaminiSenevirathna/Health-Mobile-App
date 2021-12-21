import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

class Chofirst extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.Text3}>
            {' '}
            * You have a normal cholesterol level.{' '}
          </Text>
          <Text style={styles.Text3}> * Eats more healthy foods. </Text>
          <Text style={styles.Text3}> * Lose weight. </Text>
          <Text style={styles.Text3}> * Don't smoke. </Text>
          <Text style={styles.Text3}> * Follow Your Prescription. </Text>
        </ScrollView>
      </View>
    );
  }
}
export default Chofirst;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#FFFFFF',
  },
  Text3: {
    alignItems: 'center',
    fontSize: 20,
    color: '#000000',
    letterSpacing: 0.34,
    lineHeight: 40,
    marginTop: 10,
  },
});
