import styled from "styled-components";
import { displayItemsSpaceBetween } from "reusableStyles";
import { normalGap } from "variables";

export const InfoPresenter = styled.div`
    ${displayItemsSpaceBetween};
    flex-wrap: wrap;
    gap: ${normalGap};
`

export const LabelWrapper = styled.div`
    display: flex;
    gap: ${normalGap};
`