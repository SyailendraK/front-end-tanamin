import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const AccountSettingItemContainer = styled.div`
  ${tw`
    flex
    flex-row
    justify-between
    items-center
    mx-5
  `};
`;

const LeftSection = styled.div`
  ${tw`
    flex
    flex-row
    items-center
  `};
`;

const IconContainer = styled.div`
  ${tw`
    flex
    items-center 
    justify-center
    w-10
    p-1
  `};
`;

const Icon = styled(FontAwesomeIcon)`
  ${tw`
    text-3xl
    p-1
    flex
  `};
`;

const SettingItemText = styled.div`
  ${tw`
    text-sm
    ml-3
  `};
`;

const RightSection = styled.div`
  ${tw`
    flex
  `};
`;

export default function AccountSettingItem({ icon = faShoppingBasket, text = 'Pesanan Saya' }) {
  return (
    <AccountSettingItemContainer>
      <LeftSection>
        <IconContainer>
          <Icon icon={icon} />
        </IconContainer>
        <SettingItemText>{text}</SettingItemText>
      </LeftSection>
      <RightSection>
        <Icon icon={faChevronRight} />
      </RightSection>
    </AccountSettingItemContainer>
  );
}
