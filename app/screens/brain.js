import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

class Brain extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.Text4}> How To Protect Our Brain: </Text>
          <Text style={styles.Text3}> * Get regular exercise. </Text>
          <Text style={styles.Text3}>
            {' '}
            * Control your risk for heart problems.{' '}
          </Text>
          <Text style={styles.Text3}> * Manage your blood sugar level. </Text>
          <Text style={styles.Text3}>
            {' '}
            * Reduce or stop using certain medications.{' '}
          </Text>
          <Text style={styles.Text3}>
            {' '}
            * Protect against hearing loss and social isolation.{' '}
          </Text>
          <Text style={styles.Text3}> * Manage Stress. </Text>
          <Text style={styles.Text3}> * Prioritise sleep. </Text>
          <Text style={styles.Text3}> * Embrace kindness. </Text>
          <Text style={styles.Text3}> * Become a culture vulture. </Text>
          <Text style={styles.Text3}> * Get moving. </Text>
          <Text style={styles.Text3}> * Lose yourself in a book. </Text>
          <Text style={styles.Text3}> * Develop a positive attitude. </Text>
          <Text style={styles.Text3}> * Be balanced with booze. </Text>
          <Text style={styles.Text3}> * Treat your brain to variety. </Text>
          <Text style={styles.Text3}> * Get an animal in your life. </Text>
          <Text style={styles.Text3}> * Value rituals. </Text>
          <Text style={styles.Text3}> * Learn a language. </Text>
        </ScrollView>
      </View>
    );
  }
}
export default Brain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 23,
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
