import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

class Diabetesfour extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.Text3}> * You are in a red Zone. </Text>
          <Text style={styles.Text3}> * Please consult your doctor. </Text>
          <Text style={styles.Text4}> Symptoms of Very High Sugar: </Text>

          <Text style={styles.Text3}> * Dry mouth. </Text>

          <Text style={styles.Text3}> * Extreme thirsty. </Text>
          <Text style={styles.Text3}> * Dry skin that don't sweat. </Text>
          <Text style={styles.Text3}> * High fever. </Text>
          <Text style={styles.Text3}> * Sleepiness. </Text>
          <Text style={styles.Text3}> * Vision loss. </Text>
          <Text style={styles.Text4}> How to prevent high sugar: </Text>
          <Text style={styles.Text3}> * Workout regularly. </Text>
          <Text style={styles.Text3}> * Drink Water. </Text>
          <Text style={styles.Text3}> * Reduce your sugar intake. </Text>
          <Text style={styles.Text3}> * Lose extra weight. </Text>
          <Text style={styles.Text3}> * Don't smoke. </Text>
          <Text style={styles.Text4}> Suitable Foods: </Text>
          <Text style={styles.Text3}> * Fruits. </Text>
          <Text style={styles.Text3}> * Nuts. </Text>
          <Text style={styles.Text3}> * Legumes. </Text>
          <Text style={styles.Text3}> * Fatty fish. </Text>
        </ScrollView>
      </View>
    );
  }
}
export default Diabetesfour;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 28,
    backgroundColor: '#FFFFFF',
  },
  Text4: {
    alignItems: 'center',
    fontSize: 26,
    color: '#000000',
    letterSpacing: 0.34,
    lineHeight: 40,
    fontWeight: 'bold',
  },
  Text1: {
    alignItems: 'center',
    fontSize: 20,
    color: '#000000',
    letterSpacing: 0.34,
    lineHeight: 40,
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
