import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled.View`
  background-color: #D2D2D2;
`;

export const MenuCardItemTitle = styled(Animated.Text)`
    font-family: 'Roboto';
    font-size: 29px;
    font-style: normal;
    font-weight: 700;
    color: #FFFFFF;
    text-transform: capitalize;
`;