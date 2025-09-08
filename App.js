import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
export default function App() {
  const [email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputBox}>
        <TextInput 
          style={styles.input} 
          placeholder="Email" 
          placeholderTextColor={"#8be9fd"}
          value={email} 
          onChangeText={setEmail} 
        />
      </View>
      <View style={styles.inputBox}>
        <TextInput 
          style={styles.input} 
          placeholder="Password" 
          placeholderTextColor={"#8be9fd"}
          secureTextEntry
          value={password} 
          onChangeText={setPassword} 
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>

      <Text style={styles.link}>Forgot password?</Text>
      
      <Text style={styles.signup}>
        Don't have an account? <Text style={styles.signupBold}>Sign up</Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f1624',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  inputBox: {
    width: '100%',
    backgroundColor: '#1a2236',
    borderRadius: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    boderWidth: 1,
    borderColor: '#00bfff',
  },
  input: {
    color: '#fff',
    fontSize: 18,
  },
  button: {
    width: '100%',
    backgroundColor: '#00bfff',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText:{
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  link: {
    color: '#8be9fd',
    marginBottom: 30,    
  },
  signup: {
    color: '#fff',
    fontSize: 16,
  },
  signupBold: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 18,
    },
  });
