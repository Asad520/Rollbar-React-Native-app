import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Client} from 'rollbar-react-native';

const App = () => {
  const [errorText, setErrorText] = useState('New error text!');
  useEffect(() => {}, []);
  const rollbar = new Client('3b5c885db8a348a481bb4527f1eab1f8');

  const throwError = () => {
    rollbar.log(errorText);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Rollbar Example</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter error text..."
        onChangeText={text => setErrorText(text)}
      />
      <TouchableOpacity style={styles.button} onPress={() => throwError()}>
        <Text style={styles.btnText}>Throw Error!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: 'black', flex: 1},
  heading: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 40,
  },
  input: {
    backgroundColor: 'grey',
    marginTop: 20,
    height: 60,
    padding: 15,
    borderRadius: 20,
    fontSize: 20,
    color: 'white',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DEE8DE',
    width: 110,
    marginTop: 20,
    alignSelf: 'center',
    height: 40,
    borderRadius: 30,
  },
  btnText: {
    fontWeight: 'bold',
  },
});

export default App;
