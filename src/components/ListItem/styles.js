import styled from "styled-components";
import { gray, white} from "colors";

export const LiWrapper = styled.li`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  flex: 1 1 auto;
`;

export const CounterItem = styled.span`
 color: ${white};
  opacity: 0.6;
`;

CounterItem.displayName = 'ListItem_CounterItem'

