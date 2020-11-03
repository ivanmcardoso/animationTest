import { Dimensions , Animated} from 'react-native';
import styled from 'styled-components/native';
const {width, height} = Dimensions.get("window");

export const Container = styled.TouchableOpacity`
    flex: 1;
    align-items:center;
    justify-content:center;
    background-color:rgba(254, 125, 0, 0.15);
    
`;

export const Circle = styled(Animated.View)`
    padding: 5%;
    background-color:#FF9000;
    align-items:center;
    justify-content:center;
    flex:1;
    width: 100%;
`;

export const MainText = styled.Text`
color: #fff;
`;

export const ImageLogo = styled.Image`
    height: ${height*0.15}px;
    width: ${height*0.15}px;
`;