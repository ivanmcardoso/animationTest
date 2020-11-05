import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import LandingPage from './LandingPage';
import 'react-native-gesture-handler';
import {Animated} from 'react-native';
import { createSharedElementStackNavigator4 } from 'react-navigation-shared-element';
import Home from './Home';
import { createAppContainer } from 'react-navigation';
import Products from './Products';
import { enableScreens } from 'react-native-screens';
// const AppStack = createNativeStackNavigator() 
const Stack = createSharedElementStackNavigator4({
  LandingPage: LandingPage,
  Home: Home,

  Products: Products
},
{
  initialRouteName: 'LandingPage',
  headerMode: "none",
  transitionConfig: () => springyFadeIn()
}
)

enableScreens();

const Routes = () => {
  const AppContainer = createAppContainer(Stack)
  // return (
  //   <NavigationContainer>
  //     <AppStack.Navigator initialRouteName="LandingPage">
  //           <AppStack.Screen  options={{ headerShown: false, stackAnimation: "none" }} name="LandingPage" component={LandingPage}  />
  //           <AppStack.Screen  options={{ headerShown: false, stackAnimation: "none" }} name="Home" component={Home}  />
  //     </AppStack.Navigator>
  //   </NavigationContainer>
    
  // );
  return <AppContainer/>;
}


function springyFadeIn() {
  const transitionSpec = {
    timing: Animated.spring,
    tension: 10,
    useNativeDriver: true,
  };

  return {
    transitionSpec,
    screenInterpolator: ({position, scene}) => {
      const {index} = scene;

      const opacity = position.interpolate({
        inputRange: [index - 1, index],
        outputRange: [0, 1],
      });

      return {opacity};
    },
  };
}

export default Routes;