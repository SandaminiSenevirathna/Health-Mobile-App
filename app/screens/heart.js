import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

class Heart extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.Text4}> How To Protect Our Heart: </Text>
          <Text style={styles.Text3}> * Eat Healthy. </Text>
          <Text style={styles.Text3}> * Get Active. </Text>
          <Text style={styles.Text3}> * Stay at a healthy weight. </Text>
          <Text style={styles.Text3}> * Quit smocking. </Text>
          <Text style={styles.Text3}>
            {' '}
            * Control your cholesterol and blood pressure.{' '}
          </Text>
          <Text style={styles.Text3}> * Manage Stress. </Text>
          <Text style={styles.Text4}> Heart Symptoms: </Text>
          <Text style={styles.Text3}> * Chest Discomfort. </Text>
          <Text style={styles.Text3}>
            {' '}
            * Nausea, Indigestion, Heartburn, or stomach pain.{' '}
          </Text>

          <Text style={styles.Text3}> * Pain that spreads to the arm. </Text>
          <Text style={styles.Text3}> * Throat or jaw pain. </Text>
          <Text style={styles.Text3}> * Snoring. </Text>
          <Text style={styles.Text3}> * Sweating. </Text>
          <Text style={styles.Text3}> * Irregular Heart Beat. </Text>
          <Text style={styles.Text3}> * You get exhausted easily. </Text>
        </ScrollView>
      </View>
    );
  }
}
export default Heart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 23,
    backgroundColor: '#8de087',
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
