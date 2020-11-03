import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Animated, Dimensions, StatusBar, StyleSheet, Text, View } from 'react-native';
import LogoTectoy from '../assets/imgs/logo_tectoy.png'
import { Circle, Container, ImageLogo, MainText } from './styles';

const {width, height} = Dimensions.get("window");

const LandingPage: React.FC = () => {

    const navigation = useNavigation()

    const [mheight] = useState(new Animated.Value(0.25*height));
    const [mwidth] = useState(new Animated.Value(0.25*height));
    const [borderRadius] = useState(new Animated.Value(width));
    const [offsetY, setOffsetY] = useState(new Animated.ValueXY({x: 0, y: 0}));
    
    function handleAnimation(){
      makeCircleExpand().start(()=>goToHome())
    }

    function goToHome(){
      navigation.navigate("Home");
    }
    
    function makeCircleExpand() {
      return Animated.sequence([
        Animated.parallel([
          Animated.timing(
            mheight,
            {
              toValue:( height*1.1),
              duration: 500,
              useNativeDriver: false
            }
          ),
          Animated.timing(
            mwidth,
            {
              toValue:(height*1.1),
              duration: 500,
              useNativeDriver: false
            }
          )
        ])
      ])
    }

  return (
    <Container onPress={handleAnimation} activeOpacity={0.95}>
        <StatusBar backgroundColor="#FF9000"/>
        <Circle >
      <ImageLogo source={LogoTectoy}/>
        </Circle>
  </Container>
    );
}

export default LandingPage;