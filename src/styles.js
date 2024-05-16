import styled from "styled-components";
import { darkerGreen,white } from "colors";

export const BottomSection = styled.div`
  background-color: ${darkerGreen};
  box-shadow: 0 0 20px 17px ${darkerGreen};
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  color: ${white};
  gap: 15px;
`;

BottomSection.displayName = "BottomSection";
SectionWrapper.displayName = "SectionWrapper";