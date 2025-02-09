import { css, keyframes } from 'styled-components';

export const pulseLight = keyframes`
    0% {
        background-image: linear-gradient(to right,
        transparent 33%,
        rgba(255, 255, 255, 0.4) 50%,
        transparent 66%);
        background-size: 300% 100%;

    }
    100% {
        background-position: right;
        background-image: linear-gradient(to right,
        transparent 33%,
        rgba(255, 255, 255, 0.4) 50%,
        transparent 66%);
        background-size: 300% 100%;
    }
`;

export const pulseDark = keyframes`
    0% {
        background-image: linear-gradient(to right,
        transparent 33%,
        rgba(0, 0, 0, 0.7) 50%,
        transparent 66%);
        background-size: 300% 100%;

    }
    100% {
        background-position: right;
        background-image: linear-gradient(to right,
        transparent 33%,
        rgba(0, 0, 0, 0.7) 50%,
        transparent 66%);
        background-size: 300% 100%;
    }
`;

export const pulseLightAnimation = css`
    animation-name: ${pulseLight};
    animation-duration: 3s;
    animation-iteration-count: infinite;
    background-color: rgba(255, 255, 255, 0.2);
`

export const displayItemsSpaceBetween = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
`