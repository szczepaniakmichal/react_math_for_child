import styled from "styled-components";
import {darkerGreen} from "colors";

export const BottomSection = styled.div`
  background-color: ${darkerGreen};
  box-shadow: 0 0 20px 17px ${darkerGreen};
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

BottomSection.displayName = "BottomSection";
SectionWrapper.displayName = "SectionWrapper";