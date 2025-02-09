import styled from "styled-components";
import { theme } from "colors";
import { fontSize, fontSizeBigger, opacity } from 'variables';

const { white } = theme;

export const HeaderWrapper = styled.h4`
    color: ${white};
    margin: 0 0 2px 0;
    font-weight: 700;
    font-size: ${fontSizeBigger};
    
    &:first-letter {
        text-transform: capitalize;
    }
`;

export const SubHeaderWrapper = styled(HeaderWrapper)`
    opacity: ${opacity};
    font-weight: 400;
    font-size: ${fontSize};
`;

HeaderWrapper.displayName = 'HeaderWrapper';
SubHeaderWrapper.displayName = 'SubHeaderWrapper';
