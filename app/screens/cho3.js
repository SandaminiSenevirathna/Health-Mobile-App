import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

class Cholesterolthree extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.Text3}> * Your cholesterol level is high. </Text>
          <Text style={styles.Text3}> * Consult your doctor.. </Text>
          <Text style={styles.Text3}>
            {' '}
            * Check your cholesterol level ones a month.{' '}
          </Text>
          <Text style={styles.Text3}> * Pay attention to your meals. </Text>
          <Text style={styles.Text4}> Symptoms of Very high Cholesterol: </Text>
          <Text style={styles.Text3}> * Stroke. </Text>

          <Text style={styles.Text3}> * Heart Attack. </Text>

          <Text style={styles.Text3}> * Pain in chest. </Text>
          <Text style={styles.Text3}> * Difficulty breathing. </Text>
          <Text style={styles.Text4}> How to prevent high Cholesterol: </Text>
          <Text style={styles.Text3}> * Eat healthy food. </Text>
          <Text style={styles.Text3}> * Loose weight. </Text>
          <Text style={styles.Text3}> * Stay Active . </Text>
          <Text style={styles.Text3}> * Exercise regularly. </Text>
          <Text style={styles.Text3}>
            {' '}
            * Your body needs exercises at least one hour per day.{' '}
          </Text>
          <Text style={styles.Text4}> Suitable Foods: </Text>
          <Text style={styles.Text3}> * Garlic. </Text>
          <Text style={styles.Text3}> * Oats, Barly. </Text>
          <Text style={styles.Text3}> * Lemmon, Carrot, Pumpkin </Text>
          <Text style={styles.Text3}> * Olives </Text>
          <Text style={styles.Text3}> * Red Rice </Text>
        </ScrollView>
      </View>
    );
  }
}
export default Cholesterolthree;

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
  Text3: {
    alignItems: 'center',
    fontSize: 20,
    color: '#000000',
    letterSpacing: 0.34,
    lineHeight: 40,
    marginTop: 10,
  },
});
