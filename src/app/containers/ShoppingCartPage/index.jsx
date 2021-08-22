import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import ShoppingCartItem from '../../components/shopping-cart-item';

import ProductImg from '../../../assets/images/ShoopingCartPage/tomatoes.png';
import TitleSectionComponent from '../../components/title-section';

const ShoppingCartContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    overflow-hidden
  `};
`;

// const TitleContainer = styled.div`
//   ${tw`
//     flex
//     w-9/12
//     items-center
//     justify-center
//   `};
// `;

// const TitleSection = styled.div`
//   ${tw`
//     flex
//     flex-row
//     w-full
//     m-5
//   `};
// `;

// const BackButton = styled.button`
//   ${tw`
//     flex
//     justify-start
//   `};
// `;

// const Icon = styled(FontAwesomeIcon)`
//   ${tw`
//     text-2xl
//     text-center
//   `};
// `;

// const Title = styled.h1`
//   ${tw`
//     flex
//     text-lg
//     text-center
//     font-bold
//   `};
// `;

const ItemsContainer = styled.div`
  ${tw`
    flex
    flex-col
    mt-5
  `};
`;

const SubTotalFixedContainer = styled.div`
  ${tw`
    fixed
    bottom-7 
    right-5 
    left-5
    p-0 
    mx-2
    border-none
    rounded-2xl
  `};
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.15);
`;

const SubTotalFlexContainer = styled.div`
  ${tw`
    flex
    flex-row 
    justify-between
    p-3
    mx-2 
  `};
`;

const SubTotalNominalSection = styled.div`
  ${tw`
    flex
    flex-col
  `};
`;

const SubTotalText = styled.p`
  ${tw`
    text-sm
  `};
  line-height:1;
`;

const SubTotalNominalText = styled.h2`
  ${tw`
    font-bold
    text-2xl
  `};
`;

const SubTotalCheckoutSection = styled.div`
  ${tw`
    flex
    items-center
  `};
`;

const SubTotalCheckoutButton = styled.button`
  ${tw`
    rounded-2xl
    w-24
    h-10
  `};
  background-image: linear-gradient(to right, #449515, #B6C867);
`;

const SubTotalCheckoutButtonText = styled.p`
  ${tw`
    text-sm 
    text-white
  `};
`;

export default function ShoppingCart() {
  return (
    <ShoppingCartContainer>
      <TitleSectionComponent title="Keranjang" />
      <ItemsContainer>
        <ShoppingCartItem name="Tomatoes" price="19000" img={ProductImg} />
        <ShoppingCartItem name="Tomato" price="22000" img={ProductImg} />
        <ShoppingCartItem name="Tomat" price="20000" img={ProductImg} />
      </ItemsContainer>
      <SubTotalFixedContainer>
        <SubTotalFlexContainer>
          <SubTotalNominalSection>
            <SubTotalText>Subtotal</SubTotalText>
            <SubTotalNominalText>Rp59.000</SubTotalNominalText>
          </SubTotalNominalSection>
          <SubTotalCheckoutSection>
            <SubTotalCheckoutButton>
              <SubTotalCheckoutButtonText aria-label="Checkout Button">
                Periksa
              </SubTotalCheckoutButtonText>
            </SubTotalCheckoutButton>
          </SubTotalCheckoutSection>
        </SubTotalFlexContainer>
      </SubTotalFixedContainer>
    </ShoppingCartContainer>
  );
}
