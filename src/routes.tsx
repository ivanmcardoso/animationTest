import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import LandingPage from './LandingPage';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
const AppStack = createStackNavigator() 
const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName="LandingPage">
            <AppStack.Screen  options={{ headerShown: false, animationEnabled: false }} name="LandingPage" component={LandingPage}  />
            <AppStack.Screen  options={{ headerShown: false, animationEnabled: false }} name="Home" component={Home}  />
      </AppStack.Navigator>
    </NavigationContainer>
    
  );
}

export default Routes;