import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Image,
} from 'react-native';

export default function app (){
    return (
      <View style={{flex:1, padding:20}}>
        <View style={{flex:1.8, alignItems:"center", justifyContent: 'center'}}>
          <Image style={{flex:1, width:170}} 
          source={require("./assets/logo.png")} resizeMode= "contain"
          />
        </View>
        <View style={{flex:1, flexDirection:"row"}}>
          <View style={{flex:1 , justifyContent:"center"}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', textAlign:"center",marginTop:10,fontWeight:"bold",padding:5}}>Python</Text>
          </View>
          <View style={{flex:1, justifyContent: 'center'}}>
            <Button title="Seguir" onPress={() => Alert.alert("Thanks bro")}/>
          </View>
        </View>
        <View style={{flex:1.5}}>
          <Text style={{fontSize: 15, fontWeight: 'bold',fontWeight:"bold",padding:5,textAlign:"center"}}>Python é uma linguagem de programação de alto nível,[4] interpretada, de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte.-Wiki</Text>
        </View>
      </View>
    );
    
}

