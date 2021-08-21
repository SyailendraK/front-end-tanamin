import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import SearchIcon from '../../../assets/images/HomePage/icon-search.png';

const SearchBarContainer = styled.div`
  ${tw`
    flex
    flex-row
    justify-start
    items-center
    p-1
  `};
  background-color: #f4f4f4;
  width:90%;
  border-radius: 15px;
`;

const InputButton = styled.button`
  ${tw`
    w-10
  `};
`;

const IconContainer = styled.div`
  ${tw`
    flex
    p-2
  `};
  width: auto;
  img {
    width: auto;
    height: 100%;
  }
`;

const InputContainer = styled.div`
  ${tw`
    flex
    w-full
  `};
  input{
    ${tw`
      w-72
      p-1
      focus:outline-none
    `};
    background-color: #f4f4f4;
  }
`;

export default function SearchBar() {
  return (
    <SearchBarContainer>
      <InputButton>
        <IconContainer>
          <img src={SearchIcon} alt="Logo Tanam Indonesia" />
        </IconContainer>
      </InputButton>
      <InputContainer>
        <input type="search" placeholder="Sedang cari apa?" />
      </InputContainer>
    </SearchBarContainer>
  );
}
