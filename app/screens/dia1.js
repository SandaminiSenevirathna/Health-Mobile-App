import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

class Diabetesone extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.Text4}> Symptoms of Low Sugar: </Text>
          <Text style={styles.Text3}> * An irregular or fast heartbeat. </Text>

          <Text style={styles.Text3}> * Fatigue. </Text>

          <Text style={styles.Text3}> * Pale skin. </Text>
          <Text style={styles.Text3}> * Shakiness. </Text>
          <Text style={styles.Text3}> * Anxiety. </Text>
          <Text style={styles.Text3}> * Sweating. </Text>
          <Text style={styles.Text3}> * Hunger. </Text>
          <Text style={styles.Text3}> * Irritability. </Text>
          <Text style={styles.Text4}> How to prevent low sugar: </Text>
          <Text style={styles.Text3}>
            {' '}
            * Eat all your meals and snacks on time and try not to skip any.{' '}
          </Text>
          <Text style={styles.Text3}>
            {' '}
            * Take the right amount of insulin.{' '}
          </Text>
          <Text style={styles.Text3}>
            {' '}
            * If you exercise longer or harder than usual, have an extra snack..{' '}
          </Text>
          <Text style={styles.Text3}>
            {' '}
            * Don't take a hot bath or shower right after an insulin shot..{' '}
          </Text>
          <Text style={styles.Text3}>
            {' '}
            * Stick to your diabetes management plan.{' '}
          </Text>
          <Text style={styles.Text4}> Suitable Foods: </Text>
          <Text style={styles.Text3}> * Fruits. </Text>
          <Text style={styles.Text3}> * Sweet potatoes and yams. </Text>
          <Text style={styles.Text3}> * Oatmeal and oat bran.. </Text>
          <Text style={styles.Text3}> * Nuts. </Text>
          <Text style={styles.Text3}> * Legumes. </Text>
          <Text style={styles.Text3}> * Fatty fish. </Text>
        </ScrollView>
      </View>
    );
  }
}
export default Diabetesone;

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
