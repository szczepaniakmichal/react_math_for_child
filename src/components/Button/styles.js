import styled, { keyframes } from "styled-components";

import { darkerGreen } from "colors";
import { border, borderRadius } from "variables";

export const GroupButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 10px;
  background-color: ${darkerGreen};
`;

export const pulseLight = keyframes`
  0% {
    background-image: linear-gradient(
               to right,
               transparent 33%,
               rgba(255,255,255,0.4) 50%,
               transparent 66%
       );
           background-size:300% 100%;
	  
  }
  100% {
    background-position: right;
    background-image: linear-gradient(
            to right,
            transparent 33%,
            rgba(255,255,255,0.4) 50%,
            transparent 66%
    );
    background-size:300% 100%;
  }
`;


export const GlassButtonWrapper = styled.button`
  color: ${(props) => props.color ? props.color : '#fff'};
  background-color: transparent;
  font-weight: 400;
  font-size: .7rem;
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
    animation-name: ${pulseLight};
    animation-duration: 3s;
    animation-iteration-count: infinite;
    background-color: rgba(255, 255, 255, 0.2);
    text-decoration: none;
  }
`;

// .white {
//     border: 2px solid #fff;
//     border-radius: 3px;
//     font-size: 1.8rem;
//     text-transform: uppercase;
//     color: #fff;
//     line-height: 3.8rem;
//     width: 100%;
//     max-width: 320px;
//     -webkit-transition: 0.3s;
//     transition: 0.3s;
// }

// .white:hover {
//     background-color: rgba(255, 255, 255, 0.2);
// }

// .pulse-light {
//     background-image: linear-gradient(
//         to right,
//         transparent 33%,
//         rgba(255,255,255,0.4) 50%,
//         transparent 66%
// );
//     background-size:300% 100%;
//     animation: shine 5s infinite;
// }


// .pulse-dark {
//     background-image: linear-gradient(
//         to right,
//         transparent 33%,
//         rgba(0,0,0,0.1) 50%,
//         transparent 66%
// );
//     background-size:300% 100%;
//     animation: shine 5s infinite;
// }


