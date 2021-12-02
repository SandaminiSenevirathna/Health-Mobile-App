/*
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const page4 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.Text1}> Select Your Diabetic Level </Text>
      <View style={styles.button}>
        <Button
          color="#006400"
          title="Below 70"
          onPress={() => navigation.navigate('page5')}
        />
      </View>
      <View style={styles.button}>
        <Button
          color="#006400"
          title="70  -  100"
          //onPress={() => navigation.navigate('page2')}
        />
      </View>
      <View style={styles.button}>
        <Button
          color="#006400"
          title="100  -  200"
          //onPress={() => navigation.navigate('page2')}
        />
      </View>
      <View style={styles.button}>
        <Button
          color="#006400"
          title="200  -   Above"
          //onPress={() => navigation.navigate('page2')}
        />
      </View>
      <View style={styles.button1}>
        <Button
          fontColor="#000000"
          color="#306754"
          title="Back"
          onPress={() => navigation.navigate('page2')}
        />
      </View>
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
  button: {
    fontWeight: 'bold',
    fontColor: '#000000',
    margin: 30,
    fontSize: 15,
    elevation: 8,
    backgroundColor: '#254117',
    borderRadius: 20,
    marginLeft: 75,
    width: 275,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  button1: {
    alignItems: 'flex-start',
    fontWeight: 'bold',
    fontColor: '#000000',
    margin: 20,
    marginTop: 10,
    fontSize: 20,
    elevation: 8,
    backgroundColor: '#033E3E',
    borderRadius: 10,
    width: 90,
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginLeft: -5,
  },
  shape_container1: {
    height: 150,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  rectangle: {
    width: 120 * 2,
    height: 1800,
    backgroundColor: '#6CC417',
    opacity: 0.3,
  },
  shape_container2: {
    height: 150,
    alignItems: 'flex-start',
  },
  circle: {
    marginTop: -800,
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    backgroundColor: '#4E8975',
    opacity: 0.3,
  },
  circle1: {
    marginTop: -500,
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    backgroundColor: '#4E8975',
    opacity: 0.3,
  },
  circle2: {
    marginTop: -300,
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    borderColor: '#438D80',
    backgroundColor: '#4E8975',
    opacity: 0.3,
  },
  shape_container3: {
    height: 150,
    alignItems: 'flex-end',
  },
  circle3: {
    marginTop: -1200,
    width: 220,
    height: 220,
    borderRadius: 220 / 2,
    backgroundColor: '#4E8975',
    opacity: 0.3,
  },
  circle4: {
    marginTop: -800,
    width: 160,
    height: 160,
    borderRadius: 160 / 2,
    backgroundColor: '#4E8975',
    opacity: 0.3,
  },
});
export default page4;
*/
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const page4 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.Text1}> Select Your Diabetic Level </Text>
      <View style={styles.button}>
        <Button
          color="#006400"
          title="Below 70"
          onPress={() => navigation.navigate('page5')}
        />
      </View>
      <View style={styles.button}>
        <Button
          color="#006400"
          title="70  -  100"
          //onPress={() => navigation.navigate('page3')}
        />
      </View>
      <View style={styles.button}>
        <Button
          color="#006400"
          title="100  -  200"
          //onPress={() => navigation.navigate('page3')}
        />
      </View>
      <View style={styles.button}>
        <Button
          color="#006400"
          title="200 - Above"
          //onPress={() => navigation.push('page2')}
        />
      </View>
      <View style={styles.button1}>
        <Button
          color="#306754"
          title="Back"
          onPress={() => navigation.navigate('page2')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  Text1: {
    alignItems: 'center',
    fontSize: 34,
    color: 'black',
    marginBottom: 1,
    letterSpacing: 0.34,
    lineHeight: 40,
    paddingLeft: 50,
  },
  button: {
    fontWeight: 'bold',
    fontColor: '#000000',
    margin: 25,
    fontSize: 20,
    elevation: 8,
    backgroundColor: '#006400',
    borderRadius: 18,
    paddingVertical: 20,
    paddingHorizontal: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  button1: {
    alignItems: 'flex-start',
    fontWeight: 'bold',
    fontColor: '#000000',
    margin: 20,
    marginTop: 10,
    fontSize: 20,
    elevation: 8,
    backgroundColor: '#033E3E',
    borderRadius: 10,
    width: 90,
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginLeft: -5,
  },
});
export default page4;
