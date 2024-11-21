import styled from "styled-components";
import { white } from "colors";
import { opacity } from 'variables';

export const HeaderWrapper = styled.h4`
    color: ${white};
    margin: 0 0 2px 0;
    font-weight: 700;
    
    &:first-letter {
        text-transform: capitalize;
    }
`;

export const SubHeaderWrapper = styled(HeaderWrapper)`
    opacity: ${opacity};
    font-weight: 400;
`;

HeaderWrapper.displayName = 'HeaderWrapper';
