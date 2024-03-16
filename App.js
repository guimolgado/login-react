import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert  } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';



const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="App" component={App} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default function App() {





        const [nome, setNome] = useState("")
        const [email, setEmail] = useState("")
        const [senha, setSenha] = useState("")
        const [senhaConfrima, setSenhaConfirma] = useState("")

        const cadastro = () => {

          alert('USUARIO LOGADO')

        }





  return (


    <View style={styles.container}>
            <StatusBar hidden />

            <Image style={{width: 200, height:245, marginBottom:30}} source={require('./assets/astronautinha2.png')} />

            <TextInput placeholder='Nome' style={styles.TextInput} onChangeText={text=>setNome(text)}  />
            <TextInput placeholder='E-mail' style={styles.TextInput} onChangeText={text=>setEmail(text)}  />
            <TextInput secureTextEntry={true} placeholder='senha' style={styles.TextInput} onChangeText={text=>setSenha(text)}  />
            <TextInput secureTextEntry={true} placeholder='Confirmar senha' style={styles.TextInput} onChangeText={text=>setSenhaConfirma(text)}  />


            <TouchableOpacity style={styles.btnCadastro} onPress={()=>cadastro()}>
              <Text style={{color:"white", textAlign:'center'}}>
                LOGIN
              </Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.btnLogin}>
              <Text style={{color:"white", textAlign:'center'}}>
                CADASTRAR-SE
              </Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.btnSenha}>
              <Text style={{color:"white", textAlign:'center'}}>
                ESQUECEU SUA SENHA??
              </Text>
           </TouchableOpacity>
  

   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27282D',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 29,
  },
  TextInput:{
    width:"100%",
    height:40,
    backgroundColor: "white",
    borderRadius:20,
    paddingLeft:15,
    marginBottom:10,
  },
  btnCadastro:{
    width:"100%",
    height:40,
    backgroundColor:"#194894",
    borderRadius:20,
    justifyContent:'center',
  },
    btnLogin:{
      width:"100%",
      height:40,
      backgroundColor:"#d746f4",
      borderRadius:20,
      justifyContent:'center',
      marginTop:20  
  },
  btnSenha:{
    width:"100%",
    height:40,
    backgroundColor:"#8552b7",
    borderRadius:20,
    justifyContent:'center',
    marginTop:20  

  }


});