import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  function callFunctionJs() {
    console.log('Dang nhap thanh cong');
  }

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput placeholder='User name' style={styles.txtip}></TextInput>
      <TextInput placeholder='Password'style={styles.txtip} ></TextInput>
      <Button title='Login' onPress={callFunctionJs}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtip: {
    borderColor: '#ffffff',
    borderWidth: 3
  }
});
