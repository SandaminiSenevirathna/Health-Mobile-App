import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const page4 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.Text1}> Select Your Diabetic Level </Text>
      <View style={styles.shape_container1}>
        <View style={styles.rectangle} />
      </View>
      <View style={styles.shape_container2}>
        <View style={styles.circle} />
      </View>
      <View style={styles.shape_container2}>
        <View style={styles.circle1} />
      </View>
      <View style={styles.shape_container2}>
        <View style={styles.circle2} />
      </View>
      <View style={styles.shape_container3}>
        <View style={styles.circle3} />
      </View>
      <View style={styles.shape_container3}>
        <View style={styles.circle4} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  Text1: {
    alignItems: 'center',
    fontSize: 28,
    color: 'black',
    marginBottom: 50,
    letterSpacing: 0.34,
    lineHeight: 40,
    paddingLeft: 45,
  },
  shape_container1: {
    height: 150,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  rectangle: {
    width: 120 * 2,
    height: 1300,
    backgroundColor: '#6CC417',
    opacity: 0.3,
  },
  shape_container2: {
    height: 150,
    alignItems: 'flex-start',
  },
  circle: {
    marginTop: -135,
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    borderColor: '#438D80',
    borderWidth: 5,
    backgroundColor: '#4E8975',
    opacity: 0.3,
  },
  circle1: {
    marginTop: -100,
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    borderColor: '#438D80',
    borderWidth: 5,
    backgroundColor: '#4E8975',
    opacity: 0.3,
  },
  circle2: {
    marginTop: 90,
    width: 160,
    height: 160,
    borderRadius: 160 / 2,
    borderColor: '#438D80',
    borderWidth: 5,
    backgroundColor: '#4E8975',
    opacity: 0.3,
  },
  shape_container3: {
    height: 150,
    alignItems: 'flex-end',
  },
  circle3: {
    marginTop: -600,
    width: 220,
    height: 220,
    borderRadius: 220 / 2,
    borderColor: '#438D80',
    borderWidth: 5,
    backgroundColor: '#4E8975',
    opacity: 0.3,
  },
  circle4: {
    marginTop: -300,
    width: 160,
    height: 160,
    borderRadius: 160 / 2,
    borderColor: '#438D80',
    borderWidth: 5,
    backgroundColor: '#4E8975',
    opacity: 0.3,
  },
});
export default page4;
