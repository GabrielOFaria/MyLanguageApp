import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
export default function App() {
  const [email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  return (
    <View style={StyleSheet.container}>
      <Text style={StyleSheet.title}>Login</Text>

      <View style={StyleSheet.inputBox}>
        <TextInput 
          style={StyleSheet.input} 
          placeholder="Email" 
          placeholderTextColor={"#8be9fd"}
          value={email} 
          onChangeText={setEmail} 
        />
      </View>
      <View style={StyleSheet.inputBox}>
        <TextInput 
          style={StyleSheet.input} 
          placeholder="Passwrd" 
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