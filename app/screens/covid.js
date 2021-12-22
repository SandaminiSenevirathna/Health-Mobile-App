import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

class Mask extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.Text4}> Most Common Symptoms Of Covid-19: </Text>
          <Text style={styles.Text3}> * Fever. </Text>
          <Text style={styles.Text3}> * Cough. </Text>
          <Text style={styles.Text3}> * Tiredness. </Text>
          <Text style={styles.Text3}> * Loss taste or smell. </Text>
          <Text style={styles.Text4}> Less Common Symptoms of Covid-19: </Text>
          <Text style={styles.Text3}> * Sore throat. </Text>
          <Text style={styles.Text3}> * Headache. </Text>
          <Text style={styles.Text3}> * Aches and pains. </Text>
          <Text style={styles.Text3}> * Diarrhoea. </Text>
          <Text style={styles.Text3}> * Red or irritated eyes. </Text>
          <Text style={styles.Text4}> Serious Symptoms of Covid-19: </Text>
          <Text style={styles.Text3}>
            {' '}
            * Difficulty breathing or shortness of breath.{' '}
          </Text>
          <Text style={styles.Text3}>
            {' '}
            * Loss of speech or mobility , or confusion.{' '}
          </Text>
          <Text style={styles.Text3}> * Chest pain. </Text>
          <Text style={styles.Text4}>
            {' '}
            How to protect yourself from Covid 19:{' '}
          </Text>
          <Text style={styles.Text1}>
            {' '}
            * Maintain a safe distance from others.{' '}
          </Text>
          <Text style={styles.Text2}> (At least 1 metre.) </Text>
          <Text style={styles.Text3}> * Wear a mask in public. </Text>
          <Text style={styles.Text3}> * Clean your hands often. </Text>
          <Text style={styles.Text3}>
            {' '}
            * Get vaccinated when it's your turn{' '}
          </Text>
        </ScrollView>
      </View>
    );
  }
}
export default Mask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 23,
    backgroundColor: '#8de087',
  },
  Text4: {
    alignItems: 'center',
    fontSize: 22,
    color: '#000000',
    letterSpacing: 0.34,
    lineHeight: 40,
    fontWeight: 'bold',
  },
  Text1: {
    alignItems: 'center',
    fontSize: 18,
    color: '#000000',
    letterSpacing: 0.34,
    lineHeight: 40,
  },
  Text2: {
    alignItems: 'center',
    fontSize: 20,
    color: '#000000',
    letterSpacing: 0.34,
    lineHeight: 40,
    marginTop: -2,
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
