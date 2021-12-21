import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

class Pretwo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.Text3}>
            {' '}
            * You have a normal blood presser level.{' '}
          </Text>
          <Text style={styles.Text3}> * Continue Your Health Plan. </Text>
          <Text style={styles.Text3}> * Continue Your exercise plan. </Text>
          <Text style={styles.Text3}> * Lose excess weight. </Text>

          <Text style={styles.Text3}>
            {' '}
            * Put the brakes on smoking and drinking.{' '}
          </Text>
        </ScrollView>
      </View>
    );
  }
}
export default Pretwo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 28,
    backgroundColor: '#FFFFFF',
  },
  Text3: {
    alignItems: 'center',
    fontSize: 20,
    color: '#000000',
    letterSpacing: 0.34,
    lineHeight: 40,
  },
});
