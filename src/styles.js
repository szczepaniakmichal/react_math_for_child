import styled from "styled-components";
import {darkerGreen} from "colors";

export const BottomSection = styled.div`
  background-color: ${darkerGreen};
  box-shadow: 0 20px 20px 40px ${darkerGreen};
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;