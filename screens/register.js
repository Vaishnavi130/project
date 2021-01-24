import React from "react";
import { Button, Text,View,TextInput, ScrollView, Alert, TouchableOpacity,Image } from "react-native";
import { globalStyles } from "../styles/global";
export default  function Register({navigation})  {
  const pressHandler = () =>{
   }
return(
      <View style={globalStyles.container}>
      
  <Image source={require('../src/images/bg.jpg')} style={globalStyles.container} />
  
        <View style={globalStyles.Box}>  
        <Text style={globalStyles.titleText}>Registration</Text>
        
        <Text style={globalStyles.txt}>Name</Text>
        <TextInput style={globalStyles.Input}
         placeholder='Name'  />
         <Text style={globalStyles.txt}>Surname</Text>
           <TextInput style={globalStyles.Input}
          placeholder='Surname'  />
          <Text style={globalStyles.txt}>Email</Text>
           <TextInput multiline
           style={globalStyles.Input}
          placeholder='Email Id' />
          <Text style={globalStyles.txt}>Password</Text>
           <TextInput style={globalStyles.Input}
          placeholder='Password' />
       
       <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
              <Text style={globalStyles.Button}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
              <Text style={globalStyles.title}>Already have account ?</Text>
            </TouchableOpacity>
               </View>
                 </View>
      ) }
   

      
  



