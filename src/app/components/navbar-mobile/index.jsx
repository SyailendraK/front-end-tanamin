import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome, faShoppingBasket, faGraduationCap, faUserAlt,
} from '@fortawesome/free-solid-svg-icons';

const NavBarMobileContainer = styled.div`
  ${tw`
    fixed
    bottom-7
    left-5
    right-5 
    rounded-full 
    justify-around
  `};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
`;

const IconsContainer = styled.div`
  ${tw`
    flex
    flex-row
    justify-around
    p-2
  `};
`;

const IconContainer = styled.button`
  ${tw`
    flex
    flex-col
    items-center
  `};

  p{
    ${tw`
      text-xs
    `};
  }
`;

const Icon = styled(FontAwesomeIcon)`
  ${tw`
    text-2xl
    focus:text-green-600
  `};
`;

export default function NavBarMobileComponent() {
  return (
    <NavBarMobileContainer>
      <IconsContainer>
        <IconContainer>
          <Icon icon={faHome} />
          <p>Beranda</p>
        </IconContainer>
        <IconContainer>
          <Icon icon={faShoppingBasket} />
          <p>Keranjang</p>
        </IconContainer>
        <IconContainer>
          <Icon icon={faGraduationCap} />
          <p>Edukasi</p>
        </IconContainer>
        <IconContainer>
          <Icon icon={faUserAlt} />
          <p>Akun</p>
        </IconContainer>
      </IconsContainer>
    </NavBarMobileContainer>
  );
}
