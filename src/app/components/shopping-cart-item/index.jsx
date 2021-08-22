/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import ProductImg from '../../../assets/images/ShoopingCartPage/tomatoes.png';

const ShoppingCartItemContainer = styled.div`
  ${tw`
    flex
    flex-row
    w-full
    justify-between
    items-center
    mx-5
    mb-5
  `};
`;

const ItemSection = styled.div`
  ${tw`
    flex
    flex-row
    w-full
    items-center
  `};
`;

const ItemImage = styled.div`
  ${tw`
    flex
    items-center
    rounded-md
    w-12
    h-12
    mr-5
  `};
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.15);
`;

const ItemText = styled.div`
  ${tw`
    flex
    flex-col
    text-sm
  `};
`;

const ProductName = styled.p`
  ${tw`
    font-bold
    truncate
  `};
`;

const ProductPrice = styled.p`
  color: #B4C765;
`;

const CountSection = styled.div`
  ${tw`
    flex
    flex-row
    justify-around
    mr-7
  `};
  width: 40%;
`;

const BorderColor = styled.div`
  ${tw`
    relative
    p-0.5
    rounded-full
  `};
  background-image: linear-gradient(to right, #449515, #B6C867);
`;

const MinusButton = styled.button`
  ${tw`
    p-1
    flex
    items-center
    justify-center
    w-6 
    h-6
    rounded-full
    bg-white
  `};
`;

const MinusIcon = styled(FontAwesomeIcon)`
  ${tw`
  flex
    p-1
    items-center
    justify-center
    text-2xl
  `};
  color: #449515;
`;

const PlusButton = styled.button`
  ${tw`
    p-1
    flex
    items-center
    justify-center
    w-6 
    h-6
    rounded-full
  `};
  background-image: linear-gradient(to right, #449515, #B6C867);
`;

const PlusIcon = styled(FontAwesomeIcon)`
  ${tw`
    flex
    p-1
    items-center
    justify-center
    text-2xl
    text-white
  `};
`;

const CountNumber = styled.p`
  ${tw`
    text-lg
  `};
`;

export default function ShoppingCartItemComponent({ name = 'Tomat', price = 21000, img = ProductImg }) {
  const formatter = new Intl.NumberFormat('de-DE');

  return (
    <ShoppingCartItemContainer>
      <ItemSection>
        <ItemImage>
          <img src={img} alt={`Produk ${name}`} />
        </ItemImage>
        <ItemText>
          <ProductName>{name}</ProductName>
          <ProductPrice>{`Rp${formatter.format(price)}`}</ProductPrice>
        </ItemText>
      </ItemSection>
      <CountSection>
        <BorderColor>
          <MinusButton aria-label="Minus Button">
            <MinusIcon icon={faMinus} />
          </MinusButton>
        </BorderColor>
        <CountNumber>2</CountNumber>
        <BorderColor>
          <PlusButton aria-label="Plus Button">
            <PlusIcon icon={faPlus} />
          </PlusButton>
        </BorderColor>
      </CountSection>
    </ShoppingCartItemContainer>
  );
}
