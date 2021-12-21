import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

class Prethree extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.Text3}> * You are in a risk level. </Text>
          <Text style={styles.Text3}>
            {' '}
            * Lose extra pounds and watch your waistline{' '}
          </Text>
          <Text style={styles.Text4}> Symptoms of Very High Sugar: </Text>

          <Text style={styles.Text3}> * Fatigue. </Text>

          <Text style={styles.Text3}> * headache. </Text>
          <Text style={styles.Text3}> * Vision Problems. </Text>
          <Text style={styles.Text3}> * Difficulty to breath. </Text>
          <Text style={styles.Text4}>
            {' '}
            How to prevent high blood pressure:{' '}
          </Text>
          <Text style={styles.Text3}> * Manage stress. </Text>
          <Text style={styles.Text3}> * Keep healthy weight. </Text>
          <Text style={styles.Text3}> * Limit the sodium. </Text>
          <Text style={styles.Text3}> * Limit alcohol. </Text>
          <Text style={styles.Text3}>
            {' '}
            * Do exercises about 30 minutes per day.{' '}
          </Text>
          <Text style={styles.Text4}> Suitable Foods: </Text>
          <Text style={styles.Text3}> * Skinless chicken. </Text>
          <Text style={styles.Text3}> * Fruits without added salt. </Text>
          <Text style={styles.Text3}> * Low fat and salt cheeses. </Text>
        </ScrollView>
      </View>
    );
  }
}
export default Prethree;

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
