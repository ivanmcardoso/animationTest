import React, { useEffect, useState } from 'react';
import { Animated, Dimensions, Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Extrapolate } from 'react-native-reanimated';
import LogoTectoy from '../assets/imgs/logo_tectoy.png'
import { Circle, Container, ContentContainer, Divider, EmptyButton, ImageLogo, InfoCard, ITEM_WIDTH, MainContainer, MainText, MenuCard, MenuCardItem, MenuCardTouchable, MenuContainer, MenuEmptyButton, MenuList } from './styles';

const {width, height} = Dimensions.get("window");

const Home: React.FC = () => {

    const [mheight] = useState(new Animated.Value(height));
    const [borderRadius] = useState(new Animated.Value(width));
    const [offsetY] = useState(new Animated.ValueXY({x: 0, y: 0 }));
    const [cardOpacity] = useState(new Animated.Value(0));
    const [cardMenuOpacity] = useState(new Animated.Value(0));
    const scrollX = React.useRef(new Animated.Value(0)).current;

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

            <MenuList
                  data={[{
                    id: 1
                  },
                  {
                    id:2
                  }
                ]}
                contentContainerStyle={{ alignItems: 'center' }}
                onScroll={Animated.event(
                  [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                  { useNativeDriver: false }
                )}
                keyExtractor={(_, index)=>String(index)}
                renderItem={({item,index})=>{
                  const inputRange = [
                    (index - 1) * ITEM_WIDTH,
                    (index - 0) * width*0.5,
                    (index +1)* width*0.5,
                  ];
        
                  const translateY = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.35*height, 0.55*height, 0.35*height],
                    extrapolate: 'clamp',
                  });
                  return (
                    <MenuCardItem 
                    style={{
                      opacity: cardMenuOpacity,
                      transform: [{translateY: cardMenuOffsetY}],
                      height: translateY
                      }}
                    >
                      <MenuCardTouchable
                        activeOpacity={0.85}
                      >
                        <Text>item</Text>
                      </MenuCardTouchable>
                    </MenuCardItem>
                  )
                }}
                />
        </ContentContainer>
    </MainContainer>
</Container>
  );
}

export default Home;