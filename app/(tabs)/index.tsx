import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';


export default function HomeScreen() {
  const [texto, setTexto] = useState('');
  return (
   <View style={Styles.view}>

    <Text style={Styles.title}>Chapter One11111</Text>
    
    <TextInput
    placeholder='Digite aquiiiiiiiii: '
    value={texto}
    onChangeText={setTexto}
    style={Styles.input}
    />
   <Image source={require('@/assets/images/loba.jpg')} style={Styles.image}/>
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