import styled from "styled-components";
import {darkGreen} from "colors";

export const BottomSection = styled.div`
  position: sticky;
  bottom: 0;
  background-color: ${darkGreen};
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;