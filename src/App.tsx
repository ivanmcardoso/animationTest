import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { enableScreens, NativeScreenContainer } from 'react-native-screens';
import Routes from './routes';


export default function App() {
 
  enableScreens()

  return (
      <Routes/>
  );
}

