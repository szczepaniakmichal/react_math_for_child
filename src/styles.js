import styled from "styled-components";
import { theme } from "colors";
import {
    border,
    borderRadius,
    borderWidth,
    boxShadow,
    transition
} from "variables";

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
    gap: 10px;
`;

export const BorderWrapper = styled.div`
    border: ${borderWidth} solid transparent;
    border-radius: ${borderRadius};
    transition: ${transition};

    &:hover {
        border: ${border};
    }
`;

AppWrapper.displayName = "AppWrapper";
BottomSection.displayName = "BottomSection";
SectionWrapper.displayName = "SectionWrapper";
BorderWrapper.displayName = "BorderWrapper";