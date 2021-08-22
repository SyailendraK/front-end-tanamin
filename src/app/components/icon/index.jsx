import React from 'react';
import styled from 'styled-components';
// import tw from 'twin.macro';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = styled(FontAwesomeIcon)`
  font-size:1.5rem;
`;

export default function IconComponent({ icon }) {
  return (
    <Icon icon={icon} />
  );
}
