import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import SearchBarComponent from '../../components/search-bar';
import NavBarMobileComponent from '../../components/navbar-mobile';

import UserAvatarImg from '../../../assets/images/HomePage/user.png';
import MessageIcon from '../../../assets/images/HomePage/icon-message.png';

const HomePageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`;

const UserContainer = styled.div`
  ${tw`
    flex
    flex-row
    w-full
    justify-between
    items-center
    mt-5
  `}
`;

const LeftUserContainer = styled.div`
  ${tw`
    flex
    flex-col
    ml-5
  `}
  p{
    ${tw`
      text-sm
      text-gray-400
    `};
  }
  h1{
    line-height:80%;
    font-size:1.25rem;
    font-weight:900;
  }
`;

const RightUserContainer = styled.div`
  ${tw`
    flex
    flex-row
    mr-5
  `};
`;

const MessageButton = styled.button`
  ${tw`
    w-full
    mr-2
  `};
`;

const MessageIconContainer = styled.div`
  ${tw`
    flex
    w-full
    h-auto
    items-center
    align-middle
  `};

  p{
    ${tw`
      relative
      right-2
      bg-red-600
      text-white
      rounded-full
      w-4
      h-4
      text-center
      m-0
      p-0
    `};
    top:-10px;
    font-size:10px;
  }
`;

const ProfileAvatarButton = styled.button`
  ${tw`
    w-full
  `};
`;

const SearchBarContainer = styled.div`
  ${tw`
    flex
    mt-6
    w-full
    items-center
    justify-center
  `};
`;

export default function HomePage() {
  return (
    <HomePageContainer>
      <NavBarMobileComponent />
      <UserContainer>
        <LeftUserContainer>
          <p>Hallo</p>
          <h1>Muhammad Fikry</h1>
        </LeftUserContainer>
        <RightUserContainer>
          <MessageButton aria-label="Message">
            <MessageIconContainer>
              <img src={MessageIcon} alt="Message Icon" />
              <p>3</p>
            </MessageIconContainer>
          </MessageButton>
          <ProfileAvatarButton aria-label="User Avatar">
            <img src={UserAvatarImg} alt="User Avatar" />
          </ProfileAvatarButton>
        </RightUserContainer>
      </UserContainer>
      <SearchBarContainer>
        <SearchBarComponent />
      </SearchBarContainer>
    </HomePageContainer>
  );
}
