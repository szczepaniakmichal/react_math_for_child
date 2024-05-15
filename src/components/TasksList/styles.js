import styled from 'styled-components';
import { opacity } from "variables";

export const TaskListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  gap: 15px;

  li input {
    opacity: ${({ isCheckTasksActive }) => isCheckTasksActive ? `${opacity}` : 1};
  }
}
`;

TaskListWrapper.displayName = 'TaskListWrapper';

