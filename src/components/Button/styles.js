import styled from "styled-components";

import { black, orange, white } from "colors";
import { borderRadius, outlineColor, paddingButton, rwdSmallDevices, rwdTablet, transition } from "variables";

export const ButtonWrapper = styled.button`
  position: ${({sticky}) => sticky && 'sticky'};
  bottom: ${({sticky}) => sticky && '0px'};
  padding: ${paddingButton};
  background-color: ${(props) => props.backgroundColor ? props.backgroundColor : 'rgba(147, 131, 108, 0.3)' };
  color: ${(props) => props.color ? props.color : black};
  font-size: ${(props) => props.fontSize ? props.fontSize : '1.5rem' };
  font-weight: ${(props) => props.isBolder ? 700 : 400};
  text-transform: uppercase;
  border: 1px solid white;
  border-radius: ${borderRadius};
  outline-color: ${outlineColor};     
  
  &:hover {
    transition: ${transition};
    background-color: ${(props) => props.backgroundColor ? props.backgroundColor : 'rgba(147, 131, 108, 0.5)' };
    filter: blur(0.5px);
  }

  @media screen and (${rwdSmallDevices}) {
    width: max-content;
  }
`;

export const GroupButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
