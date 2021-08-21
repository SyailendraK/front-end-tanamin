import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import SearchIcon from '../../../assets/images/HomePage/icon-search.png';

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

const IconContainer = styled.div`
  ${tw`
    flex
    flex-col
    items-center
  `};

  img{
    ${tw`
      w-6
    `};
  }

  p{
    ${tw`
      text-xs
    `};
  }
`;

export default function NavBarMobile() {
  return (
    <NavBarMobileContainer>
      <IconsContainer>
        <IconContainer>
          <img src={SearchIcon} alt="Search Icon" />
          <p>Beranda</p>
        </IconContainer>
        <IconContainer>
          <img src={SearchIcon} alt="Search Icon" />
          <p>Keranjang</p>
        </IconContainer>
        <IconContainer>
          <img src={SearchIcon} alt="Search Icon" />
          <p>Edukasi</p>
        </IconContainer>
        <IconContainer>
          <img src={SearchIcon} alt="Search Icon" />
          <p>Akun</p>
        </IconContainer>
      </IconsContainer>
    </NavBarMobileContainer>
  );
}
