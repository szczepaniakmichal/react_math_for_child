import styled from "styled-components";
import { border, borderRadius, opacity, paddingTopBottom } from "variables";
import { theme } from "colors";
import { pulseLight } from "components/Button/styles";

const { darkGreen, green, red, white } = theme;

export const WrapperInputField = styled.div`
    display: flex;
    padding: ${paddingTopBottom};
    flex: 1 1 auto;
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
    flex-wrap: wrap;
`;

export const Input = styled.input`
    padding: 5px;
    outline: none;
    background-color: ${darkGreen};
    color: inherit;
    border: ${border};
    border-radius: ${borderRadius};
    flex: 0 1 auto;

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
    flex: 1 1 auto;
    color: inherit;
`;

export const inputStyles = (options = {}) => {
    const { isCorrect, isCheckTasksActive, ref, value } = options;

    if ( !ref.current ) return {};

    if ( !isCheckTasksActive && value ) {
        return {
            borderColor: ref.current.style.borderColor,
            opacity: 1,
            marginLeft: 'auto',
        }
    }

    return {
        borderColor: `${isCorrect ? green : red}`,
        opacity: `${opacity}`,
        marginLeft: 'auto',
    }
};

WrapperInputField.displayName = "WrapperInputField"
Label.displayName = "Label"
LabelField.displayName = "LabelField"
LabelResult.displayName = "LabelResult"
Input.displayName = "Input"
LabelTask.displayName = "LabelTask"
