import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

class Inputs extends Component {
  state = {
    mygroup: '',
  };
  handleEmail = text => {
    this.setState({mygroup: text});
  };
  login = mygroup => {
    alert('Gives and Receivers: ' + mygroup);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Text1}> Enter Your Blood Group </Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Group"
          placeholderTextColor="#2D922A"
          autoCapitalize="none"
          onChangeText={this.handleEmail}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.login(this.state.mygroup)}>
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Inputs;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  Text1: {
    alignItems: 'center',
    fontSize: 26,
    color: '#000000',
    letterSpacing: 0.34,
    lineHeight: 40,
    fontWeight: 'bold',
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#133E12',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#133E12',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: '#FFFFFF',
  },
});
