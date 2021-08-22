import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import TanamInLogoImg from '../../../assets/images/AuthPage/logo-TanamIn.png';

const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
  `};
`;

const Image = styled.div`
  width: auto;
  img {
    width: auto;
    height: 100%;
  }
`;

export default function LogoComponent() {
  return (
    <LogoContainer>
      <Image>
        <img src={TanamInLogoImg} alt="Logo Tanam Indonesia" />
      </Image>
    </LogoContainer>
  );
}
