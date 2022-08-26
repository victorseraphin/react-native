import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native'

export default function SignIn() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation='flipInY'
          source={require('../../assets/logo.png')}          
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Animatable.View animation="fadeInUp" style={ styles.containerForm } >
        <Text style={ styles.title } >Email</Text>
        <TextInput 
          placeholder="Digite um email..."  
          style={styles.input}
        />

        <Text style={ styles.title } >Senha</Text>
        <TextInput 
          placeholder="Digite um email..."  
          style={styles.input}
        />

        <TouchableOpacity style={ styles.button } >
          <Text style={ styles.buttonText } >Acessar </Text>
        </TouchableOpacity>

        <Text style={ styles.politicaText } >Essa página se destina à informação e à gestão do nosso relacionamento com nossos clientes e segue integralmente os termos e condições da nossa </Text>
        <TouchableOpacity style={ styles.politicaButton } >
          <Text style={ styles.politicaButtonText } >política de privacidade. </Text>
        </TouchableOpacity>

      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 3,
    backgroundColor: '#3f51b5'

  },
  containerLogo:{
    flex: 1,
    backgroundColor: '#3f51b5',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  logo:{
    width: '35%',
    height: '55%',
    borderRadius: 30
  },
  textLogo:{
    color: '#FFF',
    marginTop: '5%'
  },
  containerHeader:{
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%'
    
  },
  message:{
    fontSize:28,
    fontWeight: 'bold',
    color: '#FFF'
  },
  containerForm:{
    flex: 2,
    backgroundColor:'#FFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd:'5%'    
  },
  title:{
    fontSize: 20,
    marginTop: 28,
  },
  input:{
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  button:{
    backgroundColor: '#3f51b5',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold'
  },
  politicaText:{
    marginTop: '10%',
    color: '#a1a1a1',
    textAlign:'center',
    fontSize: 14,
    
  },
  politicaButton:{
    
  },
  politicaButtonText:{
    fontSize: 14,
    color: '#002085',
    textAlign:'center',
  },
})
