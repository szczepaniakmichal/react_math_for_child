import styled from "styled-components";
import { white } from "colors";
import { opacity } from 'variables';

export const HeaderWrapper = styled.h4`
  color: ${white};
  opacity: ${opacity};
  margin: 0;
  font-weight: 400;
  margin-bottom: 2px;
  
  &:first-letter {
    text-transform: capitalize;
  }
`;

HeaderWrapper.displayName = 'HeaderWrapper';
