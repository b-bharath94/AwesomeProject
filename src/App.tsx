
import React from 'react';

// Navigation import

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens

import SplashScreen from './screens/SplashScreen';
import { Text, View } from 'react-native';


const Stack = createNativeStackNavigator()

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen
        name='Splash' 
        component={SplashScreen}
        options={{title:'Splash Screen'}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
