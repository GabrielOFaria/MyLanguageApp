import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App() {
  const [email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false); 

  return (
    <KeyboardAvoidingView
  style={{ flex: 1 }}
  behavior={Platform.OS === "ios" ? "padding" : "height"}
>
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
  <ScrollView
    contentContainerStyle={{ flexGrow: 1 }}
    keyboardShouldPersistTaps="handled"
  >

      <View style={styles.container}>
      <View style={styles.inputBox}>
        <Icon name="email-outline" size={24} color="#00bfff" style={{ marginRight: 10 }} />
        <TextInput 
          style={styles.input} 
          placeholder="Email" 
          placeholderTextColor={"#8be9fd"}
          value={email} 
          onChangeText={setEmail} 
        />
      </View>    
      <View style={styles.inputBox}>
  <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
    <Icon
      name="lock-outline"
      size={24}
      color="#00bfff"
      style={{ marginRight: 10 }}
    />
    <TextInput
      style={[styles.input, { flex: 1 }]}
      placeholder="Password"
      placeholderTextColor="#8be9fd"
      secureTextEntry={!passwordVisible}
      value={password}
      onChangeText={setPassword}
    />
  </View>

  {/* Eye */}
  <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
    <Icon
      name={passwordVisible ? 'eye-off-outline' : 'eye-outline'}
      size={24}
      color="#00bfff"
    />
  </TouchableOpacity>
</View>

      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>

      <Text style={styles.link}>Forgot password?</Text>
      
      <Text style={styles.signup}>
        Don't have an account? <Text style={styles.signupBold}>Sign up</Text>
      </Text>
    </View>
  </ScrollView>
  </TouchableWithoutFeedback>
</KeyboardAvoidingView>
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
    borderWidth: 2,
    borderColor: '#00bfff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    shadowColor: '#00bfff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 25,
    
  },
  input: {
    flex: 1,
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
    shadowColor: '#00bfff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 25,
    
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
