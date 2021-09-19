import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SingIn } from '../screens/SingIn';
import { Home } from '../screens/Home';

 const {Navigator, Screen } = createNativeStackNavigator();

 export function AuthRoutes() {
   return(
     <Navigator
      screenOptions={{
        headerShown:false,
        contentStyle:{
          backgroundColor: 'transparent'
        }
      }}
   
     >
       <Screen name="SingIn" component={SingIn}/>
       <Screen name="Home" component={Home}/>
     </Navigator>
   )
 }