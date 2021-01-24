import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer,  } from "react-navigation";
import Login from "../screens/login";
import Register from "../screens/register";
import Home from "../screens/home";
import ForgetPassword from "../screens/forget";


const screens={
    
    Login:{
        screen:Login
    
    },
    Register:{
        screen:Register
    },
    Home:{
        screen:Home
    }
}

const Navigator = createStackNavigator(screens, { 
defaultNavigationOptions:{
    headerShown:false,
}});

export default createAppContainer(Navigator);

