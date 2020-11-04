import { Dimensions , Animated, Platform} from 'react-native';
import styled from 'styled-components/native';
const {width, height} = Dimensions.get("window");
export const ITEM_WIDTH = width*0.5;
export const Container = styled.View`
    flex: 1;
    align-items:center;
    justify-content: flex-start;
    background-color:rgba(254, 125, 0, 0.15);

`;

export const Header = styled(Animated.View)`
    padding: 10% 0 8%;
    background-color: #ff9000;
    align-items:center;
    justify-content:center;
`;

export const MainText = styled.Text`
color: #828282;
text-transform: capitalize;
`;

export const MainContainer = styled.View`
    flex: 1;
    width: 100%;
    background-color: #ff9000;
    padding-top: 20px;
`;

export const ContentContainer = styled.View`
    flex: 1;
    padding: 8% 0;
    background-color: #FFFFFF;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
`;

export const ImageLogo = styled.Image`
    height: ${height*0.15}px;
    width: ${height*0.15}px;
`;

const RoundedCard = styled(Animated.View)`
    border-radius: 10px;
    min-height: 15%;
`; 

export const WelcomeMessageText = styled(Animated.Text)`
    font-family: 'Roboto Slab';
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    color: #828282;
    margin-left: 20px;
`;

export const EmptyButton = styled.TouchableOpacity`
    border-radius: 10px;
    flex:1;
    border: 2px solid #D0D0D0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5% 9%;
    background-color: #FFFFFF;
`;

export const InfoCard = styled(RoundedCard)`
    height: 15%;
    margin-bottom: 5%;
`;

export const Divider = styled.View`
    height: 80%;
    border: 1px solid #D0D0D0;
`;

export const MenuContainer = styled.View`
    flex:1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const MenuEmptyButton = styled(EmptyButton)`
    justify-content: center;
    align-items: center;
`;

export const MenuCard = styled(RoundedCard)`
    width: 46%;
    margin: 4% 0;
    height: ${0.4*height}px;

`;


export const MenuList = styled(Animated.FlatList).attrs({
    horizontal: true,
    decelerationRate: Platform.OS === 'ios' ? 0 : 0.7,
    snapToInterval: ITEM_WIDTH,
    snapToAlignment: 'start',
    scrollEventThrottle: 16,
    showsHorizontalScrollIndicator: false,
})`
`;

export const MenuCardItem = styled(Animated.View)`
    border-radius: 20px;
    width: ${ITEM_WIDTH}px;
    height: ${0.54*height}px;
    margin: 0 20px ;
    justify-content: center;
    align-items: center;
`;

export const Circle = styled(Animated.View)`
    background-color: #FFFFFF;
    height: ${0.36*width}px;
    width: ${0.36*width}px;
    border-radius: ${0.36*width}px;
    border-color: #FF9000;
    border-width:1px;
    position: relative;
    z-index:100;
    justify-content:center;
    align-items: center;
`;

export const MenuCardTouchable = styled.TouchableOpacity`
    flex:1;
    border-radius: 20px;
    height: ${0.5*height}px;
    width: 100%;
`;
export const MenuCardItemContainer = styled(Animated.View)`
    flex:1;
    border-radius: 20px;
    background-color: #FF9000;
`;

export const MenuCardItemContentContainer = styled.View`
    flex:1;
    justify-content: space-between;
    padding: 0 8% 15%;
`;

export const BodyContainer = styled.View`

`;
export const MenuCardItemTitle = styled(Animated.Text)`
    font-family: 'Roboto';
    font-size: 29px;
    font-style: normal;
    font-weight: 700;
    color: #FFFFFF;
    text-transform: capitalize;
`;

export const MenuCardItemText = styled(Animated.Text)`
    font-family: 'Nunito';
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    color: #FFFFFF;

`;

export const FooterContainer = styled.View`
    flex-direction:row;
    justify-content: flex-end;
`;

export const OvalButton = styled(Animated.View)`
    border-radius: ${width}px;
    padding: 1% 4%;
    background-color: #FFFFFF;
`;