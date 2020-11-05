import React from 'react';
import { View } from 'react-native';
import ProductsIcon from '../assets/imgs/ic_products.svg'

import { Container, MenuCardItemTitle } from './styles';
import { SharedElement } from 'react-navigation-shared-element';

const Products = ({navigation}) => {
    const item = navigation.getParam('item');
  return (
    <Container>
        <SharedElement
                              id={`title`}
                            >
             <MenuCardItemTitle>Produtos</MenuCardItemTitle>

        </SharedElement>
        <SharedElement
                              id={`item.${item.id}.image`}
                            >
                                <ProductsIcon height={70} width={70} />
                            </SharedElement>
    </Container>
  );
}

Products.sharedElements = (route, otherRoute, showing) => {
    const item = route.getParam('item');
    return [{id: `item.${item.id}.title`}, {id: `item.${item.id}.image`}];
  };

export default Products;