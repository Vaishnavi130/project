import React from "react";
import { StyleSheet,Text,View,TextInput,Button,TouchableOpacity,Image } from "react-native";
import { globalStyles } from "../styles/global";

export default function Login({navigation}) {
  
 const pressHandler = () =>{
   navigation.navigate('Home');
 }
  return (
   
    <View style={globalStyles.container}>
    
    
  <Image source={require('../src/images/bg.jpg')} style={globalStyles.container}  />
    <Image source={require('../src/images/track.jpg')} 
    style={{height:60,width:190,marginTop:50}}/>
    
    <View style={globalStyles.Box}>  
        <Text style={globalStyles.titleText}>Login</Text>
           
          <Text style={globalStyles.txt}>Email</Text>
          <TextInput style={globalStyles.Input} placeholder='Username' />
           <Text style={globalStyles.txt}>Password</Text>
          <TextInput style={globalStyles.Input}placeholder='Password'/>
          <Text style={globalStyles.txtn}>Forgot Password</Text>

            <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
              
    <Image source={require('../src/images/login.jpg')} 
    style={{height:30,width:30,padding:30,borderRadius:30}}/>
    
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('Register')}>
              <Text style={globalStyles.title}>Create an account ?</Text>
            </TouchableOpacity>
          
             </View>
           
             
      </View>

    );
    }
