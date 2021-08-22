import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLock,
  faMapMarkedAlt,
  faPaperclip,
  faPenAlt, faPercent, faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';

import { faHeart } from '@fortawesome/free-regular-svg-icons';
import TitleSectionComponent from '../../components/title-section';

import UserAvatarImg from '../../../assets/images/HomePage/user.png';
import AccountSettingItem from '../../components/account-setting-item';
// import IconComponent from '../../components/icon';

const AccountContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    overflow-x-hidden
  `};
`;

const ProfileContainer = styled.div`
  ${tw`
    flex
    flex-row
    justify-between
    w-full
    mx-5
    mt-5
  `};
`;

const ImageAndProfileSection = styled.div`
  ${tw`
    flex
    flex-row
    w-full
  `};
`;

const ProfileImage = styled.div`
  ${tw`
    flex
    w-14
    h-14 
    rounded-2xl
    mr-3 
  `};
`;

const ProfileText = styled.div`
  ${tw`
    flex
    flex-col
    justify-center
    truncate
  `};

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

const EditProfileSection = styled.div`
  ${tw`
    flex
    items-center
    mr-7
  `};
`;

const IconContainer = styled.button`
  ${tw`
    p-1
    mr-2
  `};
`;

const Icon = styled(FontAwesomeIcon)`
  ${tw`
    text-lg
  `};
`;

const LogOutFixedContainer = styled.div`
  ${tw`
    fixed
    bottom-10 
    right-5 
    left-5
    p-0 
    mx-2
    rounded-2xl
  `};
`;

const LogOutFlexContainer = styled.div`
  ${tw`
    flex
    items-center
    justify-center
    bg-white 
    rounded-full
  `};
`;

const BorderColor = styled.div`
  ${tw`
    relative
    p-0.5
    rounded-full
  `};
  background-image: linear-gradient(to right, #449515, #B6C867);
`;

const LogoutButton = styled.button`
  ${tw`
    p-2
    rounded-full
    w-full
  `};
`;

const LogOutText = styled.p`
  ${tw`
    text-sm 
    font-bold
  `};
  color: #429414;
`;

const AccountSettingContainer = styled.div`
  ${tw`
    flex
    flex-col
    mt-8
  `};
`;

export default function Account() {
  return (
    <AccountContainer>
      <TitleSectionComponent title="Akun" />
      <ProfileContainer>
        <ImageAndProfileSection>
          <ProfileImage>
            <img src={UserAvatarImg} alt="Avatar" />
          </ProfileImage>
          <ProfileText>
            <h1>Muhammad Fikry</h1>
            <p>(+62)8990609123</p>
          </ProfileText>
        </ImageAndProfileSection>
        <EditProfileSection>
          <IconContainer>
            <Icon icon={faPenAlt} />
          </IconContainer>
        </EditProfileSection>
      </ProfileContainer>
      <AccountSettingContainer>
        <AccountSettingItem icon={faShoppingBasket} text="Pesanan Saya" />
        <AccountSettingItem icon={faPercent} text="Voucer" />
        <AccountSettingItem icon={faHeart} text="Favorite" />
        <AccountSettingItem icon={faMapMarkedAlt} text="Daftar Alamat" />
        <AccountSettingItem icon={faPaperclip} text="Artikel Disukai" />
        <AccountSettingItem icon={faLock} text="Keamanan Akun" />
      </AccountSettingContainer>
      <LogOutFixedContainer>
        <BorderColor>
          <LogOutFlexContainer>
            <LogoutButton>
              <LogOutText>Log out</LogOutText>
            </LogoutButton>
          </LogOutFlexContainer>
        </BorderColor>
      </LogOutFixedContainer>
    </AccountContainer>
  );
}
