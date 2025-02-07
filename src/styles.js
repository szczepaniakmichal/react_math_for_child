import styled from "styled-components";
import { theme } from "colors";
import { boxShadow } from "variables";

const { darkerGreen, white } = theme;

export const AppWrapper = styled.div`
    margin: 0 auto;
    max-width: 800px;
    padding: 20px;
    box-shadow: ${boxShadow};
`

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