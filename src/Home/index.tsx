import React, { useEffect, useState, useRef } from 'react';
import { Animated, Dimensions, Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Extrapolate } from 'react-native-reanimated';
import LogoTectoy from '../assets/imgs/logo_tectoy.png'
import ESLIcon from '../assets/imgs/ic_esl.svg'
import ProductsIcon from '../assets/imgs/ic_products.svg'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Header, Container, ContentContainer, Divider, EmptyButton, ImageLogo, InfoCard, ITEM_WIDTH, MainContainer, MainText, MenuCard, MenuCardItem, MenuCardTouchable, MenuContainer, MenuEmptyButton, MenuList, Circle, MenuCardItemContainer, MenuCardItemContentContainer, MenuCardItemTitle, MenuCardItemText, FooterContainer, OvalButton, WelcomeMessageText } from './styles';

const {width, height} = Dimensions.get("window");




const Home: React.FC = () => {

    const [mheight] = useState(new Animated.Value(height));
    const [borderRadius] = useState(new Animated.Value(width));
    const [offsetY] = useState(new Animated.ValueXY({x: 0, y: 0 }));
    const [cardOpacity] = useState(new Animated.Value(0 ));
    const cardMenuOpacity = useRef(new Animated.Value(0)).current;
    const scrollX = React.useRef(new Animated.Value( 0)).current;

    const data = [{
      id: 1,
      type: "PRODUCTS",
      name: "Produtos",
      text: "Cadastre e gerencie os produtos da sua loja "
    },
    {
      id:2,
      type: "LABELS",
      name: "Etiquetas",
      text: "Vincule e gerencie as suas etiquetas"
    }
    ]

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


    function renderIcon(type:string) {
      switch (type) {
        case "PRODUCTS":
          return <ProductsIcon height={70} width={70} />
        case "LABELS":
          return <ESLIcon height={70} width={70} />
      }
    }

  return (
    <Container>
    <Header style={{
        height: mheight, 
        width: width, 
        transform: [{translateY: offsetY.y}] 
        }}>
    <ImageLogo source={LogoTectoy}/>
    </Header>
    <MainContainer>
        <ContentContainer>
          
            {/* <InfoCard style={{
                opacity: cardOpacity,
                transform: [{translateX: cardOffsetY}]
                }}>
                <EmptyButton>
                
                    <MainText>Acabou</MainText>
                    <Divider/>
                    <MainText>a</MainText>
                    <Divider/>
                    <MainText>Criatividade</MainText>
                  <ProductsIcon
                  height={20} 
                  width={20}
                  />
                </EmptyButton>
            </InfoCard> */}
            <WelcomeMessageText
              style={{
                opacity: cardOpacity
              }}
            >Seja Bem vindo</WelcomeMessageText>

            <MenuList
                  data={data}
                style={{
                  opacity: cardMenuOpacity
                }}
                contentContainerStyle={{ alignItems: 'center' }}
                onScroll={Animated.event(
                  [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                  { useNativeDriver: false }
                )}
                keyExtractor={(_, index)=>String(index)}
                renderItem={({item,index})=>{
                  const inputRange = [
                    (index - 1) * ITEM_WIDTH*0.5,
                    (index - 0) * ITEM_WIDTH-(index == 1 ? 100: 0),
                    (index +1)* ITEM_WIDTH*0.4,
                  ];
                  console.log(scrollX);
                  
                  const translateY = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.42*height, 0.6*height, 0.42*height],
                    extrapolate: 'clamp',
                  });

                  const circleHeight = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.26*width, 0.35*width, 0.26*width],
                    extrapolate: 'clamp',
                  });

                  const circleOffsetY= scrollX.interpolate({
                    inputRange,
                    outputRange: [0.26*width/2, 0.35*width/2, 0.26*width/2],
                    extrapolate: 'clamp',
                  });

                  const cdOp = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.5, 1, 0.5],
                    extrapolate: 'clamp',
                  })

                  const fontSizeTitle = scrollX.interpolate({
                    inputRange,
                    outputRange: [22, 29, 22],
                    extrapolate: 'clamp',
                  })

                  return (
                    <MenuCardItem 
                    style={{
                      transform: [{translateY: cardMenuOffsetY}],
                      height: translateY
                      }}
                    >
                      <Circle 
                      style={{
                          height: (circleHeight),
                          width: circleHeight,
                          transform: [{translateY: circleOffsetY}]
                        }}>
                        {renderIcon(item.type)}
                      </Circle>
                      <MenuCardTouchable
                        activeOpacity={0.85}
                      >
                        <MenuCardItemContainer
                        style={{
                          opacity: cdOp,
                        }}
                        >
                          <MenuCardItemContentContainer>
                            <MenuCardItemTitle
                              style={{
                                fontSize: fontSizeTitle,
                                paddingTop: Animated.multiply(circleHeight, 0.6)
                              }}
                            >{item.name}</MenuCardItemTitle>
                            <MenuCardItemText
                            style={{
                              fontSize: Animated.multiply(fontSizeTitle, 0.5),
                            }}
                            >{item.text}</MenuCardItemText>
                          <FooterContainer>
                            <OvalButton>
                            <Icon
                                name="keyboard-arrow-right"
                                size={28}
                                color="#FF9000"
                                />

                            </OvalButton>
                          </FooterContainer>
                          </MenuCardItemContentContainer>
                        </MenuCardItemContainer>
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