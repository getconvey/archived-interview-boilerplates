import React from 'react';
import styled from 'styled-components';

import { brightBlue, deepBlue } from '../styles/Colors';
import { H4Style } from '../styles/Headings';

const PrimaryCTA = ({ ...props }) => <Button {...props} />;

const Button = styled.button`
  width: auto;

  background-color: ${brightBlue};
  color: white;

  padding: 16px 24px;
  margin: auto;

  border-radius: 4px;

  transition: all 0.5s ease;

  border: none;

  cursor: pointer;

  ${H4Style}

  @media screen and (hover: hover) {
    &:hover {
      background-color: ${deepBlue};
    }
  }
`;

export default PrimaryCTA;
