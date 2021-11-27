import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import page2 from './components/page2';

const Home = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.Text}> My Health </Text>
      <View style={styles.image1}>
        <Image source={require('./assets/images/doctor3.png')} />
      </View>
      <View style={styles.image2}>
        <Image source={require('./assets/images/femalenurse2.png')} />
      </View>

      <View style={styles.flag}>
        <View style={styles.flagTop} />
      </View>
      <View style={styles.button1}>
        <Button
          color="#006400"
          size={16}
          title="Go To Page 02"
          onPress={() => navigation.navigate('page2')}
          type="outline"
        />
      </View>
    </View>
  );
};
const Stack = createStackNavigator();
class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#306754',
            },
            headerTitleStyle: {
              color: '#ffffff',
              fontWeight: 'bold',
              fontSize: 18,
            },
            headerTintColor: '#ffffff',
          }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'WELCOME'}}
          />
          <Stack.Screen name="page2" component={page2} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'white',
  },
  Text: {
    alignItems: 'center',
    fontSize: 38,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 1,
    letterSpacing: 0.34,
    lineHeight: 40,
    paddingLeft: 120,
  },
  image1: {
    width: 102,
    height: 45,
    marginTop: 210,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 120,
  },
  image2: {
    width: 400,
    height: 45,
    marginTop: -200,
    alignItems: 'flex-end',
  },
  button1: {
    marginTop: -115,
    marginLeft: 130,
    marginRight: 40,
    width: 125,
    height: 40,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  flag: {
    marginTop: 364,
    alignItems: 'center',
  },
  flagTop: {
    width: 450,
    height: 235,
    backgroundColor: '#6CC417',
  },
});

export default App;
