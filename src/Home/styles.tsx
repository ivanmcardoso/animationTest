import { Dimensions , Animated} from 'react-native';
import styled from 'styled-components/native';
const {width, height} = Dimensions.get("window");
export const Container = styled.View`
    flex: 1;
    align-items:center;
    justify-content: flex-start;
    background-color:rgba(254, 125, 0, 0.15);

`;

export const Circle = styled(Animated.View)`
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
    padding: 8% 4% 0;
    background-color: rgba(256, 256, 256, 0.87);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

export const ImageLogo = styled.Image`
    height: ${height*0.15}px;
    width: ${height*0.15}px;
`;

const RoundedCard = styled(Animated.View)`
    border-radius: 10px;
    min-height: 15%;
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
    height: 20%;

`;