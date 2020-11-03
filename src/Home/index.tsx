import React, { useEffect, useState } from 'react';
import { Animated, Dimensions, Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Extrapolate } from 'react-native-reanimated';
import LogoTectoy from '../assets/imgs/logo_tectoy.png'
import { Circle, Container, ContentContainer, Divider, EmptyButton, ImageLogo, InfoCard, MainContainer, MainText, MenuCard, MenuContainer, MenuEmptyButton } from './styles';

const {width, height} = Dimensions.get("window");

const Home: React.FC = () => {

    const [mheight] = useState(new Animated.Value(height));
    const [borderRadius] = useState(new Animated.Value(width));
    const [offsetY] = useState(new Animated.ValueXY({x: 0, y: 0 }));
    const [cardOpacity] = useState(new Animated.Value(0));
    const [cardMenuOpacity] = useState(new Animated.Value( 0));

    useEffect(()=>{
        makeCircleShink().start()        
    }, [])

    function makeCircleShink(){
        return Animated.sequence([
          Animated.spring(
            borderRadius,
            {
              toValue: width,
              speed: width,
              useNativeDriver: false
            }),
          Animated.parallel(
            [ Animated.timing(
              mheight,
              {
                toValue:0.15*width,
                duration: 600,
                useNativeDriver: false
              }
            ),
              Animated.timing(
                offsetY.y,
                {
                  toValue: 0,
                  duration: 300,
                  useNativeDriver: false
                }
              )
            ]
          )
        ,
        Animated.timing(
            cardOpacity,
            {
                toValue: 1,
                duration: 500,
                useNativeDriver: false
            }
        ),
        Animated.timing(
            cardMenuOpacity,
            {
                toValue: 1,
                duration: 500,
                useNativeDriver: false
            }
        )
        ])
      }

      const cardOffsetY = cardOpacity.interpolate({
          inputRange: [0, 1],
          outputRange: [15, 0],
          extrapolate: Extrapolate.CLAMP
      })

      const cardMenuOffsetY = cardMenuOpacity.interpolate({
        inputRange: [0, 1],
        outputRange: [15, 0],
        extrapolate: Extrapolate.CLAMP
    })
  return (
    <Container>
    <Circle style={{
        height: mheight, 
        width: width, 
        transform: [{translateY: offsetY.y}] 
        }}>
    <ImageLogo source={LogoTectoy}/>
    </Circle>
    <MainContainer>
        <ContentContainer>
            <InfoCard style={{
                opacity: cardOpacity,
                transform: [{translateX: cardOffsetY}]
                }}>
                <EmptyButton>
                    <MainText>Acabou</MainText>
                    <Divider/>
                    <MainText>a</MainText>
                    <Divider/>
                    <MainText>Criatividade</MainText>
                </EmptyButton>
            </InfoCard>

            <MenuContainer>
                <MenuCard 
                    style={{
                    opacity: cardMenuOpacity,
                    transform: [{translateX: cardMenuOffsetY}]
                    }}
                >
                    <MenuEmptyButton>
                        <MainText>Pipoca</MainText>
                    </MenuEmptyButton>
                </MenuCard>
                <MenuCard 
                    style={{
                    opacity: cardMenuOpacity,
                    transform: [{translateX: cardMenuOffsetY}]
                    }}
                >
                    <MenuEmptyButton>
                        <MainText>Refrigerante</MainText>
                    </MenuEmptyButton>
                </MenuCard>
                <MenuCard 
                    style={{
                        opacity: cardMenuOpacity,
                        transform: [{translateX: cardMenuOffsetY}]
                        }}
                >
                    <MenuEmptyButton>
                        <MainText>Guardanapo</MainText>
                    </MenuEmptyButton>
                </MenuCard>
            </MenuContainer>
                
        </ContentContainer>
    </MainContainer>
</Container>
  );
}

export default Home;