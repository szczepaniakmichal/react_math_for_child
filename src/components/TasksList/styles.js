import styled from 'styled-components';
import { opacity } from "variables";
import { SelectWrapper } from "../Select/styles";

export const TaskListWrapper = styled.ul`
  list-style: none;
  margin: 0;

  li input {
    opacity: ${({isCheckTasksActive}) => isCheckTasksActive ? `${opacity}` : 1};
  }
}
`;

TaskListWrapper.displayName = 'TaskListWrapper';

