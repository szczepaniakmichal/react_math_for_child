import styled from "styled-components";
import { gray} from "colors";

export const LiWrapper = styled.li`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  flex: 1 1 auto;
`;

export const CounterItem = styled.span`
 color: ${gray};
`;

CounterItem.displayName = 'ListItem_CounterItem'

