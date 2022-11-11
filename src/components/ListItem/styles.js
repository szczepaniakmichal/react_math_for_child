import styled from "styled-components";
import { white } from "colors";
import { opacity } from "variables";

export const LiWrapper = styled.li`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  flex: 1 1 auto;
`;

export const CounterItem = styled.span`
  color: ${white};
  opacity: ${opacity};
`;

CounterItem.displayName = 'ListItem_CounterItem'

