import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

const TitleContainer = styled.div`
  ${tw`
    flex
    w-9/12
    items-center
    justify-center
  `};
`;

const TitleSection = styled.div`
  ${tw`
    flex
    flex-row
    w-full
    m-5
  `};
`;

const BackButton = styled.button` 
  ${tw`
    flex
    justify-start
  `};
`;

const Icon = styled(FontAwesomeIcon)`
  ${tw`
    text-2xl
    text-center
  `};
`;

const Title = styled.h1`
  ${tw`
    flex
    text-lg 
    text-center
    font-bold
  `};
`;

export default function TitleSectionComponent({ title }) {
  return (
    <TitleSection>
      <BackButton aria-label="Back Button">
        <Icon icon={faArrowLeft} />
      </BackButton>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
    </TitleSection>
  );
}
