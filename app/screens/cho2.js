import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

class Cholesteroltwo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.Text3}>
            {' '}
            * You are on border line cholesterol level.{' '}
          </Text>
          <Text style={styles.Text3}>
            {' '}
            * Be causes of your cholesterol level.{' '}
          </Text>
          <Text style={styles.Text3}>
            {' '}
            * Check your cholesterol level ones a month.{' '}
          </Text>
          <Text style={styles.Text3}> * Pay attention to your meals. </Text>
          <Text style={styles.Text4}> Symptoms of high Cholesterol: </Text>
          <Text style={styles.Text3}> * Fatique. </Text>

          <Text style={styles.Text3}> * Blared Vision. </Text>

          <Text style={styles.Text3}> * Numbness. </Text>
          <Text style={styles.Text3}> * Cramping. </Text>
          <Text style={styles.Text4}> How to prevent high sugar: </Text>
          <Text style={styles.Text3}> * Eat healthy food. </Text>
          <Text style={styles.Text3}> * Loose weight. </Text>
          <Text style={styles.Text3}> * Stay Active . </Text>
          <Text style={styles.Text3}> * Exercise regularly. </Text>
          <Text style={styles.Text3}>
            {' '}
            * Stick to your diabetes management plan.{' '}
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
export default Cholesteroltwo;

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
