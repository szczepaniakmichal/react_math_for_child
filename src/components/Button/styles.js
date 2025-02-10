import styled, { css } from "styled-components";
import { theme } from "colors";
import { border, borderRadius, fontSize, normalGap } from "variables";
import { pulseLightAnimation, pulseDark } from "reusableStyles";

const { darkerGreen, gray } = theme;

export const GroupButtonWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: ${normalGap};
    background-color: ${darkerGreen};
`;

export const GlassButtonWrapper = styled.button`
    color: ${(props) => props.color ? props.color : '#fff'};
    background-color: transparent;
    font-weight: 400;
    font-size: ${fontSize};
    line-height: 1.8rem;
    padding: .3rem 1.9rem;
    flex: 1 1 auto;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    box-sizing: border-box;
    border: ${border};
    border-radius: ${borderRadius};
    transition: 0.3s;

    &:hover {
        ${pulseLightAnimation};
        text-decoration: none;
    }

    ${({ disabled }) => {
        if ( disabled ) {
            return css`
                cursor: not-allowed;
                border-color: rgba(128,128,128, 0.7);
                color: ${gray};

                &:hover {
                    animation-name: ${pulseDark};
                }
            `;
        }
        return null;
    }}
`;

GroupButtonWrapper.displayName = "GroupButtonWrapper";
GlassButtonWrapper.displayName = "GlassButtonWrapper";


