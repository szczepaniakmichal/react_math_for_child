import styled from 'styled-components';
import { opacity } from "variables";

export const TaskListWrapper = styled.ul`
  list-style: none;
  margin: 0;

  li input {
    opacity: ${({isCheckTasksActive}) => isCheckTasksActive ? `${opacity}` : 1};
  }
}
`;
