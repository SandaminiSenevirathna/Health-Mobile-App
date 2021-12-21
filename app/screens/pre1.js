import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

class Preone extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.Text3}> * You have a low blood pressure. </Text>
          <Text style={styles.Text3}> * Consult your doctor. </Text>
          <Text style={styles.Text4}> Symptoms of Low Blood Pressure: </Text>
          <Text style={styles.Text3}> * Blared Vision. </Text>

          <Text style={styles.Text3}> * Dehydration. </Text>

          <Text style={styles.Text3}> * Fainting. </Text>
          <Text style={styles.Text3}> * Dizziness. </Text>
          <Text style={styles.Text3}> * Lack of concentration. </Text>
          <Text style={styles.Text4}> How to prevent Low Blood Pressure: </Text>
          <Text style={styles.Text3}> * Use more salt. </Text>
          <Text style={styles.Text3}> * Drink more water. </Text>
          <Text style={styles.Text3}> * Wear compression stockings. </Text>
          <Text style={styles.Text3}> * Medications. </Text>
          <Text style={styles.Text4}> Suitable Foods: </Text>
          <Text style={styles.Text3}> * Skinless Chicken. </Text>
          <Text style={styles.Text3}> * Green Vegetables. </Text>
          <Text style={styles.Text3}> * Meat, Eggs </Text>
          <Text style={styles.Text3}> * Nuts </Text>
          <Text style={styles.Text3}> * Sea food, Grains </Text>
        </ScrollView>
      </View>
    );
  }
}
export default Preone;

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
  },
});
