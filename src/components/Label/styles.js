import styled from "styled-components";

export const LabelWrapper = styled.span`
    margin: 0 0 2px 0;
    font-weight: 700;
    line-height: 24px;
    
    &:first-letter {
        text-transform: capitalize;
    }
`;

export const SubLabelWrapper = styled(LabelWrapper)`
    font-weight: 400;
`

LabelWrapper.displayName = 'HeaderWrapper';
SubLabelWrapper.displayName = 'SubLabelWrapper';
