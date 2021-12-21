import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

class Diabetestwo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.Text3}>
            * You have a normal blood sugar level.{' '}
          </Text>

          <Text style={styles.Text3}>
            {' '}
            * Track your food , drink and physical activity.{' '}
          </Text>

          <Text style={styles.Text3}>
            {' '}
            * So you can continue enjoy your healthy life.{' '}
          </Text>
        </ScrollView>
      </View>
    );
  }
}
export default Diabetestwo;

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
    marginTop: 10,
  },
});
