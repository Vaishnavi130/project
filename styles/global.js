import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container:{
      flex:1,
       alignItems:'center',
     justifyContent:'center',
     backgroundColor:'white',
     position:'absolute',
   top:0,
   bottom:0,
   left:0,
   right:0,
 
     },
  
  
    title :{
      fontSize: 15,
      color:'#0000A0',
      paddingTop:10,
      alignSelf:'center',
      marginBottom:50,
      
      },
      titleText:{
        fontSize:40,
        paddingTop:30,
        paddingBottom:20,
      },

    Input:{
      margin:10,
      borderColor:'black',
       width:300,
      height:20,
      borderBottomWidth:1,

      
      },

    Logo:{
      alignItems:'center',
      flexDirection:'row',
      justifyContent:'center',
      
      },
      Box:{
        alignItems:'center'
      },

    Button:{
      marginTop:10,
      paddingTop:15,
      paddingBottom:15,
      marginLeft:80,
      marginRight:80,
      backgroundColor:'skyblue',
      borderRadius:64,
      borderWidth: 1,
      borderColor: 'black',
      paddingLeft:60,
      paddingRight:50,
     },
     txt:{
       fontSize:20,
       alignSelf:'flex-start',
       paddingLeft:10,
       color:'black',
     },
     txtn:{
        alignSelf:'flex-start',
        paddingLeft:10,
        color:'black',
     }
    });  