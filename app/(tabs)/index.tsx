import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    
    <ImageBackground 
      source={require('@/assets/images/Login(manga).png')} 
      style={Styles.background}
    >
      <Text style={Styles.title}>Chapter One</Text>

      <TextInput 
        placeholder='Digite seu email: ' 
        value={email} 
        onChangeText={setEmail} 
        style={Styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#666"
      />

      <TextInput 
        placeholder='Digite sua senha: ' 
        value={senha} 
        onChangeText={setSenha} 
        style={Styles.input}
        secureTextEntry={true}
        placeholderTextColor="#666"
      />

      <TouchableOpacity 
        onPress={() => alert(`Login com: ${email}`)} 
        style={Styles.button}
      >
        <Text style={Styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const Styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff', 
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    borderRadius: 5,
    padding: 12,
    marginBottom: 20,
  },
  button: {
    width: '80%',
    backgroundColor: '#b0b7bd',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  }
});
