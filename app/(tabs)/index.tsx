import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';


export default function HomeScreen() {
  const [texto, setTexto] = useState('');
  return (
   <View style={Styles.view}>

   <Text style={Styles.title}>Chapter One</Text>
    
    <TextInput
    placeholder='Digite seu email: '
    value={texto}
    onChangeText={setTexto}
    style={Styles.input}
    />
  </View>

  );
}


const Styles = StyleSheet.create({
  view:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center', 
    marginBottom: 20,
    color: '#333'
  },
  
  input: { 
  width: '100%', 
  borderWidth: 1,
  padding: 10, 
  marginBottom: 20,
 },
 image:{
  width:200,
  height:200,

 },
})
