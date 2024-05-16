import styled from "styled-components";
import {
    border,
    borderRadius,
    opacity,
    paddingTopBottom
} from "variables";
import { darkGreen, green, red, white } from "colors";
import { pulseLight } from "components/Button/styles";

export const WrapperInputField = styled.div`
  padding: ${paddingTopBottom};
  flex: 1 0 auto;
  color: inherit;
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: ${({ horizontalLabel }) => horizontalLabel ? 'row' : 'column'};
  color: inherit;
`;

export const LabelField = styled(Label)`
  flex-direction: column;
  color: inherit;
`;

export const LabelResult = styled(Label)`
  flex-direction: row;
  align-items: center;
  flex: 0 0 auto;
`;

export const Input = styled.input`
  padding: 5px;
  outline: none;
  background-color: ${darkGreen};
  color: inherit;
  border: ${border};
  border-radius: ${borderRadius};
  flex: 0 0 auto;

  &:focus {
    animation-name: ${pulseLight};
    animation-duration: 3s;
    animation-iteration-count: infinite;
    background-color: rgba(255, 255, 255, 0.2);
  }

  &::placeholder {
    color: ${white};
    opacity: ${opacity};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const LabelTask = styled.span`
  flex: 1 0 auto;
  color: inherit;
`;

export const inputStyles = (options = {}) => {
    const { isCorrect, isCheckTasksActive, ref } = options;

    if ( !ref.current ) return {};

    if ( !isCheckTasksActive ) {
        return {
            borderColor: ref.current.style.borderColor,
        }
    }

    return {
        borderColor: `${isCorrect ? green : red}`
    }
};

WrapperInputField.displayName = "WrapperInputField"
Label.displayName = "Label"
LabelField.displayName = "LabelField"
LabelResult.displayName = "LabelResult"
Input.displayName = "Input"
LabelTask.displayName = "LabelTask"
